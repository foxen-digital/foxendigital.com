<template>
  <div class="pt-16">
    <article v-if="post" class="section-padding">
      <div class="container-custom">
        <div class="flex gap-12">
          <!-- Main Content -->
          <div class="flex-1 max-w-3xl">
            <!-- Header -->
            <header class="mb-12">
              <div class="mb-4">
                <span class="text-foxen-400 text-sm font-medium">
                  {{ post.category }}
                </span>
              </div>
              <h1 class="heading-1 mt-2">{{ post.title }}</h1>
              <p class="text-gray-400 mt-4 text-lg">{{ post.description }}</p>

              <!-- Tags & Date -->
              <div class="flex flex-wrap items-center gap-4 mt-6">
                <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md border border-gray-700"
                  >
                    {{ tag }}
                  </span>
                </div>
                <time class="text-foxen-200 text-sm">
                  {{ formatDate(post.publishedAt) }}
                </time>
              </div>
            </header>

            <!-- Featured Image -->
            <div v-if="post.image" class="mb-12 aspect-video rounded-xl overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
            </div>

            <!-- Content -->
            <ContentRenderer
              :value="post"
              class="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:scroll-mt-24
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-foxen-400 hover:prose-a:text-foxen-300 prose-a:no-underline hover:prose-a:underline
                prose-code:text-foxen-300 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
                prose-blockquote:border-foxen-500 prose-blockquote:bg-gray-800/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-ul:text-gray-300 prose-ol:text-gray-300
                prose-li:marker:text-gray-500
                prose-img:rounded-xl"
            />

            <!-- Share Section -->
            <div class="mt-12 pt-8 border-t border-gray-700">
              <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Share This Article
              </h3>
              <div class="flex gap-3">
                <a
                  :href="twitterShareUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Share on X
                </a>
                <a
                  :href="linkedinShareUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Share on LinkedIn
                </a>
              </div>
            </div>

            <!-- Footer -->
            <footer class="mt-8 pt-8 border-t border-gray-700">
              <NuxtLink to="/blog" class="text-foxen-400 hover:text-foxen-300 transition-colors">
                ← Back to Blog
              </NuxtLink>
            </footer>
          </div>

          <!-- Table of Contents Sidebar -->
          <aside class="hidden lg:block w-64 flex-shrink-0">
            <TableOfContents :headings="headings" />
          </aside>
        </div>

        <!-- Related Posts -->
        <section v-if="relatedPosts.length > 0" class="mt-20">
          <h2 class="heading-2 mb-8">Related Posts</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard v-for="relatedPost in relatedPosts" :key="relatedPost.stem" :post="relatedPost" />
          </div>
        </section>
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
import { formatDate } from '~/utils/blog';

const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .where('stem', '=', `blog/${slug}`)
    .first()
);

const { data: allPosts } = await useAsyncData('blog-posts-for-related', () =>
  queryCollection('blog')
    .order('publishedAt', 'DESC')
    .all()
);

// Extract headings from post body TOC for TableOfContents component
const headings = computed(() => {
  if (!post.value?.body || typeof post.value.body !== 'object') return [];

  const body = post.value.body as { toc?: { links?: Array<{ id: string; text: string; depth: number }> } };
  if (!body.toc?.links) return [];

  // Filter to only h2 and h3 (depth 2 and 3)
  return body.toc.links
    .filter(link => link.depth === 2 || link.depth === 3)
    .map(link => ({
      id: link.id,
      text: link.text,
      depth: link.depth,
    }));
});

// Related posts (same category, excluding current post)
const relatedPosts = computed(() => {
  if (!allPosts.value || !post.value) return [];
  return allPosts.value
    .filter(p => p.stem !== post.value?.stem && p.category === post.value?.category)
    .slice(0, 3);
});

// Share URLs
const pageUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return `https://foxen.digital/blog/${slug}`;
});

const twitterShareUrl = computed(() => {
  const text = encodeURIComponent(post.value?.title || '');
  const url = encodeURIComponent(pageUrl.value);
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
});

const linkedinShareUrl = computed(() => {
  const url = encodeURIComponent(pageUrl.value);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
});

useHead({
  title: post.value ? `${post.value.title} | Foxen Digital` : 'Post Not Found | Foxen Digital',
  meta: post.value ? [
    { name: 'description', content: post.value.description },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: pageUrl.value },
  ] : [],
});
</script>
