import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, Globe, ArrowRight } from 'lucide-react';
import profile from '../data/profile';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Identity', href: '#about' },
        { name: 'Arsenal', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Works', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-10'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className={`relative flex items-center justify-between transition-all duration-700 ${isScrolled ? 'px-8 py-3 glass-main rounded-full border border-white/5 shadow-2xl max-w-5xl mx-auto' : 'max-w-7xl mx-auto'
                    }`}>
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-black font-black font-display group-hover:scale-110 transition-transform shadow-neon-lime">
                            {profile.initials[0]}
                        </div>
                        <span className="text-sm font-mono font-bold tracking-[0.2em] text-white uppercase hidden sm:block">
                            Junior <span className="text-primary group-hover:text-white transition-colors duration-500">Developer</span>
                        </span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-5">
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="hidden md:flex items-center gap-2 h-10 px-6 glass-main rounded-xl border border-white/5 text-[10px] font-mono font-bold uppercase tracking-widest text-primary hover:bg-primary/10 hover:border-primary/20 transition-all"
                        >
                            Orchestrate <Terminal size={12} />
                        </motion.a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(40px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 bg-background/80 lg:hidden flex flex-col items-center justify-center z-[200]"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-10 right-10 w-12 h-12 glass-main rounded-2xl flex items-center justify-center text-white"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center gap-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-display font-black text-white hover:text-primary uppercase italic tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
