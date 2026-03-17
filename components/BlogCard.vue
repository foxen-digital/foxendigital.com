<template>
  <article
    class="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden group hover:border-gray-600 transition-colors duration-300"
  >
    <NuxtLink :to="`/blog/${post.stem.replace('blog/', '')}`">
      <!-- Featured Image or Gradient Fallback -->
      <div
        v-if="post.image"
        class="aspect-video bg-gray-700/50 overflow-hidden"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        v-else
        class="aspect-video bg-gradient-to-br from-foxen-900/50 to-gray-700/50 flex items-center justify-center"
      >
        <span class="text-foxen-400/50 text-sm font-medium uppercase tracking-wider">
          {{ post.category }}
        </span>
      </div>
    </NuxtLink>

    <div class="p-6">
      <!-- Category -->
      <div class="mb-3">
        <span class="text-foxen-400 text-sm font-medium">
          {{ post.category }}
        </span>
      </div>

      <!-- Title -->
      <h2 class="font-semibold text-lg group-hover:text-foxen-400 transition-colors mb-2">
        <NuxtLink :to="`/blog/${post.stem.replace('blog/', '')}`">
          {{ post.title }}
        </NuxtLink>
      </h2>

      <!-- Description -->
      <p class="text-gray-400 text-sm line-clamp-2 mb-4">
        {{ post.description }}
      </p>

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in displayTags"
          :key="tag"
          class="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md"
        >
          {{ tag }}
        </span>
        <span v-if="post.tags.length > 3" class="px-2 py-1 text-gray-500 text-xs">
          +{{ post.tags.length - 3 }}
        </span>
      </div>

      <!-- Date -->
      <p class="text-foxen-200 text-xs">
        {{ formattedDate }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatDate } from '~/utils/blog';

interface BlogPost {
  stem: string;
  title: string;
  description: string;
  category: string;
  publishedAt?: string;
  image?: string;
  tags?: string[];
}

const props = defineProps<{
  post: BlogPost;
}>();

const formattedDate = computed(() => formatDate(props.post.publishedAt));

const displayTags = computed(() => {
  if (!props.post.tags) return [];
  return props.post.tags.slice(0, 3);
});
</script>
