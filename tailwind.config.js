/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Midnight Slate
        surface: "#0F172A",    // Rich Navy
        surfaceLight: "#1E293B",
        primary: "#38BDF8",    // Sky Cobalt
        secondary: "#2DD4BF",  // Emerald Teal
        accent: "#F8FAFC",     // Ghost White
        textMain: "#F8FAFC",
        textSoft: "#94A3B8",   // Slate Gray
        border: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-neon": "pulse-neon 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer-fast": "shimmer 1.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) scale(1.02) rotate(1deg)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1", filter: "brightness(1) blur(0px)" },
          "50%": { opacity: "0.8", filter: "brightness(1.5) blur(2px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.07), transparent 70%)',
        'mesh-premium': 'radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.08) 0, transparent 40%), radial-gradient(at 100% 100%, rgba(45, 212, 191, 0.08) 0, transparent 40%)',
      },
      boxShadow: {
        'glass-premium': '0 24px 80px rgba(0, 0, 0, 0.6)',
        'neon-cobalt': '0 0 30px rgba(56, 189, 248, 0.2)',
        'neon-teal': '0 0 30px rgba(45, 212, 191, 0.2)',
        'magnetic': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.23, 1, 0.32, 1)',
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
