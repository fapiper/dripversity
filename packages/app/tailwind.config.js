const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Dripversity", ...defaultTheme.fontFamily.serif],
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: {
                    DEFAULT: "#0B41A3",
                    50: "#70A0F5",
                    100: "#5D93F4",
                    200: "#3779F1",
                    300: "#1160EF",
                    400: "#0E50C9",
                    500: "#0B41A3",
                    600: "#072C6E",
                    700: "#04173A",
                    800: "#000205",
                    900: "#000000",
                },
            },
        },
    },
    plugins: [],
};
