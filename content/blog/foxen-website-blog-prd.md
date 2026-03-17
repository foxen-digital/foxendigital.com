---
title: "Product Requirements Document: Foxen Digital Blog Section"
description: "**Project:** Foxen Digital Website **Feature:** Blog Section with Nuxt Content Integration **Author:** Kareth **Created:** 2026-03-04 **Status:** D..."
publishedAt: "2026-03-24"
category: research
author: Kareth
tags:
  - foxen-digital
  - prd
---

# Product Requirements Document: Foxen Digital Blog Section

**Project:** Foxen Digital Website  
**Feature:** Blog Section with Nuxt Content Integration  
**Author:** Kareth  
**Created:** 2026-03-04  
**Status:** Draft

---

## 1. Executive Summary

Integrate the Nuxt Content module into the Foxen Digital website to power the blog section with Markdown-based posts. This will transform the current placeholder blog index into a fully functional blog with real, maintainable content stored in the repository.

---

## 2. Problem Statement

The current blog section (`/blog`) displays six placeholder posts with hardcoded content in a Vue component. There is no way to:
- Display actual blog content
- Manage posts as Markdown files
- Scale the blog without code changes
- Maintain version-controlled content alongside the codebase

---

## 3. Goals

### Primary Goals
1. **Enable Markdown-based blogging** - Authors write posts as `.md` files in a `content/blog/` directory
2. **Preserve existing blog index design** - Keep the current visual layout and structure
3. **Implement dynamic routing** - Individual blog posts accessible at `/blog/[slug]`
4. **Establish content schema** - Define frontmatter structure for consistent post metadata

### Secondary Goals
- Enable content querying and filtering by category/date
- Support SEO metadata per post
- Maintain existing newsletter signup section

---

## 4. Technical Requirements

### 4.1 Dependencies

Add the following to `package.json`:

```json
{
  "dependencies": {
    "@nuxt/content": "^3.0.0"
  }
}
```

### 4.2 Nuxt Configuration

Update `nuxt.config.ts` to include the Content module:

```ts
export default defineNuxtConfig({
  // ... existing config
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content"
  ],
});
```

### 4.3 Content Configuration

Create `content.config.ts` in the project root:

```ts
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        publishedAt: z.string(),
        image: z.string().optional(),
        featured: z.boolean().optional().default(false),
      }),
    }),
  },
})
```

---

## 5. Content Structure

### 5.1 Directory Layout

```
content/
├── blog/
│   ├── why-we-chose-laravel.md
│   ├── building-nutriplan-open.md
│   ├── real-cost-cheap-development.md
│   └── ...
└── case-studies.md (existing)
```

### 5.2 Blog Post Frontmatter Schema

Each Markdown file must include this frontmatter block:

```yaml
---
title: "Why We Chose Laravel for Everything"
description: "The rationale behind our Laravel-first approach and why it delivers better results for clients."
category: "Laravel"
publishedAt: "2026-03-15"
image: "/images/blog/laravel-choice.jpg"
featured: true
---
```

#### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title, displayed on index and post page |
| `description` | string | Yes | Short teaser for index, meta description |
| `category` | string | Yes | Category badge (Laravel, Open Source, Business, etc.) |
| `publishedAt` | string | Yes | ISO date (YYYY-MM-DD) for sorting and display |
| `image` | string | No | Optional featured image path |
| `featured` | boolean | No | Mark as featured post (default: false) |

---

## 6. Page Components

### 6.1 Blog Index Page (`pages/blog/index.vue`)

**Modifications Required:**

1. Replace hardcoded `posts` array with dynamic content query
2. Query the `blog` collection, ordered by `publishedAt` descending
3. Generate post links dynamically using the slug/path
4. Display "Coming Soon" for posts with future dates

**Updated Script Section:**

```vue
<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('publishedAt', 'DESC')
    .all()
);

useHead({
  title: "Blog | Foxen Digital",
});
</script>
```

**Template Updates:**

- Change `post.link || '#'` to `/blog/${post.stem}` (or equivalent path resolution)
- Update date display to use `publishedAt`
- Use `description` for teaser text
- Map `category` directly from frontmatter

### 6.2 Blog Post Page (`pages/blog/[slug].vue`)

Create a new dynamic route component:

```vue
<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .where('stem', '=', `blog/${slug}`)
    .first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found' });
}

useHead({
  title: `${post.value.title} | Foxen Digital`,
  meta: [
    { name: 'description', content: post.value.description },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
  ],
});
</script>

<template>
  <div class="pt-16">
    <article class="section-padding">
      <div class="container-custom max-w-3xl">
        <!-- Header -->
        <header class="mb-12">
          <span class="text-foxen-400 text-sm font-medium">
            {{ post?.category }}
          </span>
          <h1 class="heading-1 mt-2">{{ post?.title }}</h1>
          <p class="text-gray-400 mt-4">{{ post?.description }}</p>
          <time class="text-foxen-200 text-sm mt-4 block">
            {{ formatDate(post?.publishedAt) }}
          </time>
        </header>

        <!-- Content -->
        <ContentRenderer :value="post" class="prose prose-invert prose-lg max-w-none" />

        <!-- Footer -->
        <footer class="mt-16 pt-8 border-t border-gray-700">
          <NuxtLink to="/blog" class="text-foxen-400 hover:text-foxen-300">
            ← Back to Blog
          </NuxtLink>
        </footer>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
// Helper function for date formatting
function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
</script>
```

