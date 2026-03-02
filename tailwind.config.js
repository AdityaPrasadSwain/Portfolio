/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Very dark navy/black
        surface: "#0f172a",    // Slate-900
        background: "#000000",
        surface: "#0a0a0a",
        primary: "#60a5fa", // Bright blue
        secondary: "#818cf8", // Indigo
        accent: "#f472b6", // Pink
        textMain: "#ffffff",
        textSoft: "#a3a3a3",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "reveal": "reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "glow": "glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15), transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
