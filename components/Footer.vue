<template>
    <footer class="bg-gray-900 border-t border-gray-800">
        <div class="container-custom py-12 md:py-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Brand -->
                <div class="md:col-span-1">
                    <NuxtLink
                        to="/"
                        class="flex items-center gap-2 text-xl font-bold mb-4"
                    >
                        <span class="text-foxen-500">Foxen</span>
                        <span class="text-gray-300">Digital</span>
                    </NuxtLink>
                    <p class="text-gray-400 text-sm">
                        Quality web development, open source values. Specialists
                        in Laravel, Vue.js, and Agentic Engineering.
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-semibold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="link in quickLinks" :key="link.href">
                            <NuxtLink
                                :to="link.href"
                                class="text-gray-400 hover:text-white transition-colors"
                            >
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Connect -->
                <div>
                    <h4 class="font-semibold text-white mb-4">Connect</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="link in socialLinks" :key="link.href">
                            <a
                                :href="link.href"
                                target="_blank"
                                rel="noopener"
                                class="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <span v-html="link.icon"></span>
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="font-semibold text-white mb-4">Contact</h4>
                    <p class="text-gray-400 text-sm mb-4">
                        Ready to start a project? Get in touch.
                    </p>
                    <a
                        href="mailto:hello@foxendigital.com"
                        class="text-foxen-400 hover:text-foxen-300 text-sm"
                    >
                        hello@foxendigital.com
                    </a>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 pt-8 border-t border-gray-800 text-center">
                <p class="text-gray-500 text-sm">
                    &copy; {{ new Date().getFullYear() }} Foxen Digital. All
                    rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/open-source", label: "Open Source" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    {
        href: "https://github.com/foxen-digital",
        label: "GitHub",
        icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    },
    {
        href: "https://twitter.com/foxendigital",
        label: "Twitter/X",
        icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    },
    {
        href: "https://linkedin.com/company/foxendigital",
        label: "LinkedIn",
        icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    },
];
</script>
