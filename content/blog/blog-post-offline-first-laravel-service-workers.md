---
title: "Building Offline-First Laravel Apps with Service Workers"
description: "How to create reliable, always-available web applications that work without an internet connection"
publishedAt: 2026-03-17
image: "/img/blog/blog-post-offline-first-laravel-service-workers.png"
category: Guide
author: Kareth
tags:
  - Laravel
  - Service Workers
  - Offline-First
  - PWA
  - Web Development
  - PHP
---

---

Picture this: you're on a train, working on your favorite Laravel application, when you hit a dead zone. The loading spinner appears. You wait. You refresh. Nothing. Your work is stuck until you regain connectivity.

For modern web applications, this shouldn't happen. Users expect apps to work regardless of their connection status. This is where offline-first architecture comes in—and Laravel makes it more achievable than you might think.

In this post, I'll walk you through building offline-first Laravel applications using Service Workers. We'll cover caching strategies, background sync, and practical patterns we've used at Foxen Digital to create reliable applications.

## What Does "Offline-First" Mean?

Offline-first is a design philosophy that treats network connectivity as an enhancement rather than a requirement. Instead of assuming users always have internet access, you build your app to work without it, then add network-dependent features on top.

The key technologies that make this possible:

- **Service Workers** - Scripts that run in the background, intercepting network requests
- **Cache API** - Store responses for offline access
- **IndexedDB** - Client-side database for structured data
- **Background Sync** - Defer actions until connectivity returns

## Setting Up a Service Worker in Laravel

Let's start with the basics. A service worker is a JavaScript file that sits between your app and the network.

### Step 1: Register the Service Worker

In your main JavaScript file (typically `resources/js/app.js`), add registration logic:

```javascript
// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('ServiceWorker registered:', registration.scope);
        } catch (error) {
            console.error('ServiceWorker registration failed:', error);
        }
    });
}
```

### Step 2: Create the Service Worker File

Create `public/sw.js`. This is where the magic happens:

```javascript
const CACHE_NAME = 'app-v1';
const STATIC_ASSETS = [
    '/',
    '/css/app.css',
    '/js/app.js',
    '/images/logo.svg',
    '/offline'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});
```

### Step 3: Handle Offline Fallbacks

Create an offline fallback page (`resources/views/offline.blade.php`):

```html
<!DOCTYPE html>
<html>
<head>
    <title>You're Offline</title>
    <style>
        body {
            font-family: system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background: #1a1a2e;
            color: #eee;
        }
        .offline-message {
            text-align: center;
            padding: 2rem;
        }
        h1 { margin-bottom: 0.5rem; }
        p { opacity: 0.7; }
    </style>
</head>
<body>
    <div class="offline-message">
        <h1>📡 You're Offline</h1>
        <p>Check your connection and try again.</p>
        <button onclick="location.reload()">Retry</button>
    </div>
</body>
</html>
```

## Caching Strategies

Different types of content need different caching strategies. Let's explore the main ones:

### 1. Cache-First (For Static Assets)

Best for: CSS, JavaScript, images, fonts—things that rarely change.

```javascript
// In sw.js fetch event
self.addEventListener('fetch', (event) => {
    if (isStaticAsset(event.request)) {
        event.respondWith(
            caches.match(event.request)
                .then(cached => cached || fetch(event.request))
        );
    }
});

function isStaticAsset(request) {
    const url = new URL(request.url);
    return url.pathname.match(/\.(css|js|png|jpg|svg|woff2?)$/);
}
```

### 2. Network-First (For Dynamic Content)

Best for: API responses, user data—things that change frequently.

```javascript
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        const cache = await caches.open('dynamic-v1');
        cache.put(request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        return cachedResponse || caches.match('/offline');
    }
}
```

### 3. Stale-While-Revalidate (Best of Both Worlds)

Best for: Semi-dynamic content—show cached version immediately, update in background.

```javascript
async function staleWhileRevalidate(request) {
    const cache = await caches.open('dynamic-v1');
    const cachedResponse = await cache.match(request);
    
    const fetchPromise = fetch(request)
        .then(networkResponse => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
        })
        .catch(() => cachedResponse);
    
    return cachedResponse || fetchPromise;
}
```

This is our go-to strategy at Foxen Digital for most application data. Users get instant responses while fresh data loads silently.

## Handling Offline Form Submissions

One of the biggest challenges is handling form submissions when offline. Here's how we solve it:

### Client-Side: Queue the Request

```javascript
// In your form submission handler
async function submitForm(formData) {
    if (!navigator.onLine) {
        // Store in IndexedDB for later
        await storePendingRequest({
            url: '/api/tasks',
            method: 'POST',
            body: formData,
            timestamp: Date.now()
        });
        
        // Show user-friendly message
        showToast('Saved offline. Will sync when connected.');
        return;
    }
    
    // Normal submission
    await fetch('/api/tasks', {
        method: 'POST',
        body: formData
    });
}
```

