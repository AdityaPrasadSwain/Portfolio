import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import profileImg from '../assets/profile-3d-v2.png'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20 px-6" id="home">

            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="w-full md:w-1/2 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-4"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                            Welcome, Visionary
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
                    >
                        <span className="text-textMain">{profile.name.split(' ')[0]}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary custom-text-shadow">
                            {profile.name.split(' ').slice(1).join(' ')}
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-textSoft font-light mb-8 flex items-center gap-3"
                    >
                        <span className="text-primary font-semibold">I am a</span>
                        <span className="text-textMain font-bold h-10 block">
                            <Typewriter
                                options={{
                                    strings: profile.roles,
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-textSoft max-w-lg text-lg leading-relaxed mb-10"
                    >
                        Backend-focused developer crafting robust architectures and intelligent AI integrations.
                        Based in <span className="text-textMain font-medium">{profile.location}</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#contact" className="group relative px-8 py-3.5 bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                            <span className="relative z-10 text-white font-bold tracking-wide">Contact Me</span>
                        </a>

                        <a href="#projects" className="px-8 py-3.5 rounded-full border border-gray-700 hover:border-primary/50 text-textSoft hover:text-primary transition-all duration-300 bg-black/5 backdrop-blur-sm">
                            View Work
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <a href={profile.social.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
                            <Github size={20} />
                        </a>
                        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                        <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                            <Instagram size={20} />
                        </a>
                        <a href={profile.social.email} className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
                            <Mail size={20} />
                        </a>
                    </motion.div>
                </div>

                {/* 3D Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end relative pb-10 md:pb-0"
                >
                    <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse-slow group-hover:blur-[100px] transition-all duration-700" />

                        {/* Image */}
                        <motion.img
                            src={profileImg}
                            alt="Profile Avatar"
                            className="w-full h-full object-contain relative z-10 mix-blend-lighten hover:mix-blend-normal transition-all duration-500"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-textSoft to-transparent" />
                <span className="text-[10px] text-textSoft uppercase tracking-[0.2em]">Scroll</span>
            </motion.div>
        </section>
    )
}
