import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, X, Layers, Globe, Zap, Shield, Database, Braces } from 'lucide-react';
import profile from '../data/profile';

const projectImages = {
    "Udrakala Ecommerce": "/images/ecommerce_mockup_1772640432079.png",
    "AI-Driven Learning Platform": "/images/ai_learning_mockup_v2_1772640537360.png",
    "Expense Management System": "/images/performance_metrics_visual_v2_1772640559011.png",
    "Event Management System": "/images/system_architect_visual_1772640355787.png"
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6 uppercase italic">
                                Featured<br /><span className="text-gradient-neon text-glow-cobalt">Portfolio</span><span className="text-primary">.</span>
                            </h2>
                            <p className="text-lg text-textSoft font-light max-w-xl border-l-2 border-primary/20 pl-8 py-2">
                                A curated selection of high-performance systems and elite digital solutions.
                            </p>
                        </motion.div>
                    </div>

                    {/* Section Controls */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.5em] mb-4">Gallery Controls</h4>
                            <div className="flex items-center gap-6">
                                <div className="h-2 w-48 bg-white/[0.03] rounded-full overflow-hidden border border-white/5 relative">
                                    <motion.div
                                        className="absolute inset-y-0 left-0 bg-primary shadow-neon-cobalt"
                                        style={{ width: '30%' }} // This should ideally be dynamic, but for now fixed as a placeholder
                                    />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest">Scroll to explore</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="w-14 h-14 rounded-2xl glass-main border border-white/5 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all group/nav">
                                <ArrowRight className="rotate-180 group-hover/nav:-translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="w-14 h-14 rounded-2xl glass-main border border-white/5 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all group/nav">
                                <ArrowRight className="group-hover/nav:translate-x-1 transition-transform" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Scroll Gallery */}
                    <div className="relative group/gallery">
                        <div className="overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory scroll-smooth flex gap-8 lg:gap-12 px-2">
                            {profile.projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[32vw] snap-center aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5 cursor-none hover:border-primary/20 transition-all duration-700 relative group/card"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Glass Overlay & Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                                    {/* Background Image / Pattern */}
                                    <div className="absolute inset-0 opacity-20 group-hover/card:opacity-30 transition-opacity duration-700">
                                        <img src={projectImages[project.title]} alt="" className="w-full h-full object-cover" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.3em] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                                                0{index + 1}
                                            </span>
                                            <div className="hidden group-hover/card:flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                <span className="text-[10px] font-mono font-black text-white/50 uppercase tracking-widest leading-none">View System</span>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.4em] mb-3">{project.category}</p>
                                            <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter italic uppercase leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-700">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-3 opacity-0 group-hover/card:opacity-100 transition-all duration-700 translate-y-4 group-hover/card:translate-y-0">
                                                {project.tech.slice(0, 3).map(tech => (
                                                    <span key={tech} className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-wider">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Cursor Reveal */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover/card:opacity-100 transition-all duration-500 scale-50 group-hover/card:scale-100 pointer-events-none">
                                        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-black font-black uppercase text-[10px] tracking-widest shadow-neon-cobalt rotate-6">
                                            Open<br />Case
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Blur Edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
                    </div>
                </div>
            </div>

            {/* Case Study Modal v2 */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/98 backdrop-blur-3xl"
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 100 }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="bg-background rounded-[4rem] w-full max-w-7xl relative z-10 border border-white/5 shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-xl glass-main flex items-center justify-center text-white/50 hover:text-primary hover:bg-primary/10 z-50 transition-all border border-white/5"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Visualization */}
                            <div className="lg:w-[45%] bg-surface relative overflow-hidden hidden lg:block">
                                <img
                                    src={projectImages[selectedProject.title]}
                                    alt={selectedProject.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border-2 border-white/5 rounded-full flex items-center justify-center">
                                    <div className="w-[70%] aspect-square border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                                        <div className="w-4 h-4 rounded-full bg-primary shadow-neon-cobalt" />
                                    </div>
                                </div>
                                <div className="absolute bottom-16 left-16 right-16 z-20">
                                    <h4 className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.5em] mb-6">System Visualization</h4>
                                    <div className="p-1 glass-card-premium rounded-[2rem] border border-white/10">
                                        <img src="/images/system-architecture.png" alt="Architecture" className="w-full rounded-[1.8rem] opacity-80" />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 p-10 md:p-20 overflow-y-auto custom-scrollbar">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border border-secondary/20">{selectedProject.category}</span>
                                        <span className="w-12 h-[1px] bg-white/10" />
                                        <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Case Study 2024</span>
                                    </div>

                                    <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-none italic uppercase mb-12">
                                        {selectedProject.title}
                                    </h2>

                                    <div className="space-y-16 mb-20">
                                        <div>
                                            <h4 className="text-primary font-mono font-black uppercase tracking-[0.4em] text-[10px] mb-6">The High-Level Concept</h4>
                                            <p className="text-textSoft text-xl font-light leading-relaxed italic">
                                                "{selectedProject.description}"
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-12">
                                            <div>
                                                <h4 className="text-white font-mono font-bold uppercase tracking-widest text-[9px] mb-4 opacity-30">Role</h4>
                                                <p className="text-white font-display font-black text-xl italic uppercase">{selectedProject.role}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-mono font-bold uppercase tracking-widest text-[9px] mb-4 opacity-30">Stack</h4>
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {selectedProject.tech.slice(0, 3).map(tech => (
                                                        <span key={tech} className="text-[10px] font-mono font-bold text-white/60 uppercase">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                                            <h4 className="text-white font-mono font-black uppercase tracking-[0.4em] text-[10px] mb-6">Critical Challenges</h4>
                                            <p className="text-textSoft text-lg font-light leading-relaxed">
                                                {selectedProject.challenge}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="flex-1 h-14 flex items-center justify-center bg-primary text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-[1.03] active:scale-[0.98] transition-all shadow-neon-cobalt">
                                            Architecture <Github className="ml-3" size={16} />
                                        </a>
                                        <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="flex-1 h-14 flex items-center justify-center glass-main border border-white/5 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white/[0.03] transition-all">
                                            Experience <ExternalLink className="ml-3 opacity-40" size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
