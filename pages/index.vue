<template>
  <div>
    <!-- Hero Section -->
    <section
      class="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <!-- Background gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-foxen-900/20 via-transparent to-transparent"
      ></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <h1 class="heading-1 mb-6">
            Web Applications That Work
            <span class="text-foxen-500">As Hard As You Do</span>
          </h1>
          <p class="text-xl text-gray-400 mb-8 max-w-2xl">
            We build bespoke web applications and open source tools for
            businesses that value quality, transparency, and results.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/contact" class="btn-primary">
              Start a Project
            </NuxtLink>
            <NuxtLink to="/projects" class="btn-secondary">
              View Our Work
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="section-padding bg-gray-900/50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Why Foxen Digital?</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            We're not just developers - we're partners in your digital success.
            We believe great software should be accessible, maintainable, and
            built to last.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <div
              class="w-12 h-12 bg-foxen-500/10 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-foxen-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="heading-3 mb-3">Built in the UK</h3>
            <p class="text-gray-400">
              Based in the UK, working with clients who value clear
              communication, reliable delivery, and a team that understands
              British business needs.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <div
              class="w-12 h-12 bg-foxen-500/10 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-foxen-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="heading-3 mb-3">Open by Default</h3>
            <p class="text-gray-400">
              We contribute to the open source community and build transparently
              where possible. Our code is clean, documented, and maintainable.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <div
              class="w-12 h-12 bg-foxen-500/10 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-foxen-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="heading-3 mb-3">Quality First</h3>
            <p class="text-gray-400">
              We'd rather do fewer things exceptionally well than many things
              mediocre. Every project gets our full attention and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">What We Build</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="group p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3
              class="heading-3 mb-3 group-hover:text-foxen-400 transition-colors"
            >
              Custom Web Applications
            </h3>
            <p class="text-gray-400 mb-4">
              Bespoke web applications tailored to your business needs. From
              internal tools to customer-facing platforms, we build solutions
              that scale.
            </p>
            <NuxtLink
              to="/services"
              class="text-foxen-400 hover:text-foxen-300 text-sm font-medium"
            >
              Learn more →
            </NuxtLink>
          </div>

          <div
            class="group p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3
              class="heading-3 mb-3 group-hover:text-foxen-400 transition-colors"
            >
              Laravel Development
            </h3>
            <p class="text-gray-400 mb-4">
              Specialists in the Laravel ecosystem. API development, package
              creation, performance optimisation, and long-term maintenance.
            </p>
            <NuxtLink
              to="/services"
              class="text-foxen-400 hover:text-foxen-300 text-sm font-medium"
            >
              Learn more →
            </NuxtLink>
          </div>

          <div
            class="group p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3
              class="heading-3 mb-3 group-hover:text-foxen-400 transition-colors"
            >
              Open Source Tools
            </h3>
            <p class="text-gray-400 mb-4">
              We create and maintain open source packages that help developers
              work smarter. Browse our contributions on GitHub.
            </p>
            <NuxtLink
              to="/open-source"
              class="text-foxen-400 hover:text-foxen-300 text-sm font-medium"
            >
              View packages →
            </NuxtLink>
          </div>

          <div
            class="group p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3
              class="heading-3 mb-3 group-hover:text-foxen-400 transition-colors"
            >
              Agentic Engineering
            </h3>
            <p class="text-gray-400 mb-4">
              Leveraging AI-assisted development for faster delivery without
              compromising quality. Modern workflows, intelligent tooling.
            </p>
            <NuxtLink
              to="/services"
              class="text-foxen-400 hover:text-foxen-300 text-sm font-medium"
            >
              Learn more →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- NutriPlan Showcase -->
    <section class="section-padding bg-gray-900/50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-foxen-400 text-sm font-medium mb-4 block"
              >Featured Project</span
            >
            <h2 class="heading-2 mb-4">NutriPlan</h2>
            <p class="text-gray-400 text-lg mb-6">
              A smarter approach to meal planning. Most meal planners assume one
              meal = one day. NutriPlan doesn't.
            </p>

            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-foxen-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="text-gray-300">
                  Recipes have serving amounts - add them to your plan multiple
                  times
                </p>
              </div>
              <div class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-foxen-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="text-gray-300">
                  First instance = "to cook", subsequent = planned leftovers
                </p>
              </div>
              <div class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-foxen-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="text-gray-300">
                  Shopping lists consolidate ingredients from "to cook" meals
                  only
                </p>
              </div>
              <div class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-foxen-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="text-gray-300">
                  No more over-buying, no more food waste
                </p>
              </div>
              <div class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-foxen-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="text-gray-300">Open source and self-hostable</p>
              </div>
            </div>

            <div class="flex gap-4">
              <NuxtLink to="/projects/nutriplan" class="btn-primary">
                Explore NutriPlan →
              </NuxtLink>
              <a
                href="https://github.com/MrKareth/nutriplan"
                target="_blank"
                class="btn-secondary"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <!-- Placeholder for screenshot -->
            <div
              class="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-gray-500"
            >
              <img
                class="rounded-xl"
                src="/img/nutriplan.png"
                alt="NutriPlan recipe view"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-4">Ready to Build Something Great?</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you have a fully-formed idea or just a problem that needs
          solving, we'd love to chat.
        </p>
        <NuxtLink to="/contact" class="btn-primary text-lg px-8 py-4">
          Start a Conversation
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Foxen Digital | Quality Web Development",
});
</script>
