---
title: "Building Open Source Laravel Packages: A Practical Guide"
description: "Why we open source our work, how we build packages, and what we've learned along the way"
publishedAt: 2026-03-03
category: content
author: Kareth
tags:
  - laravel
  - package
---

# Building Open Source Laravel Packages: A Practical Guide

*Why we open source our work, how we build packages, and what we've learned along the way*

---

I'll be honest - the first Laravel package I released was terrifying.

Not because the code was particularly complex. It was a simple utility, maybe 200 lines. But hitting "publish" on Packagist meant anyone could see it. Judge it. Find the mistakes I'd inevitably made.

That vulnerability doesn't really go away. But what I've learned since then is that the Laravel community is remarkably kind. People don't tear apart your code, they help improve it. They open PRs, not just issues. They say "thanks" more often than they complain.

This is what I wish I'd known when we started contributing to open source at Foxen Digital.

## The Real Reason We Open Source

It's not purely altruistic. I'd love to say we do it entirely to give back to the community, and that's part of it. But there's also self-interest involved.

Every Laravel project we build stands on the shoulders of packages others have shared. Spatie's work alone has saved us hundreds of hours. Laravel Debugbar has caught countless N+1 queries before they hit production. Pest made testing enjoyable again.

Contributing back is partly gratitude, but it's also how the ecosystem stays healthy. If everyone only took, there'd be nothing left to take.

There's also the credibility piece. A well-maintained package is a public portfolio. Potential clients can see how we structure code, handle edge cases, write documentation. It's proof, not just claims, that we know what we're doing.

## How We Find Package Ideas

Good packages don't start as "let's build a package." They start as actual problems we needed to solve.

Our UK Bank Holidays package came from a client project: a delivery scheduling system that needed to skip bank holidays. The first version was a hardcoded array of dates tucked into a service class. It worked, but every time a new year rolled around, we'd have to remember to update it.

Then we realised: every UK business application probably needs this. Why solve it once when we could solve it properly and share it?

The questions we ask ourselves:
- Did we just solve something that others might face?
- Is it generic enough to be useful beyond our specific context?
- Can we maintain it long-term?

If the answer is yes to all three, it's probably worth extracting.

## What We've Learned About Building Packages

### Start Smaller Than You Think

The first version of a package should feel almost too simple. UK Bank Holidays started with thing: tell you if a date is a bank holiday. That's it. No scheduling, no calendar views, no complexity.

You can always add features later; our API grew to include a few more methods. But you can't easily take them away once people depend on them.

### Configuration Over Assumptions

Every assumption you bake in will be wrong for someone. We assumed England holidays by default - then realised Scottish users would find that frustrating. So we made territory configurable with sensible defaults.

The goal: most users shouldn't need to configure anything, but those who do can make it work for their situation.

### Test the Embarrassing Edge Cases

The tests I'm most proud of aren't the happy path ones. They're the weird cases I thought would never happen. Until they did.

What happens if someone passes a date string instead of a Carbon instance? What if the government API is down when we try to fetch new holiday data? What about substitute days when Christmas falls on a weekend?

Those edge cases are where packages earn or lose trust.

### Documentation Is Half the Work

I used to think documentation was something you added at the end. I was wrong.

The way I write docs now is to start with the README. Before I've written the actual code, I write down how I want it to feel to use:

```php
// This is what I want to be able to write:
if (isBankHoliday(now())) {
    return "Sorry, we're closed!";
}
```

Then I build the package to make that API possible. Documentation-first design forces you to think about developer experience before you get attached to any implementation.

## The Maintenance Reality

Here's something nobody tells you about open source: the work doesn't stop when you publish.

Dependencies get outdated. PHP versions change. Laravel releases new features that might make your approach obsolete. Users find bugs you never encountered. Someone will inevitably ask for a feature you have zero interest in building.

We've learned to:

- **Respond quickly to issues**, even if it's just acknowledging we've seen it. Silence feels like abandonment.
- **Be honest about capacity.** "This isn't something we can work on right now" is better than silence or false promises.
- **Keep dependencies minimal.** Every package you depend on is something that can break.
- **Take semantic versioning seriously.** Breaking changes mean major versions, always.

The packages that build real trust aren't the ones with the most features. They're the ones that keep working reliably, year after year.

## What I Wish I'd Known Earlier

Your first package will probably be imperfect. That's okay. The Laravel community is generous with feedback and gentle with criticism.

Code you write for others to use is different from application code. You have to think about developers who've never seen your project, who might use it in ways you didn't anticipate. It's a different skill, and you develop it by doing it.

Documentation isn't a nice-to-have. It's the first thing people see, and it determines whether they'll even try your package. Invest real time in it.

The best time to start is now. Find a small problem you've solved, extract it, and share it. Your contribution doesn't need to be revolutionary to be valuable.

---

*Foxen Digital builds Laravel applications and contributes to the open source ecosystem. Check out our packages at [github.com/foxen-digital](https://github.com/foxen-digital).*
