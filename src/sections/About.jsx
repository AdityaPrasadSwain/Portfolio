import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, GraduationCap, Award, Briefcase, Globe, Zap, Shield } from 'lucide-react';
import profile from '../data/profile';

const About = () => {
    return (
        <section id="about" className="py-32 relative bg-background overflow-hidden">
            {/* Subtle Gradient Glows */}
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/2 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/2 blur-[160px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6 uppercase italic">
                                The Design<br /><span className="text-gradient-neon text-glow-cobalt">Identity</span><span className="text-secondary">.</span>
                            </h2>
                            <p className="text-base text-textSoft font-light max-w-xl border-l-2 border-secondary/20 pl-8 py-2">
                                At the intersection of high-tier engineering and elite UI/UX. I don't just write code; I design scalable digital ecosystems.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Main Identity Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-6 lg:col-span-8 bento-card border border-white/5 flex flex-col items-center justify-center text-center group"
                        >
                            <div className="relative mb-12 w-32 h-32 md:w-48 md:h-48">
                                <div className="absolute inset-x-0 bottom-0 bg-primary/30 blur-[60px] h-1/2 rounded-full scale-125" />
                                <img
                                    src="/images/system_architect_visual_1772640355787.png"
                                    alt="Junior Developer"
                                    className="w-full h-full object-cover rounded-[3.5rem] relative z-10 border border-white/10 glass-card-premium group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter uppercase italic mb-6">
                                Junior <span className="text-primary font-black not-italic opacity-40">Developer</span>
                            </h3>
                            <p className="text-lg text-textSoft font-light max-w-2xl leading-relaxed">
                                {profile.objective}
                            </p>
                        </motion.div>

                        {/* High Performance Metrics */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-3 lg:col-span-4 bento-card border border-white/5 bg-surfaceLight/30 flex flex-col justify-between group"
                        >
                            <div className="flex h-12 w-12 rounded-2xl bg-secondary/20 text-secondary items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-display font-black text-3xl leading-none uppercase italic mb-4">High<br />Performance.</h4>
                                <p className="text-xs text-textSoft font-light border-t border-white/5 pt-6 mt-6 uppercase tracking-widest leading-relaxed">
                                    Optimized for <span className="text-secondary font-bold">millisecond</span> latency and extreme vertical/horizontal scalability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Principles Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-3 lg:col-span-4 bento-card border border-white/5 flex flex-col justify-between group"
                        >
                            <div className="flex h-12 w-12 rounded-2xl bg-primary/20 text-primary items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-display font-black text-4xl leading-none uppercase italic mb-4">Elite<br />Security.</h4>
                                <p className="text-sm text-textSoft font-light border-t border-white/5 pt-6 mt-6 uppercase tracking-widest leading-relaxed">
                                    Hardened <span className="text-primary font-bold">OAuth2/JWT</span> flows and zero-trust service orchestration.
                                </p>
                            </div>
                        </motion.div>

                        {/* Location/Global Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-6 lg:col-span-8 bento-card border border-white/5 flex flex-col lg:flex-row items-center gap-12 group overflow-hidden"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <Globe size={18} className="text-secondary" />
                                    <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-[0.4em]">Availability</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-display font-black text-white italic uppercase tracking-tighter mb-4">
                                    Globally Distributed.
                                </h4>
                                <p className="text-base text-textSoft font-light">
                                    Based in <span className="text-white font-medium">{profile.location}</span>, operating with a global-first mindset on large-scale distributed architectures.
                                </p>
                            </div>
                            <div className="flex-1 relative h-full w-full lg:w-48 aspect-square lg:aspect-auto">
                                <div className="absolute inset-0 bg-secondary/5 blur-3xl rounded-full scale-110" />
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-full h-full border border-white/[0.03] rounded-full p-8"
                                    >
                                        <div className="w-full h-full border border-white/[0.05] rounded-full p-8 flex items-center justify-center">
                                            <div className="w-full h-full bg-white/[0.01] rounded-full border border-white/[0.08]" />
                                        </div>
                                    </motion.div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary shadow-neon-teal animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
