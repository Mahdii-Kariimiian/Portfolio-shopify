import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                darkGreen: "#3C5A27",
                lightGreen: "#93BD43",
                darkerGreen: "#141a16"
            },
        },
    },
    plugins: [typography],
};