---

## 7. Styling Requirements

### 7.1 Prose Styling

Install Tailwind Typography for blog content rendering:

```bash
npm install -D @tailwindcss/typography
```

Update `tailwind.config.ts`:

```ts
export default {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // ... existing config
}
```

### 7.2 Custom Prose Components (Optional)

Create `components/content/` directory for custom MDC components if needed:
- Callout boxes
- Code blocks with syntax highlighting
- Image figures with captions

---

## 8. Migration Plan

### Phase 1: Setup (Estimated: 1 hour)
- [ ] Install `@nuxt/content` dependency
- [ ] Add module to `nuxt.config.ts`
- [ ] Create `content.config.ts` with blog collection
- [ ] Create `content/blog/` directory

### Phase 2: Component Updates (Estimated: 2 hours)
- [ ] Update `pages/blog/index.vue` to query collection
- [ ] Create `pages/blog/[slug].vue` for individual posts
- [ ] Add prose styling configuration
- [ ] Test routing and content rendering

### Phase 3: Initial Content (Estimated: 1 hour)
- [ ] Create placeholder `.md` files matching current mock posts
- [ ] Add proper frontmatter to each file
- [ ] Verify index displays posts correctly

### Phase 4: Polish (Estimated: 1 hour)
- [ ] Add 404 handling for missing posts
- [ ] Implement date formatting
- [ ] Add SEO meta tags
- [ ] Test responsive design

---

## 9. Acceptance Criteria

| ID | Criteria | Priority |
|----|----------|----------|
| AC1 | Blog index displays posts from `content/blog/*.md` files | High |
| AC2 | Posts are ordered by `publishedAt` date (newest first) | High |
| AC3 | Clicking a post navigates to `/blog/[slug]` and renders content | High |
| AC4 | Each post displays title, category, description, and date | High |
| AC5 | Markdown content renders with proper typography styling | High |
| AC6 | SEO meta tags are populated from frontmatter | Medium |
| AC7 | Newsletter section remains unchanged | Medium |
| AC8 | Missing posts return 404 page | Medium |
| AC9 | Featured posts can be highlighted (optional styling) | Low |

---

## 10. Example Blog Post File

**File:** `content/blog/why-we-chose-laravel.md`

```markdown
---
title: "Why We Chose Laravel for Everything"
description: "The rationale behind our Laravel-first approach and why it delivers better results for clients."
category: "Laravel"
publishedAt: "2026-03-15"
featured: true
---

# Why We Chose Laravel for Everything

When we founded Foxen Digital, we made a deliberate choice: Laravel would be our primary framework. This wasn't a random decision—it came from years of experience with different technologies and a clear understanding of what clients actually need.

## The Laravel Philosophy

Laravel's motto is "the PHP framework for web artisans." This isn't just marketing speak. It reflects a philosophy that developers should enjoy their work and produce elegant, maintainable code.

## Business Benefits

- **Rapid Development**: Laravel's ecosystem reduces development time significantly
- **Long-term Maintainability**: Clean conventions mean code stays readable
- **Strong Community**: Problems have documented solutions
- **Enterprise Ready**: Used by companies of all sizes

## Why Not [Alternative Framework]?

We've worked with many frameworks. Each has strengths. But Laravel consistently delivers the best balance of:

1. Developer productivity
2. Code quality
3. Ecosystem maturity
4. Long-term stability

## Conclusion

Laravel isn't just our preference—it's a strategic advantage that helps us deliver better results for our clients, faster.
```

---

## 11. Out of Scope

The following are explicitly **not** part of this PRD:
- Blog search functionality
- Author pages
- Comments system
- Social sharing buttons
- RSS feed generation
- Related posts recommendations
- Reading time estimates

These may be considered for future phases.

---

## 12. Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Nuxt Content v3 breaking changes | Low | Medium | Pin version, review changelog before updates |
| Content file naming conflicts | Low | Low | Establish naming convention (kebab-case with date prefix) |
| Missing frontmatter fields | Medium | Low | Schema validation will catch during build |

---

## 13. Success Metrics

- All 6 placeholder posts replaced with real Markdown files
- Blog index loads in < 500ms
- Individual post pages render correctly
- No TypeScript errors
- Build succeeds without warnings

---

## 14. References

- [Nuxt Content Documentation](https://content.nuxt.com/)
- [Nuxt Content Collections](https://content.nuxt.com/docs/collections/define)
- [Markdown in Nuxt Content](https://content.nuxt.com/docs/files/markdown)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

---

*Document version: 1.0*  
*Last updated: 2026-03-04*
