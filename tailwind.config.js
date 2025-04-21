/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hidden': {
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollbarWidth: 'none',
                    '-ms-overflow-style': 'none',
                },
            });
        },
    ],
};
