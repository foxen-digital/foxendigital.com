<template>
  <div class="pt-16">
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mb-16">
          <h1 class="heading-1 mb-6">Blog</h1>
          <p class="text-xl text-gray-400">
            Thoughts on web development, Laravel, open source, and building
            quality software.
          </p>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Placeholder posts -->
          <article
            v-for="post in posts"
            class="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden group"
          >
            <div
              class="aspect-video bg-gray-700/50 flex items-center justify-center text-gray-500"
            >
              Blog Image
            </div>
            <div class="p-6">
              <span class="text-foxen-400 text-sm font-medium">
                {{ post.category }}
              </span>
              <h2
                class="font-semibold text-lg mt-2 group-hover:text-foxen-400 transition-colors"
              >
                <a :href="post.link || '#'">{{ post.title }}</a>
              </h2>
              <p class="text-gray-400 text-sm mt-2">
                {{ post.teaser }}
              </p>
              <p class="text-foxen-200 text-xs mt-3 text-right">
                {{ post.published || "Coming Soon" }}
              </p>
            </div>
          </article>
        </div>

        <!-- Newsletter -->
        <div
          class="mt-20 bg-gray-800/30 rounded-xl p-8 border border-gray-700/50 text-center"
        >
          <h2 class="heading-3 mb-4">Stay Updated</h2>
          <p class="text-gray-400 mb-6">
            Subscribe to get notified when we publish new articles.
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-foxen-500 focus:outline-none"
            />
            <button type="submit" class="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Blog | Foxen Digital",
});

const posts = [
  {
    category: "Laravel",
    title: "Why We Chose Laravel for Everything",
    teaser:
      "The rationale behind our Laravel-first approach and why it delivers better results for clients.",
    link: null,
    published: null,
  },
  {
    category: "Open Source",
    title: "Building NutriPlan in the Open",
    teaser:
      "The journey of building a meal planning app that handles leftovers properly—and why open source matters.",
    link: null,
    published: null,
  },
  {
    category: "Business",
    title: "The Real Cost of Cheap Development",
    teaser: "TWhy investing in quality development pays off in the long run.",
    link: null,
    published: null,
  },
  {
    category: "Agentic Engineering",
    title: "Building AI-Powered Development Workflows",
    teaser:
      "How we integrate AI assistants into Laravel and Vue development workflows for faster, higher-quality delivery.",
    link: null,
    published: null,
  },
  {
    category: "Rapid Prototyping",
    title: "From Idea to Deployed App in 4 Hours",
    teaser:
      "How we built the Habit Tracker in a single day and what it teaches about rapid development.",
    link: null,
    published: null,
  },
];
</script>
