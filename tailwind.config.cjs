/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif", defaultTheme.fontFamily.roboto],
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                home0: "url('/assets/bg-home-0.jpg')",
                home1: "url('/assets/bg-home-1.jpg')",
                home2: "url('/assets/bg-home-2.jpg')",
                team0: "url('/assets/bg-team-0.jpg')",
                training0: "url('/assets/bg-training-0.jpg')",
                training1: "url('/assets/bg-training-1.jpg')",


            },
        },
    },
    plugins: [],
};
