<template>
  <div class="pt-16">
    <!-- Header with subtle gradient -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-foxen-900/10 via-transparent to-transparent"></div>
      <div class="section-padding relative z-10">
        <div class="container-custom">
          <div class="max-w-4xl">
            <h1 class="heading-1 mb-6">Blog</h1>
            <p class="text-xl text-gray-400">
              Thoughts on web development, Laravel, open source, and building
              quality software.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section v-if="featuredPost" class="pb-12">
      <div class="container-custom">
        <span class="text-foxen-400 text-sm font-medium mb-4 block">Featured</span>
        <article class="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden group hover:border-gray-600 transition-colors duration-300">
          <div class="grid md:grid-cols-2 gap-0">
            <!-- Image -->
            <NuxtLink :to="`/blog/${featuredPost.stem.replace('blog/', '')}`" class="block">
              <div v-if="featuredPost.image" class="aspect-video md:aspect-auto md:h-full bg-gray-700/50 overflow-hidden">
                <img
                  :src="featuredPost.image"
                  :alt="featuredPost.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div v-else class="aspect-video md:aspect-auto md:h-full min-h-48 bg-gradient-to-br from-foxen-900/50 to-gray-700/50 flex items-center justify-center">
                <span class="text-foxen-400/50 text-sm font-medium uppercase tracking-wider">
                  {{ featuredPost.category }}
                </span>
              </div>
            </NuxtLink>

            <!-- Content -->
            <div class="p-8 flex flex-col justify-center">
              <div class="mb-4">
                <span class="text-foxen-400 text-sm font-medium">
                  {{ featuredPost.category }}
                </span>
              </div>

              <h2 class="text-2xl md:text-3xl font-bold group-hover:text-foxen-400 transition-colors mb-4">
                <NuxtLink :to="`/blog/${featuredPost.stem.replace('blog/', '')}`">
                  {{ featuredPost.title }}
                </NuxtLink>
              </h2>

              <p class="text-gray-400 mb-6">
                {{ featuredPost.description }}
              </p>

              <!-- Tags -->
              <div v-if="featuredPost.tags && featuredPost.tags.length > 0" class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in featuredPost.tags.slice(0, 4)"
                  :key="tag"
                  class="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md"
                >
                  {{ tag }}
                </span>
              </div>

              <p class="text-foxen-200 text-sm">
                {{ formatDate(featuredPost.publishedAt) }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="section-padding pt-0">
      <div class="container-custom">
        <h2 v-if="featuredPost" class="text-xl font-semibold mb-8">Recent Posts</h2>
        <div v-if="regularPosts && regularPosts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard v-for="post in regularPosts" :key="post.stem" :post="post" />
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
import { formatDate } from '~/utils/blog';

useHead({
  title: "Blog | Foxen Digital",
});

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('publishedAt', 'DESC')
    .all()
);

// Separate featured post from regular posts
const featuredPost = computed(() => {
  if (!posts.value) return null;
  return posts.value.find(post => post.featured === true) || null;
});

const regularPosts = computed(() => {
  if (!posts.value) return [];
  if (!featuredPost.value) return posts.value;
  return posts.value.filter(post => post.stem !== featuredPost.value?.stem);
});
</script>
