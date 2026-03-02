import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profile from '../data/profile';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="grain-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center md:text-left">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 glass-main rounded-full mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Available for new opportunities</span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="relative mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-display font-extrabold leading-[0.9] tracking-tighter text-white mb-4"
                        >
                            <span className="block italic font-light text-primary/80">Designing</span>
                            <span className="block">Digital Architecture</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
                        >
                            <div className="glass-card-premium p-6 rounded-3xl rotate-12 backdrop-blur-xl">
                                <Sparkles className="text-primary mb-2" size={32} />
                                <p className="text-xs font-bold text-white leading-tight uppercase tracking-widest">Premium<br />Experience</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Description & CTAs */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="md:col-span-7"
                        >
                            <p className="text-xl md:text-2xl text-textSoft font-light leading-relaxed max-w-xl">
                                I am Aditya, a <span className="text-white font-medium">Backend Specialist</span> & <span className="text-white font-medium">Systems Architect</span> crafting high-performance digital experiences with Java & Spring Boot.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="md:col-span-5 flex flex-col gap-6"
                        >
                            <div className="flex gap-4">
                                <a href="#projects" className="group relative flex-1 h-16 flex items-center justify-center bg-white text-black font-bold rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                                    <span>View Projects</span>
                                    <ArrowDownRight className="ml-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                                </a>
                                <a href="#contact" className="w-16 h-16 flex items-center justify-center glass-main border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                                    <Mail className="text-white" />
                                </a>
                            </div>

                            <div className="flex items-center gap-6 px-4">
                                <div className="h-[1px] flex-1 bg-white/10" />
                                <div className="flex gap-4">
                                    <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-textSoft hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-textSoft hover:text-white transition-colors"><Linkedin size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="text-[10px] font-bold text-textSoft uppercase tracking-[0.4em] rotate-90 mb-8">Scroll</div>
                <div className="w-[1px] h-24 bg-gradient-to-b from-primary via-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
