<template>
  <nav v-if="headings.length > 0" class="hidden lg:block sticky top-24">
    <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
      On This Page
    </h4>
    <ul class="space-y-2 border-l border-gray-700">
      <li v-for="heading in headings" :key="heading.id">
        <a
          :href="`#${heading.id}`"
          :class="[
            'block text-sm transition-colors duration-200 pl-4 -ml-px border-l',
            activeId === heading.id
              ? 'text-foxen-400 border-foxen-400'
              : 'text-gray-500 hover:text-gray-300 border-transparent hover:border-gray-600'
          ]"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Heading {
  id: string;
  text: string;
  depth: number;
}

const props = defineProps<{
  headings: Heading[];
}>();

const activeId = ref('');

// Track which heading is currently in view
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
        }
      });
    },
    {
      rootMargin: '-80px 0px -80% 0px',
    }
  );

  // Observe all headings
  props.headings.forEach((heading) => {
    const el = document.getElementById(heading.id);
    if (el) observer.observe(el);
  });

  // Cleanup on unmount
  onUnmounted(() => observer.disconnect());
});
</script>
