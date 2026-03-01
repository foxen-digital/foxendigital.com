<template>
  <div class="pt-16">
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mb-16">
          <h1 class="heading-1 mb-6">Projects</h1>
          <p class="text-xl text-gray-400">
              Explore our portfolio of web applications and open source tools. Each project showcases our commitment to quality, modern technology, and solving real problems.
          </p>
        </div>

        <div class="space-y-16">
          <!-- NutriPlan -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div class="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-gray-500">
                NutriPlan Screenshot
              </div>
            </div>
            <div>
              <span class="text-foxen-400 text-sm font-medium">Featured Project</span>
              <h2 class="heading-2 mt-2 mb-4">NutriPlan</h2>
              <p class="text-gray-400 mb-4">
                  A smarter approach to meal planning. Handles batch cooking, meal prep, and leftovers properly—unlike other meal planners.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">Laravel</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">Inertia.js</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">Vue.js</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">PostgreSQL</span>
              </div>
              <div class="flex gap-4">
                <NuxtLink to="/projects/nutriplan" class="btn-primary">
                    Learn More
                </NuxtLink>
                <a href="https://github.com/MrKareth/nutriplan" target="_blank" class="btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- Habit Tracker -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <span class="text-foxen-400 text-sm font-medium">Internal Tool</span>
              <h2 class="heading-2 mt-2 mb-4">Habit Tracker</h2>
              <p class="text-gray-400 mb-4">
                  Personal health tracking mini-app with custom daily goals, streak tracking, and progress visualization.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">Laravel</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">Chart.js</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">Tailwind CSS</span>
              </div>
              <div class="flex gap-4">
                <a href="https://github.com/foxen-digital/habit-tracker" target="_blank" class="btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
            <div class="order-1 lg:order-2 bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div class="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-gray-500">
                Habit Tracker Screenshot
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-20 text-center">
          <p class="text-gray-400 mb-6">Have a project in mind?</p>
          <NuxtLink to="/contact" class="btn-primary">
            Let's Talk
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects | Foxen Digital',
})
</script>
