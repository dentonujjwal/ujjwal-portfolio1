/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Dark Blue
                secondary: "#1e293b", // Slate
                accent: "#3b82f6", // Electric Blue
                purple: "#8b5cf6", // Purple
                cyan: "#06b6d4", // Cyan
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'spin-slow-reverse': 'spin 3s linear infinite reverse',
            },
        },
    },
    plugins: [],
}
