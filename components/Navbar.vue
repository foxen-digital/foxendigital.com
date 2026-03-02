<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold">
          <span class="text-foxen-500">Foxen</span>
          <span class="text-gray-300">Digital</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            :class="{ 'text-white': route.path === link.href }"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink to="/contact" class="btn-primary text-sm">
            Get in Touch
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-gray-400 hover:text-white"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-800"
      >
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-gray-400 hover:text-white transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-primary text-center mt-2"
            @click="mobileMenuOpen = false"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const mobileMenuOpen = ref(false);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];
</script>
