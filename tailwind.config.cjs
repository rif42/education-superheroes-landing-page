/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif", defaultTheme.fontFamily.roboto],
        },
        extend: {
            backgroundImage: {
                home0: "url('/src/assets/bg-home-0.jpg')",
                home1: "url('/src/assets/bg-home-1.jpg')",
                home2: "url('/src/assets/bg-home-2.jpg')",
                team0: "url('/src/assets/bg-team-0.jpg')",
                training0: "url('/src/assets/bg-training-0.jpg')",
                training1: "url('/src/assets/bg-training-1.jpg')",


            },
        },
    },
    plugins: [],
};
