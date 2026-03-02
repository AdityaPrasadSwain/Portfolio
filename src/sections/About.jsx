import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, GraduationCap, Award, Briefcase } from 'lucide-react';
import profile from '../data/profile';

const About = () => {
    return (
        <section id="about" className="py-32 relative bg-surface overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter">
                                IDENTITY<span className="text-primary">.</span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-textSoft max-w-md text-lg leading-relaxed font-light"
                        >
                            Bridging the gap between complex backend logic and seamless user interactions through architectural excellence.
                        </motion.p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
                        {/* Main Bio Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 md:row-span-2 glass-card-premium rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/40 transition-colors" />
                            <Briefcase size={40} className="text-primary mb-8" />
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                                Engineering scalable solutions with a persistent focus on efficiency.
                            </h3>
                            <p className="text-xl text-textSoft leading-relaxed font-light max-w-2xl">
                                {profile.objective}
                            </p>
                        </motion.div>

                        {/* Experience Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 md:row-span-1 glass-main rounded-[3rem] p-8 flex flex-col justify-between border border-white/5 active:scale-95 transition-transform"
                        >
                            <div className="flex justify-between items-start">
                                <Award className="text-accent" size={32} />
                                <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">Achievement</span>
                            </div>
                            <div>
                                <h4 className="text-4xl font-display font-black text-white">{profile.internship.company}</h4>
                                <p className="text-textSoft font-medium uppercase tracking-widest text-xs mt-2">{profile.internship.role}</p>
                            </div>
                        </motion.div>

                        {/* Tech Stacks Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 md:row-span-2 glass-card-premium rounded-[3rem] p-10 flex flex-col overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
                            <Database size={40} className="text-secondary mb-8 relative z-10" />
                            <h4 className="text-2xl font-display font-bold text-white mb-6 relative z-10 uppercase tracking-tighter">Core Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {profile.skills.backend.slice(0, 6).map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-textSoft border border-white/5 group-hover:border-secondary/30 transition-all">{skill}</span>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
                                <p className="text-textSoft text-sm leading-relaxed">Specializing in Java, Spring Boot, and refined microservice orchestration.</p>
                            </div>
                        </motion.div>

                        {/* Education Quick Look */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 md:row-span-1 glass-main rounded-[3rem] p-8 flex flex-col justify-between border border-white/5"
                        >
                            <GraduationCap className="text-primary" size={32} />
                            <div>
                                <p className="text-textSoft text-xs font-bold uppercase tracking-widest mb-2">Education</p>
                                <h4 className="text-xl font-display font-bold text-white leading-tight">{profile.education[0].degree}</h4>
                            </div>
                        </motion.div>

                        {/* UI/UX Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 md:row-span-1 glass-card-premium rounded-[3rem] p-8 bg-gradient-to-br from-accent/10 to-transparent flex flex-col justify-between"
                        >
                            <Layout className="text-accent" size={32} />
                            <p className="text-lg font-display font-medium text-white leading-tight">Crafting interfaces that are both functional & aesthetically superior.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
        </section>
    );
};

export default About;
