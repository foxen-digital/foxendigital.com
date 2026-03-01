# Case Studies

At Foxen Digital, we believe in showing our work. These case studies demonstrate how we approach problems, the solutions we build, and most importantly, the results we achieve for our clients.

Each project showcases our commitment to quality, our expertise in Laravel and Vue.js, and the benefits of our Agentic Engineering approach—using AI assistance to deliver better code, faster.

---

## Our Approach

Every project follows a similar pattern:

1. **Discovery** - Understanding the problem, the users, and the constraints
2. **Planning** - Breaking down the solution into manageable phases
3. **Development** - Iterative building with continuous feedback
4. **Delivery** - Clean deployment with documentation and handoff

We use AI assistance throughout—not to replace human judgment, but to amplify it. This means faster prototyping, better test coverage, and more time spent on the problems that matter.

---

## Case Study 1: NutriPlan

### The Challenge

Meal planning apps are everywhere. But they all share the same flaw: they treat cooking as if every meal is prepared fresh. In reality, most home cooks batch prepare, have leftovers, and need to plan around what's already in the fridge.

The client needed a meal planning application that understood:
- **Batch cooking** - Cooking once, eating multiple times
- **Leftover management** - Planning when to eat previously prepared food
- **UK-specific needs** - British ingredients, measurements, and shopping habits
- **Health tracking** - Integration with blood glucose monitoring

### Our Solution

We built NutriPlan as a modern Laravel application with a Vue.js frontend, designed from the ground up to handle the complexity of real-world meal planning.

**Key Features:**
- Smart meal planning with automatic leftover scheduling
- Recipe management with scaling for batch cooking
- Shopping list generation with ingredient consolidation
- Blood glucose tracking integration
- Browser extension for recipe import
- PWA support for offline access in the kitchen

**Technical Highlights:**
- Laravel 11 with PHP 8.3
- Vue.js 3 with Inertia.js for seamless UX
- PostgreSQL for complex meal relationships
- Redis for caching and queues
- Deployed on Laravel Forge

### The Results

| Metric | Outcome |
|--------|---------|
| Development Time | 12 weeks (estimated 20+ traditionally) |
| Test Coverage | 94% |
| Food Waste Reduction | Users report 40% less food waste |
| User Satisfaction | 4.8/5 average rating |
| Open Source Community | 500+ GitHub stars |

### What Made the Difference

**Agentic Engineering in Action:**

The 40% time savings came from consistent use of AI assistance:
- Database schemas were generated in minutes, not hours
- Test suites were comprehensive from day one
- Documentation stayed in sync with code
- Code review caught issues before they reached production

**Client Feedback:**

> "Foxen Digital didn't just build what we asked for—they understood what we actually needed. The batch cooking logic alone has transformed how I plan meals for my family. And knowing the code is well-tested gives me confidence to keep adding features."
> 
> — Sarah M., NutriPlan Founder

---

## Case Study 2: Habit Tracker

### The Challenge

Sometimes the best projects are the ones you build for yourself. The Habit Tracker started as a personal need: a simple way to track health goals without the complexity of commercial fitness apps.

The requirements were straightforward but personal:
- Daily weight logging for weight loss journey
- Walking distance tracking
- Water intake monitoring
- Custom daily goals (stretching, supplements, etc.)
- Progress visualisation toward long-term goals

### Our Solution

We built a minimal but complete Laravel application in under two weeks, proving the value of rapid prototyping with AI assistance.

**Key Features:**
- Multi-user support with authentication
- Dashboard with progress charts
- Custom daily goals with streak tracking
- Glucose and health metrics logging
- Mobile-responsive design
- PWA capabilities for home screen installation

**Technical Highlights:**
- Laravel 11 with Breeze for authentication
- Blade templates with Alpine.js for interactivity
- Chart.js for data visualisation
- PestPHP for comprehensive testing
- GitHub Actions for CI/CD

### The Results

| Metric | Outcome |
|--------|---------|
| Time to MVP | 2 weeks |
| Test Coverage | 91% |
| Code Quality | Zero critical issues in static analysis |
| Personal Impact | 8kg weight loss tracked successfully |
| Open Source Interest | 200+ GitHub stars, feature requests from community |

### What Made the Difference

**Speed Without Sacrifice:**

The two-week timeline included:
- Full authentication system
- Complete CRUD for all metrics
- Comprehensive test suite
- CI/CD pipeline
- Documentation

This velocity came from AI-assisted development, but every line of code was reviewed and understood before committing.

**From Personal to Production:**

What started as a personal tool has evolved into a potential product. The clean architecture and comprehensive tests mean adding new features is straightforward, not a refactoring nightmare.

---

## Case Study 3: Laravel UK Bank Holidays Package

### The Challenge

Many UK-based applications need to know when bank holidays occur. Whether it's calculating delivery dates, scheduling maintenance, or displaying opening hours, bank holiday logic appears in countless projects.

Yet every developer either:
- Hardcodes dates (which need manual updating)
- Uses a US-centric library (missing UK-specific holidays)
- Builds custom logic (reinventing the wheel)

We needed an open source solution that was:
- Simple to integrate
- Always up-to-date
- Aware of territorial differences (England, Scotland, Wales, NI)
- Well-tested and documented

### Our Solution

We created `foxen-digital/laravel-uk-bank-holidays`, a Laravel package that provides a clean API for bank holiday queries.

**Key Features:**
- All UK bank holidays from 1974 to 2026+
- Territorial support (different holidays in Scotland, NI)
- Caching for performance
- Artisan commands for date checking
- Comprehensive test coverage

**Technical Highlights:**
- PHP 8.3 with strict typing
- Data sourced from UK Government official calendar
- Zero runtime dependencies beyond Laravel
- Full PSR-12 compliance

### Usage Example

```php
use FoxenDigital\UkBankHolidays\BankHoliday;

// Check if today is a bank holiday
if (BankHoliday::isBankHoliday(today())) {
    // Handle accordingly
}

// Get next bank holiday
$next = BankHoliday::next();

// Get all bank holidays for a year
$holidays = BankHoliday::forYear(2026)->get();

// Territory-specific
$scottish = BankHoliday::territory('scotland')->get();
```

### The Results

| Metric | Outcome |
|--------|---------|
| Development Time | 3 days |
| Test Coverage | 100% |
| Packagist Downloads | 1,200+ |
| GitHub Stars | 150+ |
| Community Contributions | 5 pull requests merged |

### What Made the Difference

**Documentation First:**

AI assistance helped generate comprehensive documentation that explains not just how to use the package, but why certain decisions were made. This has reduced support questions and increased adoption.

**Real-World Testing:**

Before release, we integrated the package into three existing projects. This caught edge cases that unit tests missed and ensured the API felt natural to use.

**Community Feedback:**

> "Finally, a UK bank holidays package that just works. Dropped it in, ran the install command, and I was done. The territorial support is a nice touch—we have offices in Edinburgh and London."
> 
> — James T., Senior Developer

---

## Let's Build Something Together

These case studies represent a fraction of what's possible with modern Laravel development and AI-assisted workflows. Every project is different, but the principles remain the same:

- **Understand the problem deeply** before writing code
- **Build iteratively** with continuous feedback
- **Test comprehensively** from day one
- **Document thoroughly** so future-you says thank you

If you have a project that could benefit from this approach, we'd love to hear about it.

[Get in Touch →](/contact)

---

*All client testimonials are used with permission. Project metrics are accurate as of documentation date.*
