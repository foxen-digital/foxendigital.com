<template>
  <article
    class="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden transition-colors duration-300"
    :class="{
      'hover:border-gray-600': isPostPublished,
      'opacity-75': !isPostPublished,
    }"
  >
    <!-- Image area -->
    <NuxtLink v-if="isPostPublished" :to="postUrl" class="block">
      <div
        v-if="post.image"
        class="aspect-video bg-gray-700/50 overflow-hidden group"
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
        <span
          class="text-foxen-400/50 text-sm font-medium uppercase tracking-wider"
        >
          {{ post.category }}
        </span>
      </div>
    </NuxtLink>
    <div v-else class="block">
      <div
        v-if="post.image"
        class="aspect-video bg-gray-700/50 overflow-hidden"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        v-else
        class="aspect-video bg-gradient-to-br from-foxen-900/50 to-gray-700/50 flex items-center justify-center"
      >
        <span
          class="text-foxen-400/50 text-sm font-medium uppercase tracking-wider"
        >
          {{ post.category }}
        </span>
      </div>
    </div>

    <div class="p-6">
      <!-- Category -->
      <div class="mb-3">
        <span class="text-foxen-400 text-sm font-medium">
          {{ post.category }}
        </span>
      </div>

      <!-- Title -->
      <h2
        class="font-semibold text-lg mb-2"
        :class="{ 'hover:text-foxen-400': isPostPublished }"
      >
        <NuxtLink v-if="isPostPublished" :to="postUrl">
          {{ post.title }}
        </NuxtLink>
        <span v-else>{{ post.title }}</span>
      </h2>

      <!-- Description -->
      <p class="text-gray-400 text-sm line-clamp-2 mb-4">
        {{ post.description }}
      </p>

      <!-- Tags -->
      <div
        v-if="post.tags && post.tags.length > 0"
        class="flex flex-wrap gap-2 mb-4"
      >
        <span
          v-for="tag in displayTags"
          :key="tag"
          class="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md"
        >
          {{ tag }}
        </span>
        <span
          v-if="post.tags.length > 3"
          class="px-2 py-1 text-gray-500 text-xs"
        >
          +{{ post.tags.length - 3 }}
        </span>
      </div>

      <!-- Date -->
      <p
        class="text-xs text-foxen-200"
        :class="isPostPublished ? '' : 'italic'"
      >
        {{ formattedDate }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatDate, isPublished } from "~/utils/blog";

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

const postUrl = computed(() => `/blog/${props.post.stem.replace("blog/", "")}`);

const isPostPublished = computed(() => isPublished(props.post.publishedAt));

const formattedDate = computed(() => formatDate(props.post.publishedAt));

const displayTags = computed(() => {
  if (!props.post.tags) return [];
  return props.post.tags.slice(0, 3);
});
</script>
