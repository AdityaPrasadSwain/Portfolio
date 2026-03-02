import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';
import profile from '../data/profile';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-20 bg-background relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <h2 className="text-4xl font-display font-black text-white tracking-tighter mb-4 uppercase">
                                Aditya<span className="text-primary italic">.</span>
                            </h2>
                            <p className="text-textSoft font-light tracking-widest uppercase text-xs">Architecting Digital Futures</p>
                        </motion.div>

                        <div className="flex gap-8">
                            {[
                                { icon: Github, href: profile.socials.github },
                                { icon: Linkedin, href: profile.socials.linkedin },
                                { icon: Mail, href: `mailto:${profile.email}` }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-xl glass-main flex items-center justify-center text-textSoft hover:text-white transition-all border border-white/5 hover:border-primary/30"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 px-8 py-4 glass-card-premium rounded-full border border-white/5 text-textSoft hover:text-white transition-all"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">Ascend</span>
                            <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform text-primary" />
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                        <p className="text-[10px] font-bold text-textSoft uppercase tracking-[0.5em]">
                            © {new Date().getFullYear()} ADITYA PRASAD SWAIN. ALL RIGHTS RESERVED.
                        </p>
                        <div className="flex gap-8">
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">VERSION 2.0.0</span>
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">CINEMATIC.ETH</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
        </footer>
    );
};

export default Footer;
