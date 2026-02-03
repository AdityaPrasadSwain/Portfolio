import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Layers, Cpu, Target, CheckCircle } from 'lucide-react'

export default function ProjectDetails({ project, onClose }) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [project])

    if (!project) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/40 backdrop-blur-lg"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                    className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white border-2 border-slate-200 rounded-3xl shadow-2xl shadow-slate-400/30 relative custom-scrollbar"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-2.5 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-500 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-110"
                    >
                        <X size={24} />
                    </button>

                    {/* Hero Image / Header */}
                    <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 via-blue-50 to-secondary/20 relative p-8 pt-12 md:pt-16 flex flex-col justify-end border-b-2 border-slate-200">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10"
                        >
                            <span className="px-4 py-2 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-3 inline-block shadow-lg">
                                {project.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-2 font-display leading-tight">{project.title}</h2>
                            <p className="text-xl text-textMain font-medium">{project.role}</p>
                        </motion.div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">

                        {/* Main Content (Left 2/3) */}
                        <div className="md:col-span-2 space-y-8">

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200/60"
                            >
                                <h3 className="text-2xl font-bold text-textMain mb-4 flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                                        <Target className="text-primary" size={22} />
                                    </div>
                                    The Challenge
                                </h3>
                                <p className="text-textSoft leading-relaxed text-lg">
                                    {project.challenge || "To build a scalable and robust solution that addresses complex user needs while maintaining high performance."}
                                </p>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200/60"
                            >
                                <h3 className="text-2xl font-bold text-textMain mb-4 flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-lg">
                                        <CheckCircle className="text-emerald-600" size={22} />
                                    </div>
                                    The Solution
                                </h3>
                                <p className="text-textSoft leading-relaxed text-lg">
                                    {project.solution || "Leveraged modern architecture and optimized algorithms to deliver a seamless experience."}
                                </p>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg">
                                        <Layers className="text-secondary" size={22} />
                                    </div>
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features?.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + (i * 0.05) }}
                                            className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all group"
                                        >
                                            <CheckCircle className="mt-0.5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                                            <span className="text-sm text-textMain font-medium">{feature}</span>
                                        </motion.li>
                                    )) || <p className="text-textSoft">No specific features listed.</p>}
                                </ul>
                            </motion.section>

                        </div>

                        {/* Sidebar (Right 1/3) */}
                        <div className="space-y-6">
                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200/60"
                            >
                                <h3 className="text-sm font-bold text-textMain uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Cpu size={18} className="text-primary" /> Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Links */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="space-y-3"
                            >
                                {project.links?.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group">
                                        <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                                        Live Demo
                                    </a>
                                )}
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-100 hover:bg-slate-200 text-textMain font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all hover:scale-105 group">
                                        <Github size={18} className="group-hover:rotate-12 transition-transform" />
                                        View Code
                                    </a>
                                )}
                            </motion.div>

                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
