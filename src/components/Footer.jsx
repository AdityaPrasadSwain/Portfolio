import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, Cpu, ArrowUp, Heart, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import profile from '../data/profile';

const Footer = () => {
 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
 <footer className="py-20 relative bg-background overflow-hidden border-t border-white/5">
 <div className="container mx-auto px-6 relative z-10">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
 <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
 <motion.div
 whileHover={{ scale: 1.05 }}
 className="w-16 h-16 rounded-[1.5rem] bg-primary flex items-center justify-center text-black font-semibold font-display mb-8 shadow-neon-cobalt cursor-none"
 >
 {profile.initials[0]}
 </motion.div>
 <h3 className="text-3xl font-display font-semibold text-white uppercase tracking-normal mb-4">
 Aditya<br /><span className="text-primary">Prasad Swain</span>
 </h3>
 <div className="flex items-center gap-3 text-[10px] font-mono font-medium text-white/40 uppercase tracking-[0.4em]">
 <Globe size={14} className="text-secondary" /> Junior Developer
 </div>
 </div>

 <div className="flex flex-col items-center lg:items-end gap-10">
 <div className="flex gap-6 md:gap-8">
 {Object.entries(profile.socials).map(([platform, link]) => {
 const getIcon = () => {
 if (platform === 'email') return <Mail size={16} />;
 if (platform === 'instagram') return <Instagram size={16} />;
 if (platform === 'linkedin') return <Linkedin size={16} />;
 if (platform === 'github') return <Github size={16} />;
 return null;
 };
 return (
 <a
 key={platform}
 href={link}
 target="_blank"
 rel="noreferrer"
 className="flex items-center gap-2 text-[10px] md:text-xs font-mono font-medium uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-all relative group"
 >
 {getIcon()}
 <span className="hidden sm:block">{platform}</span>
 <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
 </a>
 );
 })}
 </div>

 <motion.button
 onClick={scrollToTop}
 whileHover={{ y: -5 }}
 whileTap={{ scale: 0.95 }}
 className="h-16 w-16 glass-main rounded-2xl flex items-center justify-center text-white/40 border border-white/5 hover:border-primary/20 hover:text-primary transition-all"
 >
 <ArrowUp size={24} />
 </motion.button>
 </div>
 </div>

 <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
 <div className="flex items-center gap-3 text-xs font-mono font-medium text-white/40 uppercase tracking-widest">
 <Terminal size={16} /> System Status: <span className="text-primary animate-pulse">Operational</span>
 </div>

 <p className="text-xs font-mono font-medium text-white/50 uppercase tracking-widest flex items-center gap-2 text-center">
 Built with <Cpu size={16} className="text-secondary" /> & <Heart size={16} className="text-primary fill-primary" /> in Odisha
 </p>

 <p className="text-xs font-mono font-medium text-white/40 uppercase tracking-widest text-center">
 &copy; 2024 Aditya Prasad Swain. Keep building. Keep pushing boundaries.
 </p>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;
