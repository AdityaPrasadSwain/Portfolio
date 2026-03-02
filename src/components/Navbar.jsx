import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 px-6' : 'py-8 px-8'
                }`}
        >
            <div
                className={`mx-auto max-w-7xl transition-all duration-700 ease-in-out ${scrolled
                    ? 'glass-nav rounded-[2.5rem] py-3 px-8 max-w-4xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                    : 'bg-transparent py-0 px-0'
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-display font-extrabold text-white tracking-tighter"
                    >
                        {profile.name.split(' ')[0]}<span className="text-primary">.</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {['About', 'Projects', 'Education', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-bold text-textSoft hover:text-white transition-all duration-300 uppercase tracking-widest relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 px-8 py-3 bg-primary text-background rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-white hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden fixed top-20 left-6 right-6 glass-card rounded-[2rem] p-8 overflow-hidden z-40 border border-white/20 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {['About', 'Projects', 'Education', 'Skills', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-xl font-bold text-textMain hover:text-primary transition-colors uppercase tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="w-full py-4 bg-primary text-background rounded-2xl font-bold text-center uppercase tracking-widest shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
