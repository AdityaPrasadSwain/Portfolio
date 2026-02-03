import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Brain, Cpu, Sparkles, Search } from 'lucide-react'

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

function SkillCard({ skill, getIconUrl, CustomIcon }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group relative rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
            <div className="relative h-full p-6 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    {skill.icon.startsWith("custom-") ? (
                        <CustomIcon type={skill.icon} />
                    ) : (
                        <img
                            src={getIconUrl(skill.icon)}
                            alt={skill.name}
                            className="w-full h-full object-contain filter drop-shadow-sm"
                            loading="lazy"
                        />
                    )}
                </div>
                <span className="text-gray-600 font-medium text-sm text-center group-hover:text-primary transition-colors">
                    {skill.name}
                </span>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const getIconUrl = (icon) => {
        if (icon.startsWith("custom-")) return null;
        return `https://skillicons.dev/icons?i=${icon}&theme=light`;
    }

    const CustomIcon = ({ type }) => {
        if (type === "custom-genai") return <Sparkles className="text-purple-500" size={32} />;
        if (type === "custom-rag") return <Database className="text-emerald-500" size={32} />;
        if (type === "custom-llm") return <Brain className="text-pink-500" size={32} />;
        if (type === "custom-prompt") return <Cpu className="text-amber-500" size={32} />;
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
        <section id="skills" className="py-32 relative overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] -z-10 opacity-60" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-100 rounded-full blur-[80px] -z-10 opacity-60" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-bold">Technical Arsenal</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-gray-900 mb-8">
                        Explore My <span className="text-gradient">Skills</span>
                    </h2>

                    {/* Search Bar */}
                    <div className="relative max-w-lg mx-auto mb-10 group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search technologies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                        />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-white text-gray-500 hover:text-primary hover:bg-gray-50 border border-gray-200"
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
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                getIconUrl={getIconUrl}
                                CustomIcon={CustomIcon}
                            />
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
                        <div className="inline-flex p-4 rounded-full bg-white mb-4 shadow-sm animate-bounce">
                            <Search className="h-8 w-8 text-gray-300" />
                        </div>
                        <p className="text-gray-500 font-medium">No skills found matching "{searchQuery}"</p>
                    </motion.div>
                )}

            </div>
        </section>
    )
}
