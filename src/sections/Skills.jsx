import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Brain, Cpu, Wrench, Search, Sparkles } from 'lucide-react'

const ALL_SKILLS = [
    // Languages
    { name: "Java", category: "Languages", icon: "java" },
    { name: "JavaScript", category: "Languages", icon: "js" },
    { name: "HTML5", category: "Languages", icon: "html" },
    { name: "CSS3", category: "Languages", icon: "css" },

    // Frameworks & Libraries
    { name: "Spring Boot", category: "Frameworks", icon: "spring" },
    { name: "React", category: "Frameworks", icon: "react" },
    { name: "Tailwind CSS", category: "Frameworks", icon: "tailwind" },


    // Databases
    { name: "PostgreSQL", category: "Databases", icon: "postgres" },
    { name: "MongoDB", category: "Databases", icon: "mongodb" },
    { name: "MySQL", category: "Databases", icon: "mysql" },

    // Tools & DevOps
    { name: "Maven", category: "Tools", icon: "maven" },
    { name: "Vercel", category: "Tools", icon: "custom-vercel" },
    { name: "Docker", category: "Tools", icon: "docker" },
    { name: "Git", category: "Tools", icon: "git" },
    { name: "GitHub", category: "Tools", icon: "github" },
    { name: "Postman", category: "Tools", icon: "postman" },
    { name: "Linux", category: "Tools", icon: "linux" },
    { name: "VS Code", category: "Tools", icon: "vscode" },

    // AI & Advanced
    { name: "Gen AI", category: "AI", icon: "custom-genai" },
    { name: "OpenAI API", category: "AI", icon: "custom-openai" },
    { name: "RAG Systems", category: "AI", icon: "custom-rag" },
    { name: "LLM Agents", category: "AI", icon: "custom-llm" },
    { name: "n8n", category: "AI", icon: "custom-n8n" },
    { name: "Prompt Eng.", category: "AI", icon: "custom-prompt" },
]

const CATEGORIES = ["All", ...new Set(ALL_SKILLS.map(s => s.category))]

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const getIconUrl = (icon) => {
        if (icon.startsWith("custom-")) return null;
        return `https://skillicons.dev/icons?i=${icon}&theme=dark`;
    }

    const CustomIcon = ({ type }) => {
        if (type === "custom-genai") return <Sparkles className="text-purple-400" size={32} />;
        if (type === "custom-rag") return <Database className="text-emerald-400" size={32} />;
        if (type === "custom-llm") return <Brain className="text-pink-400" size={32} />;
        if (type === "custom-prompt") return <Cpu className="text-amber-400" size={32} />;
        if (type === "custom-openai") return <img src="https://cdn.worldvectorlogo.com/logos/openai-2.svg" alt="OpenAI" className="w-8 h-8" />;
        if (type === "custom-n8n") return <img src="https://vectorseek.com/wp-content/uploads/2025/07/N8n-Ai-Logo-PNG-SVG-Vector.png" alt="n8n" className="w-8 h-8 rounded-full" />;
        if (type === "custom-vercel") return <img src="https://cdn.worldvectorlogo.com/logos/vercel.svg" alt="Vercel" className="w-8 h-8" />;
        return <Code size={32} />;
    }

    const filteredSkills = ALL_SKILLS.filter(skill => {
        const matchesCategory = activeCategory === "All" || skill.category === activeCategory
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-secondary text-sm tracking-widest uppercase font-semibold">Technical Arsenal</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-textMain mb-6">Explore My Skills</h2>

                    {/* Search Bar */}
                    <div className="relative max-w-lg mx-auto mb-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-textSoft" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-black/5 border border-black/10 rounded-2xl text-textMain placeholder-textSoft focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-black/5 text-textSoft hover:bg-black/10 hover:text-textMain border border-black/5"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/30 hover:bg-black/5 transition-colors group cursor-default"
                            >
                                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon.startsWith("custom-") ? (
                                        <CustomIcon type={skill.icon} />
                                    ) : (
                                        <img
                                            src={getIconUrl(skill.icon)}
                                            alt={skill.name}
                                            className="w-full h-full object-contain filter drop-shadow-lg"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <span className="text-textSoft font-medium text-sm text-center group-hover:text-textMain transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredSkills.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-flex p-4 rounded-full bg-black/5 mb-4">
                            <Search className="h-8 w-8 text-textSoft" />
                        </div>
                        <p className="text-textSoft">No skills found matching "{searchQuery}"</p>
                    </motion.div>
                )}

            </div>
        </section>
    )
}