### Service Worker: Background Sync

```javascript
// In sw.js
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-pending') {
        event.waitUntil(syncPendingRequests());
    }
});

async function syncPendingRequests() {
    const pending = await getPendingRequests();
    
    for (const request of pending) {
        try {
            await fetch(request.url, {
                method: request.method,
                body: JSON.stringify(request.body),
                headers: { 'Content-Type': 'application/json' }
            });
            await removePendingRequest(request.id);
        } catch (error) {
            console.error('Sync failed:', error);
            // Will retry on next sync event
        }
    }
}
```

### Trigger Sync When Back Online

```javascript
// In your main app
window.addEventListener('online', () => {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready
            .then(registration => registration.sync.register('sync-pending'));
    }
});
```

## Laravel-Side Considerations

### API Responses for Offline Use

Structure your API responses to include all data needed for offline operation:

```php
// Good: Include related data
public function show(Task $task)
{
    return response()->json([
        'task' => $task,
        'project' => $task->project,
        'assignees' => $task->users,
        'comments' => $task->comments,
        '_meta' => [
            'cached_at' => now()->toIso8601String(),
            'cache_key' => "task.{$task->id}"
        ]
    ]);
}
```

### Handle Duplicate Submissions

When offline requests sync later, you might get duplicates:

```php
// Use idempotency keys
public function store(Request $request)
{
    $idempotencyKey = $request->header('X-Idempotency-Key');
    
    if ($idempotencyKey) {
        $existing = Task::where('idempotency_key', $idempotencyKey)->first();
        if ($existing) {
            return response()->json($existing, 200); // Return existing
        }
    }
    
    $task = Task::create([
        ...$request->validated(),
        'idempotency_key' => $idempotencyKey
    ]);
    
    return response()->json($task, 201);
}
```

## Testing Offline Functionality

### Chrome DevTools

1. Open DevTools (F12)
2. Go to Application > Service Workers
3. Check "Offline" checkbox
4. Test your app

### Automated Testing

```javascript
// Playwright test
test('form submission works offline', async ({ page, context }) => {
    await page.goto('/tasks');
    
    // Go offline
    await context.setOffline(true);
    
    // Submit form
    await page.fill('[name="title"]', 'Offline task');
    await page.click('button[type="submit"]');
    
    // Check for offline message
    await expect(page.locator('.toast')).toContainText('Saved offline');
    
    // Go back online
    await context.setOffline(false);
    
    // Wait for sync
    await page.waitForTimeout(2000);
    
    // Verify data synced
    await page.reload();
    await expect(page.locator('.task-title')).toContainText('Offline task');
});
```

## Real-World Example: Habit Tracker

At Foxen Digital, we implemented offline-first in our Habit Tracker app. Here's what we learned:

**What worked well:**
- Stale-while-revalidate for dashboard data
- IndexedDB for daily entry storage
- Background sync for syncing entries when connectivity returns

**Challenges we faced:**
- Conflict resolution when user edits same data on multiple devices
- Cache invalidation for time-sensitive data
- User education about offline capabilities

**The result:** Users could log habits on their commute, in tunnels, anywhere—and data synced seamlessly when they reconnected.

## Best Practices

1. **Start small** - Cache your app shell first, then expand
2. **Be transparent** - Show users their offline status
3. **Handle failures gracefully** - Never leave users stuck
4. **Test on real devices** - Simulators don't catch everything
5. **Version your caches** - Clear old caches on updates
6. **Consider data freshness** - Some data shouldn't be cached long

## When Offline-First Makes Sense

Not every app needs offline-first. Consider it when:

- Users work in areas with poor connectivity
- Data loss is unacceptable
- You want PWA installability
- Competitors have unreliable apps

## Getting Started Checklist

- [ ] Register service worker in main JS
- [ ] Create basic sw.js with install/activate handlers
- [ ] Cache static assets (CSS, JS, images)
- [ ] Implement at least one caching strategy
- [ ] Create offline fallback page
- [ ] Test with DevTools offline mode
- [ ] Add background sync for forms
- [ ] Handle duplicate submissions server-side

## Conclusion

Building offline-first Laravel applications isn't as complex as it might seem. With Service Workers and the Cache API, you can create reliable applications that work anywhere, anytime.

Start with your app shell—cache the basics. Add network-first for your API calls. Implement stale-while-revalidate for the best user experience. And don't forget to handle that moment when your users come back online.

Your users on trains, in elevators, and in rural areas will thank you.

---

*Want to see offline-first in action? Check out our Habit Tracker app, built with Laravel and designed to work anywhere. Have questions? Drop us a line at Foxen Digital.*

---

**Tags:** Laravel, Service Workers, Offline-First, PWA, Web Development, PHP
**Published:** March 17, 2026
**Author:** Kareth, Foxen Digital
