import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, School, GraduationCap, Award, Calendar, Sparkles } from 'lucide-react';
import profile from '../data/profile';

const Education = () => {
    return (
        <section id="education" className="py-24 relative bg-background overflow-hidden border-t border-white/5">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6"
                        >
                            <GraduationCap size={12} className="text-secondary animate-pulse" />
                            <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-[0.3em]">My Education</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6 uppercase italic leading-tight"
                        >
                            Academic <span className="text-gradient-neon">Background</span><span className="text-secondary">.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-base md:text-lg text-textSoft font-light max-w-xl leading-relaxed"
                        >
                            My studies and focus on <span className="text-white italic">building great software</span>.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {profile.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                                className="group bento-card border border-white/10 p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 hover:border-secondary/20 transition-all duration-700 relative overflow-hidden rounded-2xl"
                            >
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl group-hover:bg-secondary/10 transition-colors" />

                                <div className="lg:w-1/6 flex flex-col items-center lg:items-start">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform duration-500 shadow-neon-violet">
                                        <School size={24} />
                                    </div>
                                    <div className="px-4 py-1.5 glass-main rounded-full border border-white/5 text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.3em] group-hover:text-secondary group-hover:border-secondary/30 transition-all">
                                        {edu.year}
                                    </div>
                                </div>

                                <div className="flex-1 text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-2.5 text-secondary font-mono font-bold text-[8px] uppercase tracking-[0.4em] mb-2">
                                        <MapPin size={10} /> Odisha, India
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter mb-2 leading-tight uppercase italic group-hover:text-glow-blue transition-all duration-700">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-lg text-textSoft font-light italic group-hover:text-white transition-colors">{edu.degree}</p>
                                </div>

                                <div className="lg:w-1/5 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                                    <p className="text-white/20 text-[8px] font-mono font-bold uppercase tracking-[0.4em] mb-2">Performance</p>
                                    <div className="text-4xl md:text-5xl font-display font-black text-white group-hover:text-secondary transition-all duration-700">
                                        {edu.score}
                                    </div>
                                    <p className="text-[8px] font-mono font-bold text-white/10 uppercase tracking-[0.2em] mt-1">Aggregate</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
