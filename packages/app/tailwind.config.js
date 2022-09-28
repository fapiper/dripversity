const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                logo: ["Dripversity", ...defaultTheme.fontFamily.serif],
                sans: ["Aktiv Grotesk", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                discord: "#5865F2",
                blue: {
                    DEFAULT: "#1D21A9",
                    50: "#70A0F5",
                    100: "#5D93F4",
                    200: "#3779F1",
                    300: "#1160EF",
                    400: "#0E50C9",
                    500: "#1D21A9",
                    600: "#072C6E",
                    700: "#04173A",
                    800: "#010119",
                    900: "#000712",
                },
                orange: {
                    DEFAULT: "#FE6D2A",
                    50: "#FFEAE1",
                    100: "#FFDCCC",
                    200: "#FFC1A4",
                    300: "#FEA57B",
                    400: "#FE8953",
                    500: "#FE6D2A",
                    600: "#EF4C01",
                    700: "#B73A01",
                    800: "#7F2901",
                    900: "#471700",
                },
                stone: {
                    DEFAULT: "#4D4A43",
                    50: "#AAA69D",
                    100: "#A19C93",
                    200: "#8E897D",
                    300: "#797469",
                    400: "#635F56",
                    500: "#4D4A43",
                    600: "#292824",
                    700: "#11100F",
                    800: "#000000",
                    900: "#000000",
                },
            },
        },
    },
    plugins: [],
};
