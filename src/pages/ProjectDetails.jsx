import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projectData } from '../data/projectData';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id] || projectData['udrakala']; // Fallback/Default

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-20 px-6 font-sans selection:bg-blue-500/30">
            <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                <header className="mb-16 border-b border-white/10 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-400 font-light">{project.subtitle}</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-200 border-l-4 border-blue-500 pl-4">The Challenge</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">{project.challenge}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-purple-200 border-l-4 border-purple-500 pl-4">The Solution</h2>
                            <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">{project.solution}</div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-green-200 border-l-4 border-green-500 pl-4">Key Features</h2>
                            <div className="grid gap-6">
                                {project.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors"
                                    >
                                        <h3 className="text-xl font-bold text-blue-300 mb-2 flex items-center">
                                            <CheckCircle2 size={20} className="mr-2" /> {feature.title}
                                        </h3>
                                        <p className="text-gray-400">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {project.images && (
                            <section>
                                <h2 className="text-2xl font-semibold mb-6 text-pink-200 border-l-4 border-pink-500 pl-4">Preview</h2>
                                <div className="grid gap-4">
                                    {project.images.map((img, idx) => (
                                        <motion.img
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.2 }}
                                            src={img}
                                            alt={`Project Preview ${idx + 1}`}
                                            className="rounded-xl border border-white/10 w-full shadow-lg"
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-10">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 sticky top-32">
                            <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-3">Technologies</h3>
                            <div className="space-y-6">
                                {Object.entries(project.techStack).map(([category, techs]) => (
                                    <div key={category}>
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-3">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col gap-4">
                                <a href="#" className="flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all">
                                    <ExternalLink size={20} className="mr-2" /> Live Demo
                                </a>
                                <a href="#" className="flex items-center justify-center w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all">
                                    <Github size={20} className="mr-2" /> View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
