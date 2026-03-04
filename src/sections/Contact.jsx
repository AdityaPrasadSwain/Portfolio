import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send, Globe, Terminal, Layers, Activity } from 'lucide-react';
import profile from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-16"
                            >
                                <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-8 uppercase italic leading-none">
                                    Contact<br /><span className="text-gradient-neon text-glow-lime">Me</span><span className="text-primary">.</span>
                                </h2>
                                <p className="text-xl text-textSoft font-light max-w-xl leading-relaxed">
                                    I am available for new projects and roles. Let's build something <span className="text-white italic">great together</span>.
                                </p>
                            </motion.div>

                            <div className="space-y-8 mb-16">
                                {Object.entries(profile.socials).map(([platform, link], i) => (
                                    <motion.a
                                        key={platform}
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-6 glass-card-premium border border-white/5 rounded-[2rem] group hover:border-primary/20 transition-all hover:shadow-magnetic"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                                                {platform === 'email' && <Mail size={20} />}
                                                {platform === 'github' && <Github size={20} />}
                                                {platform === 'linkedin' && <Linkedin size={20} />}
                                                {platform === 'instagram' && <Layers size={20} />}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.4em] mb-1">{platform}</p>
                                                <p className="text-lg font-display font-bold text-white uppercase italic tracking-tighter">
                                                    {platform === 'email' ? 'swainaditya921@gmail.com' : `@adityaswain`}
                                                </p>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125 pointer-events-none" />
                            <div className="bento-card bg-surfaceLight/30 border border-white/10 p-12 md:p-16 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-12">
                                        <Terminal size={18} className="text-primary" />
                                        <span className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.5em]">Encrypted Channel</span>
                                    </div>

                                    <form className="space-y-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest ml-4">Full Identity</label>
                                            <input type="text" placeholder="John Doe" className="input-cinematic shadow-none focus:shadow-neon-lime/10" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest ml-4">Signal Source</label>
                                            <input type="email" placeholder="john@company.com" className="input-cinematic shadow-none focus:shadow-neon-lime/10" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest ml-4">The Payload</label>
                                            <textarea rows="4" placeholder="Brief project overview or inquiry details..." className="input-cinematic shadow-none focus:shadow-neon-lime/10 resize-none pt-6"></textarea>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full h-16 bg-primary text-black font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-4 group/btn shadow-neon-lime hover:shadow-primary/40 transition-all text-[10px]"
                                        >
                                            Send Message <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </motion.button>
                                    </form>
                                </div>

                                <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                    <div className="w-20 h-20 rounded-2xl glass-card-premium border border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors duration-500">
                                        <Activity size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="h-full w-1/3 bg-primary/40"
                                            />
                                        </div>
                                        <p className="text-[9px] font-mono font-bold mt-3 uppercase tracking-widest text-white/60">System Ready for Transmission</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
