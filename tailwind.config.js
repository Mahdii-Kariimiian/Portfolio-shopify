import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'olive-green': '#6B8E23',
                'lime-green': '#9ACD32',
                'custom-white': '#FFFFFF',
                'custom-black': '#000000',
                'dark-bg': '#0a0a0a',
                'darker-bg': '#050505',
                'light-bg': '#f8f9fa',
                'lighter-bg': '#ffffff',
                'dark-surface': '#111111',
                'dark-surface-hover': '#1a1a1a',
                'dark-border': '#1f1f1f',
                'dark-border-hover': '#2a2a2a',
                'dark-text-primary': '#ffffff',
                'dark-text-secondary': '#a1a1aa',
                'dark-text-tertiary': '#71717a',
            },
        },
    },
    plugins: [typography],
};
