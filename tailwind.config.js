/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: { 'sans': ['Roboto'] },
        extend: {
            colors: {
                headerblue: "#2b2d42",
                paleblue: "#8d99ae",
                grey: "#edf2f4",

            },
        },
    },
    plugins: [],
}