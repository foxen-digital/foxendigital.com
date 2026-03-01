import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                foxen: {
                    "50": "#eef2ff",
                    "100": "#e0e7ff",
                    "200": "#c6d2ff",
                    "300": "#a3b3ff",
                    "400": "#7c86ff",
                    "500": "#615fff",
                    "600": "#4f39f6",
                    "700": "#432dd7",
                    "800": "#372aac",
                    "900": "#312c85",
                    "950": "#1e1a4d",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;
