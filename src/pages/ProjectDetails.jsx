import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projectData } from '../data/projectData';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 pt-24 pb-20 px-6 font-sans flex items-center justify-center">
                <div className="text-center bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-12 border border-slate-200/60 max-w-md">
                    <h1 className="text-4xl font-bold mb-4 text-textMain font-display">Project Not Found</h1>
                    <p className="text-textSoft mb-8 text-lg">The project you're looking for doesn't exist.</p>
                    <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-all hover:translate-x-[-4px] font-semibold group">
                        <ArrowLeft size={20} className="mr-2 group-hover:animate-pulse" />
                        <span className="border-b-2 border-transparent group-hover:border-primary transition-all">Back to Projects</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 pt-24 pb-20 px-6 font-sans selection:bg-primary/20">
            <div className="max-w-6xl mx-auto">
                <Link to="/" className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-all hover:translate-x-[-4px] font-medium group">
                    <ArrowLeft size={20} className="mr-2 group-hover:animate-pulse" />
                    <span className="border-b-2 border-transparent group-hover:border-primary transition-all">Back to Projects</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Hero Header */}
                    <header className="mb-12 bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8 md:p-12 border border-slate-200/60 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-0"></div>
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4 font-display leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-textSoft font-light leading-relaxed">{project.subtitle}</p>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* The Challenge */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 border border-slate-200/60"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-1.5 h-12 bg-gradient-to-b from-primary to-secondary rounded-full mr-4"></div>
                                    <h2 className="text-3xl font-bold text-textMain font-display">The Challenge</h2>
                                </div>
                                <p className="text-textSoft leading-relaxed text-lg">{project.challenge}</p>
                            </motion.section>

                            {/* The Solution */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 border border-slate-200/60"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-1.5 h-12 bg-gradient-to-b from-secondary to-accent rounded-full mr-4"></div>
                                    <h2 className="text-3xl font-bold text-textMain font-display">The Solution</h2>
                                </div>
                                <div className="text-textSoft leading-relaxed text-lg whitespace-pre-line">{project.solution}</div>
                            </motion.section>

                            {/* Key Features */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-1.5 h-12 bg-gradient-to-b from-accent to-primary rounded-full mr-4"></div>
                                    <h2 className="text-3xl font-bold text-textMain font-display">Key Features</h2>
                                </div>
                                <div className="grid gap-4">
                                    {project.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.02, translateX: 8 }}
                                            className="bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-xl border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer group"
                                        >
                                            <h3 className="text-xl font-bold text-textMain mb-2 flex items-center group-hover:text-primary transition-colors">
                                                <CheckCircle2 size={22} className="mr-3 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                                                {feature.title}
                                            </h3>
                                            <p className="text-textSoft ml-9">{feature.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Preview Images */}
                            {project.images && project.images.length > 0 && (
                                <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-1.5 h-12 bg-gradient-to-b from-accent to-secondary rounded-full mr-4"></div>
                                        <h2 className="text-3xl font-bold text-textMain font-display">Preview</h2>
                                    </div>
                                    <div className="grid gap-6">
                                        {project.images.map((img, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 }}
                                                className="rounded-2xl overflow-hidden shadow-xl shadow-slate-300/50 border-2 border-slate-200/60 hover:shadow-2xl hover:shadow-primary/20 transition-all"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Project Preview ${idx + 1}`}
                                                    className="w-full hover:scale-105 transition-transform duration-500"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        console.warn(`Image not found: ${img}`);
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60 lg:sticky lg:top-32"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-textMain border-b-2 border-slate-200 pb-4 font-display">Technologies</h3>
                                <div className="space-y-6">
                                    {Object.entries(project.techStack).map(([category, techs]) => (
                                        <div key={category}>
                                            <h4 className="text-xs uppercase tracking-widest text-textSoft font-bold mb-3 flex items-center">
                                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {techs.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 transition-all cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t-2 border-slate-200 flex flex-col gap-4">
                                    <a
                                        href={project.liveUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                                        onClick={(e) => !project.liveUrl && e.preventDefault()}
                                    >
                                        <ExternalLink size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full py-4 bg-slate-100 hover:bg-slate-200 text-textMain rounded-xl font-semibold transition-all border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                                        onClick={(e) => !project.githubUrl && e.preventDefault()}
                                    >
                                        <Github size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                                        View Code
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
