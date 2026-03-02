import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, X } from 'lucide-react';
import profile from '../data/profile';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 relative bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-24 text-center md:text-left"
                    >
                        <h2 className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter mb-8 leading-none">
                            WORKS<span className="text-primary italic">.</span>
                        </h2>
                        <div className="h-1 w-32 bg-primary mb-12" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {profile.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden glass-card-premium border border-white/5 mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Placeholder for project image/background */}
                                    <div className="absolute inset-0 bg-white/5 z-0 group-hover:scale-110 transition-transform duration-1000 flex items-center justify-center">
                                        <div className="text-primary opacity-20 select-none font-black text-8xl uppercase tracking-tighter">
                                            {project.title.charAt(0)}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 z-20">
                                        <div className="flex gap-3 mb-4">
                                            {project.technologies.slice(0, 3).map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="absolute top-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="glass-card-premium w-full max-w-6xl rounded-[4rem] overflow-hidden relative z-10 border border-white/20 shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-10 right-10 w-12 h-12 rounded-full glass-main flex items-center justify-center text-white hover:bg-white/10 z-30 transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="aspect-square bg-white/5 relative flex items-center justify-center">
                                    <h2 className="text-primary font-black text-9xl p-20 opacity-20 uppercase select-none tracking-tighter text-center">
                                        {selectedProject.title}
                                    </h2>
                                </div>
                                <div className="p-12 md:p-20 flex flex-col justify-center">
                                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8">Selected Project</span>
                                    <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-8 leading-none">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-textSoft text-xl md:text-2xl font-light leading-relaxed mb-12">
                                        {selectedProject.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-12">
                                        {selectedProject.technologies.map(tech => (
                                            <span key={tech} className="px-6 py-2 bg-white/5 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6">
                                        {selectedProject.links?.github && (
                                            <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="flex-1 h-16 flex items-center justify-center bg-white text-black font-bold rounded-2xl hover:bg-primary transition-colors">
                                                <Github className="mr-2" size={20} /> Repository
                                            </a>
                                        )}
                                        {selectedProject.links?.demo && (
                                            <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center glass-main border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                                <ExternalLink className="text-white" size={20} />
                                            </a>
                                        )}
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
