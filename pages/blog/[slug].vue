<template>
  <div class="pt-16">
    <article v-if="post" class="section-padding">
      <div class="container-custom max-w-3xl">
        <!-- Header -->
        <header class="mb-12">
          <span class="text-foxen-400 text-sm font-medium">
            {{ post.category }}
          </span>
          <h1 class="heading-1 mt-2">{{ post.title }}</h1>
          <p class="text-gray-400 mt-4 text-lg">{{ post.description }}</p>
          <time class="text-foxen-200 text-sm mt-4 block">
            {{ formatDate(post.publishedAt) }}
          </time>
        </header>

        <!-- Featured Image -->
        <div v-if="post.image" class="mb-12 aspect-video rounded-xl overflow-hidden">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
        </div>

        <!-- Content -->
        <ContentRenderer :value="post" class="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-foxen-400 hover:prose-a:text-foxen-300 prose-code:text-foxen-300" />

        <!-- Footer -->
        <footer class="mt-16 pt-8 border-t border-gray-700">
          <NuxtLink to="/blog" class="text-foxen-400 hover:text-foxen-300 transition-colors">
            ← Back to Blog
          </NuxtLink>
        </footer>
      </div>
    </article>

    <!-- Not Found -->
    <div v-else class="section-padding">
      <div class="container-custom max-w-3xl text-center">
        <h1 class="heading-1 mb-4">Post Not Found</h1>
        <p class="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <NuxtLink to="/blog" class="btn-primary">
          Back to Blog
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .where('stem', '=', `blog/${slug}`)
    .first()
);

useHead({
  title: post.value ? `${post.value.title} | Foxen Digital` : 'Post Not Found | Foxen Digital',
  meta: post.value ? [
    { name: 'description', content: post.value.description },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:type', content: 'article' },
  ] : [],
});

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
</script>
