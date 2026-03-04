import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Sparkles, Github, Linkedin, Mail, ArrowRight, Layers, Instagram } from 'lucide-react';
import profile from '../data/profile';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = profile.roles;

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.2] mask-radial" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hero-gradient opacity-40 z-0" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="px-5 py-2 glass-main rounded-full border border-primary/20 flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">Available for Collaboration</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-tight tracking-tighter text-white uppercase italic">
                            HI, I AM <span className="text-gradient-neon text-glow-cyan">ADITYA</span><span className="text-primary">.</span>
                        </h1>
                    </motion.div>

                    {/* Dynamic Rotating Roles with Typing Effect */}
                    <div className="h-12 mb-10 overflow-hidden relative w-full flex justify-center items-center">
                        <div className="text-xl md:text-3xl font-display font-bold text-white/60 uppercase tracking-widest italic min-h-[1.5em] flex items-center">
                            <span>{text}</span>
                            <span className="w-1 h-8 bg-primary ml-1 animate-pulse" />
                        </div>
                    </div>

                    {/* Subheadline and CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-3xl mb-16"
                    >
                        <p className="text-base md:text-lg text-textSoft font-light leading-relaxed mb-10 px-4">
                            Engineering <span className="text-white font-medium italic">reliable systems</span> with precision and care. Backend specialist focused on building software that works for everyone.
                        </p>

                        <div className="relative w-full overflow-hidden mb-12 py-2">
                            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                            <motion.div
                                className="flex gap-4 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...Object.values(profile.skills).flat(), ...Object.values(profile.skills).flat()].map((skill, i) => (
                                    <span
                                        key={`${skill}-${i}`}
                                        className="px-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-12 px-8 bg-primary text-black font-black uppercase tracking-widest rounded-xl shadow-neon-cyan hover:shadow-primary/40 transition-all flex items-center gap-3 group text-xs"
                            >
                                See My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <div className="flex items-center gap-4">
                                {Object.entries(profile.socials).map(([platform, link], i) => (
                                    platform !== 'email' && (
                                        <motion.a
                                            key={platform}
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -5, color: '#00E5FF' }}
                                            className="w-10 h-10 glass-main rounded-xl flex items-center justify-center text-white/40 border border-white/5 hover:border-primary/20 transition-all"
                                        >
                                            {platform === 'instagram' && <Instagram size={18} />}
                                            {platform === 'linkedin' && <Linkedin size={18} />}
                                            {platform === 'github' && <Github size={18} />}
                                        </motion.a>
                                    )
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Visual Asset Replacement */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="w-full max-w-5xl mt-12 relative group"
                    >
                        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
                        <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden glass-card-premium border border-white/10 p-2 bg-mesh-premium">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
                            <img src="/images/hero.png" alt="Hero Visualization" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                            <div className="w-full h-full flex items-center justify-center relative z-10">
                                <span className="text-white/10 font-display font-black text-6xl md:text-9xl uppercase italic tracking-tighter select-none">SYSTEMS READY</span>
                            </div>
                        </div>

                        {/* Interactive Floating Tags */}
                        <div className="absolute -top-10 -left-10 hidden lg:block">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="px-6 py-4 glass-card-premium rounded-3xl border border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary"><Layers size={20} /></div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Throughput</p>
                                    <p className="text-xl font-display font-black text-white leading-none">1.2M <span className="text-xs text-primary">req/s</span></p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="absolute -bottom-10 -right-10 hidden lg:block">
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="px-6 py-4 glass-card-premium rounded-3xl border border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary"><Sparkles size={20} /></div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Latency</p>
                                    <p className="text-xl font-display font-black text-white leading-none">4ms <span className="text-xs text-secondary">p99</span></p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/20">The Infrastructure</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
