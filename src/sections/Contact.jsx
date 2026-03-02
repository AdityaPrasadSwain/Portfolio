import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import profile from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter leading-none mb-8">
                                    CONNECT<span className="text-primary">.</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-textSoft font-light max-w-lg leading-relaxed mb-12">
                                    Exploring new architectural challenges or just want to talk about high-performance systems?
                                </p>
                            </motion.div>

                            <div className="space-y-6">
                                <a href={`mailto:${profile.email}`} className="group flex items-center gap-6 p-8 glass-card-premium rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <p className="text-textSoft text-xs font-bold uppercase tracking-widest mb-1">Direct Email</p>
                                        <p className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">{profile.email}</p>
                                    </div>
                                </a>

                                <div className="flex gap-6">
                                    <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-4 p-6 glass-main rounded-[2rem] text-textSoft hover:text-white hover:bg-white/5 transition-all">
                                        <Github size={24} /> <span className="font-bold text-xs uppercase tracking-widest">GitHub</span>
                                    </a>
                                    <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-4 p-6 glass-main rounded-[2rem] text-textSoft hover:text-white hover:bg-white/5 transition-all">
                                        <Linkedin size={24} /> <span className="font-bold text-xs uppercase tracking-widest">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card-premium rounded-[3.5rem] p-12 md:p-16 border border-white/10 shadow-3xl"
                        >
                            <div className="flex items-center gap-3 mb-10">
                                <MessageSquare className="text-primary" size={24} />
                                <span className="text-xs font-bold text-white/50 uppercase tracking-[0.4em]">Send a message</span>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-textSoft uppercase tracking-widest px-4">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input-cinematic"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-textSoft uppercase tracking-widest px-4">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input-cinematic"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-textSoft uppercase tracking-widest px-4">Your Message</label>
                                    <textarea
                                        rows="6"
                                        placeholder="Your Message..."
                                        className="input-cinematic resize-none"
                                    />
                                </div>

                                <button className="group w-full h-20 bg-primary text-black font-black rounded-3xl flex items-center justify-center gap-3 text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-primary/50">
                                    Ignite Conversation
                                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
