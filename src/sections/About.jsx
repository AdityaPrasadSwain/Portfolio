import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, GraduationCap, Award, Briefcase, Globe, Zap, Shield } from 'lucide-react';
import profile from '../data/profile';
import Education from './Education';

const About = () => {
 return (
 <>
 <section id="about" className="py-32 relative bg-background overflow-hidden pt-40">
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
 <h2 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-normal mb-6 uppercase ">
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
 className="md:col-span-6 lg:col-span-8 bento-card border border-white/5 flex flex-col md:flex-row items-stretch group overflow-hidden p-0"
 >
 <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full overflow-hidden">
 <div className="absolute inset-0 bg-primary/20 blur-[50px] mix-blend-screen scale-150 z-0" />
 <img
 src="/images/system_architect_visual_1772640355787.png"
 alt="Junior Developer"
 className="w-full h-full object-cover relative z-10 opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
 />
 {/* Gradient Fade to blend image into text */}
 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
 </div>
 
 <div className="w-full md:w-1/2 p-8 md:p-12 md:pl-4 flex flex-col justify-center text-center md:text-left relative z-30">
 <h3 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-normal uppercase mb-6 leading-tight">
 Junior<br /><span className="text-primary font-semibold">Developer</span>
 </h3>
 <p className="text-lg md:text-xl text-textSoft font-light max-w-xl leading-relaxed mx-auto md:mx-0">
 {profile.objective}
 </p>
 </div>
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
 <h4 className="text-white font-display font-semibold text-4xl md:text-5xl leading-tight uppercase mb-4">High<br />Performance.</h4>
 <p className="text-sm md:text-base text-textSoft font-light border-t border-white/5 pt-6 mt-6 uppercase tracking-widest leading-relaxed">
 Optimized for <span className="text-secondary font-medium">millisecond</span> latency and extreme vertical/horizontal scalability.
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
 <h4 className="text-white font-display font-semibold text-4xl md:text-5xl leading-tight uppercase mb-4">Elite<br />Security.</h4>
 <p className="text-sm md:text-base text-textSoft font-light border-t border-white/5 pt-6 mt-6 uppercase tracking-widest leading-relaxed">
 Hardened <span className="text-primary font-medium">OAuth2/JWT</span> flows and zero-trust service orchestration.
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
 <Globe size={20} className="text-secondary" />
 <span className="text-xs font-mono font-medium text-white/40 uppercase tracking-[0.4em]">Availability</span>
 </div>
 <h4 className="text-3xl md:text-5xl font-display font-semibold text-white uppercase tracking-normal mb-4 leading-tight">
 Globally Distributed.
 </h4>
 <p className="text-lg md:text-xl text-textSoft font-light">
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
 
 {/* Experience Section */}
 <div className="mt-32 relative z-10">
 <div className="flex flex-col items-center text-center mb-16">
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1 }}
 className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.05] border border-white/20 mb-6 shadow-sm"
 >
 <Briefcase size={16} className="text-primary animate-pulse" />
 <span className="text-xs font-mono font-medium text-white/70 uppercase tracking-widest">Experience</span>
 </motion.div>
 <h3 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-normal uppercase">
 Professional <span className="text-gradient-neon">Journey</span>.
 </h3>
 </div>
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="max-w-4xl mx-auto bento-card border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-primary/20 transition-all duration-700 relative overflow-hidden rounded-2xl"
 >
 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
 <div className="md:w-1/4 flex flex-col items-center md:items-start">
 <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500 shadow-neon-blue">
 <Briefcase size={32} />
 </div>
 <div className="px-4 py-1.5 glass-main rounded-full border border-white/5 text-[10px] font-mono font-medium text-white/30 uppercase tracking-[0.3em] group-hover:text-primary transition-all">
 {profile.internship.duration}
 </div>
 </div>
 <div className="flex-1 text-center md:text-left">
 <h4 className="text-3xl font-display font-semibold text-white tracking-normal mb-2 leading-tight uppercase group-hover:text-glow-blue transition-all duration-700">
 {profile.internship.role}
 </h4>
 <p className="text-xl text-primary font-medium mb-2">{profile.internship.company}</p>
 <p className="text-lg text-textSoft font-light group-hover:text-white transition-colors">Focus: {profile.internship.focus}</p>
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 <Education />
 </>
 );
};

export default About;
