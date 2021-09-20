module.exports = {
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            kaushan: ["Kaushan Script"],
        },
        extend: {
            colors: {
                orange: {
                    DEFAULT: "#F38A15",
                },
                red: {
                    DEFAULT: "#D2215D",
                },
                dark: {
                    DEFAULT: "#010101",
                    100: "#0a0b0e",
                    200: "#16181d",
                    300: "#16181d",
                    500: "#0f1115",
                    700: "#202125",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
