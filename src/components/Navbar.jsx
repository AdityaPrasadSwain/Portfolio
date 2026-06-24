import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Globe, ArrowRight, Home, User, Code2, Briefcase, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
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
 { name: 'Home', href: '/', icon: Home },
 { name: 'About', href: '/about', icon: User },
 { name: 'Skills', href: '/skills', icon: Code2 },
 { name: 'Projects', href: '/projects', icon: Briefcase },
 { name: 'Blog', href: '/blog', icon: BookOpen },
 { name: 'Resume', href: '/resume', icon: FileText }
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
 <Link
 to="/"
 className="flex items-center gap-3 group"
 >
 <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
 <svg width="90" height="40" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
 <defs>
 <linearGradient id="apsFront" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#38bdf8" />
 <stop offset="100%" stopColor="#818cf8" />
 </linearGradient>
 <linearGradient id="apsSide" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#0c4a6e" />
 <stop offset="100%" stopColor="#312e81" />
 </linearGradient>
 </defs>
 {/* 3D Extrusion Layers */}
 <text x="63" y="38" fontFamily="system-ui, sans-serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="url(#apsSide)" textAnchor="middle" letterSpacing="4">A.P.S</text>
 <text x="62" y="37" fontFamily="system-ui, sans-serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="url(#apsSide)" textAnchor="middle" letterSpacing="4">A.P.S</text>
 <text x="61" y="36" fontFamily="system-ui, sans-serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="url(#apsSide)" textAnchor="middle" letterSpacing="4">A.P.S</text>
 <text x="60" y="35" fontFamily="system-ui, sans-serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="url(#apsFront)" textAnchor="middle" letterSpacing="4">A.P.S</text>
 </svg>
 </div>
 </Link>

 {/* Desktop Menu */}
 <div className="hidden lg:flex items-center gap-10">
 {navLinks.map((link, i) => {
 const Icon = link.icon;
 return (
 <Link
 key={link.name}
 to={link.href}
 className="flex items-center gap-2 text-sm font-display font-medium uppercase tracking-widest text-white/60 hover:text-primary transition-all relative group"
 >
 <Icon size={16} className="text-primary/70 group-hover:text-primary transition-colors" />
 {link.name}
 <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
 </Link>
 )
 })}
 </div>

 {/* Action Button */}
 <div className="flex items-center gap-5">
 <Link
 to="/resume"
 className="hidden md:flex items-center gap-2 h-11 px-6 glass-main rounded-xl border border-white/5 text-sm font-display font-medium uppercase tracking-widest text-primary hover:bg-primary/10 hover:border-primary/20 transition-all"
 >
 <FileText size={16} /> Resume <ArrowRight size={14} className="rotate-90 ml-1" />
 </Link>

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
 {navLinks.map((link, i) => {
 const Icon = link.icon;
 return (
 <Link
 key={link.name}
 to={link.href}
 onClick={() => setIsMobileMenuOpen(false)}
 className="flex items-center gap-4 text-4xl font-display font-semibold text-white hover:text-primary uppercase tracking-normal"
 >
 <Icon size={32} className="text-primary/70" />
 {link.name}
 </Link>
 )
 })}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </nav>
 );
};

export default Navbar;
