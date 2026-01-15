import React from 'react';
import { motion } from 'framer-motion';
import ResumeBook from '../components/ResumeBook';

const Resume = () => {
    return (
        <section id="resume" className="py-32 min-h-screen relative overflow-hidden flex flex-col items-center justify-center">

            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse-slow"></div>

            <div className="container mx-auto px-6 mb-24 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Professional Dossier</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Interactive Resume</h2>
                    <p className="text-muted max-w-lg mx-auto mb-8">
                        Flip through my professional journey. A cinematic overview of my skills, experience, and architectural philosophy.
                    </p>

                    <div className="flex justify-center gap-4 text-sm text-white/40 font-mono">
                        <span className="flex items-center gap-2">
                            Use Mouse to Flip Pages
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* The 3D Book */}
            <div className="container mx-auto px-4 md:px-0 flex justify-center pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full max-w-4xl flex justify-center"
                >
                    <ResumeBook />
                </motion.div>
            </div>

        </section>
    );
};

export default Resume;
