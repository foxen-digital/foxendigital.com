// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: "Foxen Digital | Quality Web Development",
      meta: [
        {
          name: "description",
          content:
            "We build bespoke web applications and open source tools for businesses that value quality, transparency, and results.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          property: "og:title",
          content: "Foxen Digital | Quality Web Development",
        },
        {
          property: "og:description",
          content:
            "We build bespoke web applications and open source tools for businesses that value quality, transparency, and results.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.foxendigital.com" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

  site: {
    url: "https://www.foxendigital.com",
  },
});
