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
        <div v-if="posts && posts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in posts"
            :key="post.stem"
            class="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden group"
          >
            <NuxtLink :to="`/blog/${post.stem.replace('blog/', '')}`">
              <div
                v-if="post.image"
                class="aspect-video bg-gray-700/50 overflow-hidden"
              >
                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div
                v-else
                class="aspect-video bg-gradient-to-br from-foxen-900/50 to-gray-700/50 flex items-center justify-center"
              >
                <span class="text-foxen-400/50 text-sm font-medium">{{ post.category }}</span>
              </div>
            </NuxtLink>
            <div class="p-6">
              <span class="text-foxen-400 text-sm font-medium">
                {{ post.category }}
              </span>
              <h2
                class="font-semibold text-lg mt-2 group-hover:text-foxen-400 transition-colors"
              >
                <NuxtLink :to="`/blog/${post.stem.replace('blog/', '')}`">
                  {{ post.title }}
                </NuxtLink>
              </h2>
              <p class="text-gray-400 text-sm mt-2">
                {{ post.description }}
              </p>
              <p class="text-foxen-200 text-xs mt-3 text-right">
                {{ formatDate(post.publishedAt) }}
              </p>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <p class="text-gray-400">No posts found.</p>
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

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('publishedAt', 'DESC')
    .all()
);

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return 'Coming Soon';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
</script>
