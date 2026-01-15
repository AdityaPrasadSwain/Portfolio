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
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                    className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl relative custom-scrollbar"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Hero Image / Header */}
                    <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 via-[#0f172a] to-secondary/20 relative p-8 flex flex-col justify-end">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-md mb-3 inline-block">
                                {project.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                            <p className="text-xl text-textSoft">{project.role}</p>
                        </motion.div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Main Content (Left 2/3) */}
                        <div className="md:col-span-2 space-y-10">

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Target className="text-primary" size={20} />
                                    The Challenge
                                </h3>
                                <p className="text-textSoft leading-relaxed text-lg">
                                    {project.challenge || "To build a scalable and robust solution that addresses complex user needs while maintaining high performance."}
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <CheckCircle className="text-emerald-400" size={20} />
                                    The Solution
                                </h3>
                                <p className="text-textSoft leading-relaxed text-lg">
                                    {project.solution || "Leveraged modern architecture and optimized algorithms to deliver a seamless experience."}
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Layers className="text-secondary" size={20} />
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features?.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                            <span className="mt-1 w-1.5 h-1.5 bg-primary rounded-full" />
                                            <span className="text-sm text-white/90">{feature}</span>
                                        </li>
                                    )) || <p className="text-textSoft">No specific features listed.</p>}
                                </ul>
                            </section>

                        </div>

                        {/* Sidebar (Right 1/3) */}
                        <div className="space-y-8">
                            {/* Tech Stack */}
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Cpu size={16} /> Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1.5 bg-black/40 text-textSoft text-sm rounded-lg border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="space-y-3">
                                {project.links?.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-black font-bold rounded-xl transition-all">
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                )}
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/10 transition-all">
                                        <Github size={18} />
                                        View Code
                                    </a>
                                )}
                            </div>

                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
