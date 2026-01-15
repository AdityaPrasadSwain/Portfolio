export const projectData = {
    udrakala: {
        title: "UdraKala: A Direct-to-Consumer Artisan Marketplace",
        subtitle: "Preserving Heritage in a Digital Age",
        description: "A robust, full-stack e-commerce ecosystem designed to preserve Odisha's handloom heritage. It acts as a bridge between skilled rural artisans and a global audience, eliminating middlemen.",
        challenge: "Odisha's rich tradition of handloom and handicrafts—spun by skilled rural artisans—faces an existential threat from mass-produced imitations and limited market access. The primary challenge was to bridge the gap between these remote artisans and a global audience, removing middlemen to ensure fair pricing while maintaining the authenticity and trust that customers demand. The platform needed to handle complex inventory variants (sarees, fabrics) and provide a seamless, culturally immersive shopping experience.",
        solution: `We built a robust, full-stack e-commerce ecosystem designed for scale and trust. UdraKala connects artisans directly with buyers through a dedicated Seller Panel, allowing them to manage their own digital storefronts.

• For Buyers: A premium, high-performance web app with AI-powered assistance, seamless checkout, and transparent tracking.
• For Artisans: A simplified mobile-first dashboard to upload products, manage orders, and track payouts.
• For Ops: A comprehensive Admin Dashboard to verify seller authenticity, manage logistics, and oversee financial settlements.`,
        features: [
            { title: "AI Buying Assistant", desc: "Integrated chatbot that suggests products (sarees, decor) based on user preference and budget, and answers shipping/policy queries in real-time." },
            { title: "Multi-Role Ecosystem", desc: "Distinct portals for Customers, Sellers (Artisans), and Admins with Role-Based Access Control (RBAC)." },
            { title: "Smart Product Discovery", desc: "Advanced search and filtering for thousands of unique SKUs, optimized for handloom categories." },
            { title: "Trust-First Logistics", desc: "'Pack Order' video upload feature for sellers to prove authenticity and quality before shipping." },
            { title: "Automated Payouts", desc: "Financial module for admin to calculate and process seller earnings and delivery agent fees." }
        ],
        techStack: {
            Frontend: ["React.js", "Vite", "Tailwind CSS (Glassmorphism UI)", "Framer Motion (Animations)"],
            Backend: ["Java Spring Boot", "Spring Security (JWT Auth)", "Hibernate/JPA"],
            Database: ["MySQL"],
            AIChat: ["Custom keyword-based Intent Engine, integrated with product database"],
            Tools: ["Maven", "Git", "Postman"]
        }
    }
};
