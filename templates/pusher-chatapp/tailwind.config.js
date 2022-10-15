/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#1E1E2E",
                black2: "#313244",
                blue: "#89b4fa",
            },
        },
    },
    plugins: [],
};
