import { motion } from 'framer-motion'
import { User, CheckCircle2, Cpu, Zap, Code } from 'lucide-react'
import { profile } from '../data/profile'



export default function About() {
    const atsKeywords = [
        "Java Backend", "Spring Boot", "RESTful API", "Microservices",
        "PostgreSQL", "MongoDB", "React.js", "AI Integration",
        "LLM Agents", "RAG Pipeline", "Prompt Engineering",
        "Clean Code", "MVC Architecture", "Git Version Control", "Maven"
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-secondary text-xs uppercase tracking-wider mb-4">
                        <User size={14} />
                        <span>About The Developer</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Solutions</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* Card 1: The Vision (Large) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card md:col-span-2 p-8 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 transition-opacity group-hover:opacity-100 opacity-50" />

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                                <Code size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain">The Vision</h3>
                        </div>

                        <p className="text-textSoft text-lg leading-relaxed text-justify">
                            {profile.objective}
                        </p>
                    </motion.div>

                    {/* Card 2: Stats / Highlight (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-50" />
                        <div className="relative z-10">
                            <div className="text-5xl font-bold text-textMain mb-2">3+</div>
                            <div className="text-textSoft text-sm uppercase tracking-wider">Years Coding</div>
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
                        </div>
                    </motion.div>

                    {/* Card 3: Tech Arsenal (Tall/Medium) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-0 rounded-3xl relative overflow-hidden flex flex-col"
                    >
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10" />

                        <div className="p-8 pb-4 flex items-center gap-3">
                            <Cpu className="text-purple-400" size={24} />
                            <h3 className="text-xl font-bold text-textMain">Tech Arsenal</h3>
                        </div>

                        <div className="flex-1 flex flex-col justify-center gap-6 py-6 overflow-hidden">
                            {/* Row 1: Left Scroll */}
                            <div className="flex overflow-hidden">
                                <motion.div
                                    className="flex gap-6 px-3"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                                >
                                    {[...atsKeywords.slice(0, 5), ...atsKeywords.slice(0, 5)].map((keyword, i) => (
                                        <div key={`r1-${i}`} className="whitespace-nowrap px-4 py-2 bg-black/5 border border-black/10 rounded-xl text-purple-600 text-sm font-medium">
                                            {keyword}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Row 2: Right Scroll */}
                            <div className="flex overflow-hidden">
                                <motion.div
                                    className="flex gap-6 px-3"
                                    animate={{ x: ["-50%", "0%"] }}
                                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                                >
                                    {[...atsKeywords.slice(5, 10), ...atsKeywords.slice(5, 10)].map((keyword, i) => (
                                        <div key={`r2-${i}`} className="whitespace-nowrap px-4 py-2 bg-black/5 border border-black/10 rounded-xl text-blue-600 text-sm font-medium">
                                            {keyword}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Row 3: Left Scroll */}
                            <div className="flex overflow-hidden">
                                <motion.div
                                    className="flex gap-6 px-3"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ ease: "linear", duration: 22, repeat: Infinity }}
                                >
                                    {[...atsKeywords.slice(10, 15), ...atsKeywords.slice(10, 15)].map((keyword, i) => (
                                        <div key={`r3-${i}`} className="whitespace-nowrap px-4 py-2 bg-black/5 border border-black/10 rounded-xl text-emerald-600 text-sm font-medium">
                                            {keyword}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: The Mindset (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card md:col-span-2 p-8 rounded-3xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <Zap className="text-emerald-400" size={24} />
                                <h3 className="text-xl font-bold text-textMain">The Mindset</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profile.skills.soft.map((skill) => (
                                <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-black/5 border border-black/5 hover:border-black/10 transition-colors group">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                                    <span className="text-textMain font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
