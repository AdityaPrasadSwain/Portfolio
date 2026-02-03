import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import ProjectDetails from '../components/ProjectDetails'
import { Github, ArrowUpRight } from 'lucide-react'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="py-32 relative bg-slate-50">
            {/* Project Details Overlay */}
            <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />

            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <span className="text-primary text-sm tracking-widest uppercase font-bold mb-2 block">Selected Works</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
                            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Projects</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-md text-lg leading-relaxed hidden md:block">
                        A collection of digital products, experiments, and open source contributions that I've built.
                    </p>
                </motion.div>

                {/* Grid Layout instead of Carousel for "Proper" display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {profile.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full"
                        >
                            {/* Card Image / Gradient Placeholder */}
                            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden flex items-center justify-center p-8 group-hover:bg-blue-50/80 transition-colors">
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight size={20} className="text-primary" />
                                </div>

                                {/* Placeholder Visual representation */}
                                <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-gray-400/30 group-hover:text-primary/20 transition-colors uppercase tracking-widest">
                                        {project.title.substring(0, 3)}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">{project.category}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md border border-gray-200">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-50 text-gray-400 text-xs font-medium rounded-md border border-gray-200">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/AdityaPrasadSwain"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm group"
                    >
                        View More on GitHub <Github size={18} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}
