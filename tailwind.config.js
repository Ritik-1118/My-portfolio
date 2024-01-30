/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                // circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 100px);',
                // 'circularLight': 'repeating-radial-gradient(rgb(38, 83, 217) 2px,#162570 90px);',
                'circularLight': 'repeating-radial-gradient(rgba(38, 83, 217, 0.4) 2px, rgba(22, 37, 112, 0) 90px);',

            },
            textShadow: {
                neon: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1)',
            },
        },
    },
    plugins: [],
}
