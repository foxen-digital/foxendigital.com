<template>
  <div class="pt-16">
    <section class="section-padding">
      <div class="container-custom">
        <!-- Header -->
        <div class="mb-12">
          <NuxtLink
            to="/projects"
            class="text-gray-400 hover:text-white transition-colors mb-4 inline-flex items-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </NuxtLink>
          <h1 class="heading-1 mb-4">Habit Tracker</h1>
          <p class="text-xl text-gray-400 max-w-3xl">
            A personal health tracking app built with Laravel. Track weight,
            walking, water, mood, and custom daily goals in one place.
          </p>
        </div>

        <!-- Screenshot -->
        <div class="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-12">
          <div
            class="aspect-video bg-gray-900 rounded-xl flex items-center justify-center text-gray-500"
          >
            <img
              class="rounded-xl"
              src="/img/habit-tracker.png"
              alt="Habit Tracker Dashboard"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h2 class="heading-2 mb-4">The Problem</h2>
              <p class="text-gray-400 mb-6">
                Personal health tracking often means juggling multiple apps—one
                for weight, another for water intake, something else for mood.
                Each app wants your attention, sends notifications, and creates
                friction.
              </p>
              <div
                class="bg-foxen-50 border-l-4 border-foxen-400 p-6 rounded-r-lg mb-6"
              >
                <p class="text-gray-700">
                  <strong>What's needed:</strong> A single, simple place to
                  track the health metrics that matter to you—without the noise.
                </p>
              </div>
              <p class="text-lg text-gray-400">
                Habit Tracker was built as a focused tool for tracking personal
                health goals: weight loss, daily walking, hydration, mood, and
                custom habits.
              </p>
            </div>

            <div>
              <h2 class="heading-2 mb-4">Our Solution</h2>
              <p class="text-lg text-gray-400 mb-8">
                A unified dashboard where all your health metrics live together.
                Quick entry forms, visual progress charts, and streak tracking
                to keep you motivated.
              </p>
              <div
                class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 mb-8"
              >
                <h3 class="font-semibold text-gray-200 mb-4">Core Features</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 bg-foxen-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-foxen-600 font-semibold">1</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-200">Weight Tracking</p>
                      <p class="text-gray-400 text-sm">
                        Log daily weight with progress charts and goal tracking.
                        Supports both metric and imperial units.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 bg-foxen-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-foxen-600 font-semibold">2</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-200">Walking & Water</p>
                      <p class="text-gray-400 text-sm">
                        Track daily walking distance and water intake with
                        simple target goals.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 bg-foxen-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-foxen-600 font-semibold">3</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-200">Mood Logging</p>
                      <p class="text-gray-400 text-sm">
                        Record daily mood with emoji-based entries and optional
                        notes. Spot patterns over time.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 bg-foxen-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-foxen-600 font-semibold">4</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-200">
                        Custom Daily Goals
                      </p>
                      <p class="text-gray-400 text-sm">
                        Create any habit you want to track. Check off daily and
                        view weekly completion statistics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="bg-foxen-50 border-l-4 border-foxen-400 p-6 rounded-r-lg mb-6"
              >
                <p class="text-gray-700">
                  <strong>The result:</strong> One app, one dashboard, all your
                  health metrics. Simple data entry without the app fatigue.
                </p>
              </div>
            </div>

            <div>
              <h2 class="heading-2 mb-4">Features</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <div
                  class="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <h3 class="font-semibold mb-2">Blood Glucose Tracking</h3>
                  <p class="text-gray-400 text-sm">
                    Log glucose readings with meal context—fasting, before
                    meals, or after meals.
                  </p>
                </div>
                <div
                  class="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <h3 class="font-semibold mb-2">Progress Charts</h3>
                  <p class="text-gray-400 text-sm">
                    Visualize your weight loss journey and goal completion over
                    time.
                  </p>
                </div>
                <div
                  class="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <h3 class="font-semibold mb-2">Streak Tracking</h3>
                  <p class="text-gray-400 text-sm">
                    Stay motivated with streak counters for daily habits and
                    goals.
                  </p>
                </div>
                <div
                  class="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <h3 class="font-semibold mb-2">Multi-User Support</h3>
                  <p class="text-gray-400 text-sm">
                    Secure authentication with two-factor support. Each user's
                    data stays private.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <div
              class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
            >
              <h3 class="font-semibold mb-4">Tech Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >Laravel 12</span
                >
                <span class="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >PHP 8.4</span
                >
                <span class="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >Blade</span
                >
                <span class="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >Tailwind CSS 4</span
                >
                <span class="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >Chart.js</span
                >
                <span class="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >Pest PHP</span
                >
              </div>
            </div>

            <div
              class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
            >
              <h3 class="font-semibold mb-4">Status</h3>
              <p class="text-foxen-400 hover:text-foxen-300 text-sm mb-4">
                Active Development
              </p>
              <p class="text-gray-400 text-sm">
                Habit Tracker is an internal tool under active development, with
                new features being added based on real-world usage.
              </p>
            </div>

            <div
              class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
            >
              <h3 class="font-semibold mb-4">Links</h3>
              <div class="space-y-3">
                <a
                  href="https://github.com/foxen-digital/habit-tracker"
                  target="_blank"
                  class="flex items-center gap-2 text-foxen-400 hover:text-foxen-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Habit Tracker | Foxen Digital",
});
</script>
