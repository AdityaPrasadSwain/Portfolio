import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, School } from 'lucide-react';
import profile from '../data/profile';

const Education = () => {
    return (
        <section id="education" className="py-32 relative bg-surface overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center md:text-left"
                    >
                        <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-4">
                            ACADEMICS<span className="text-primary">.</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary mx-auto md:mx-0" />
                    </motion.div>

                    <div className="space-y-12">
                        {profile.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 group-hover:bg-primary/30 transition-colors" />

                                <div className="pl-12 py-4">
                                    <div className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-white group-hover:bg-primary group-hover:scale-150 transition-all border-4 border-surface" />

                                    <div className="glass-card-premium rounded-[2.5rem] p-10 border border-white/5 hover:border-primary/20 transition-all">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                                                    <School size={30} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">{edu.institution}</h3>
                                                    <div className="flex items-center gap-3 text-textSoft text-sm mt-1 uppercase tracking-widest font-bold">
                                                        <MapPin size={14} />
                                                        Bhubaneswar, India
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-5 py-2 glass-main rounded-full border border-white/10">
                                                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em]">
                                                    <Calendar size={14} className="text-primary" />
                                                    {edu.year}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t border-white/5 pt-8">
                                            <div>
                                                <p className="text-textSoft text-xs font-bold uppercase tracking-[0.3em] mb-2">Specialization</p>
                                                <h4 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">{edu.degree}</h4>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-textSoft text-xs font-bold uppercase tracking-[0.3em] mb-2">Performance</p>
                                                <div className="text-4xl font-display font-black text-primary">
                                                    {edu.score}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
