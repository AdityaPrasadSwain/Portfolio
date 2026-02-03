/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc", // Slate-50 (White/Light Grey)
        surface: "#ffffff",    // Pure White
        primary: "#0284c7",    // Sky-600 (Darker Cyan for light mode)
        secondary: "#6366f1",  // Indigo-500
        accent: "#ec4899",     // Pink-500
        textMain: "#0f172a",   // Slate-900 (Dark text)
        textSoft: "#475569",   // Slate-600 (Medium grey text)
        glass: "rgba(255, 255, 255, 0.7)", // Frosted white glass
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #0284c7, 0 0 20px #0284c7' },
          'to': { boxShadow: '0 0 20px #6366f1, 0 0 30px #6366f1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #f1f5f9 0deg, #f8fafc 180deg, #f1f5f9 360deg)',
      }
    },
  },
  plugins: [],
}
