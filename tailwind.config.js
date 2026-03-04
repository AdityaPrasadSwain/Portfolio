/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Deeper black
        surface: "#0A0A0B",    // Rich Charcoal
        surfaceLight: "#121214",
        primary: "#00E5FF",    // Electric Cyan
        secondary: "#7000FF",  // Deep Violet
        accent: "#FFFFFF",     // Pure White
        textMain: "#FFFFFF",
        textSoft: "#86868B",   // Apple-style gray
        border: "rgba(255, 255, 255, 0.04)",
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
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(circle at top, rgba(0, 229, 255, 0.05), transparent 70%)',
        'mesh-premium': 'radial-gradient(at 0% 0%, rgba(0, 229, 255, 0.08) 0, transparent 40%), radial-gradient(at 100% 100%, rgba(112, 0, 255, 0.08) 0, transparent 40%)',
      },
      boxShadow: {
        'glass-premium': '0 24px 80px rgba(0, 0, 0, 0.6)',
        'neon-cyan': '0 0 30px rgba(0, 229, 255, 0.15)',
        'neon-violet': '0 0 30px rgba(112, 0, 255, 0.15)',
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
