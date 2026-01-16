import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Github, Linkedin, Instagram, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6" id="home">

            {/* Background Elements - updated for centered look */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto flex flex-col items-center justify-center z-10 w-full max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 flex flex-col items-center"
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-textMain text-sm font-semibold tracking-widest uppercase shadow-lg shadow-primary/10">
                        Welcome, Visionary
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 text-center"
                >
                    <span className="text-textMain block mb-2">{profile.name.split(' ')[0]}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary custom-text-shadow pb-4">
                        {profile.name.split(' ').slice(1).join(' ')}
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-4xl text-textSoft font-light mb-10 flex items-center justify-center gap-3 text-center"
                >
                    <span className="text-primary font-semibold">I am a</span>
                    <span className="text-textMain font-bold">
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
                    className="text-textSoft max-w-2xl text-lg md:text-xl leading-relaxed mb-12 text-center mx-auto"
                >
                    Backend-focused developer crafting robust architectures and intelligent AI integrations.
                    Based in <span className="text-textMain font-medium">{profile.location}</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a href="#contact" className="group relative px-8 py-4 bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:-translate-y-1">
                        <span className="relative z-10 text-white font-bold tracking-wide text-lg">Contact Me</span>
                    </a>

                    <a href="#projects" className="px-8 py-4 rounded-full border border-white/10 hover:border-primary/50 text-textSoft hover:text-primary transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1">
                        <span className="font-medium text-lg">View Work</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="mt-16 flex items-center justify-center gap-6"
                >
                    {[
                        { icon: Github, link: profile.social.github, color: "hover:text-white" },
                        { icon: Linkedin, link: profile.social.linkedin, color: "hover:text-blue-400" },
                        { icon: Instagram, link: profile.social.instagram, color: "hover:text-pink-500" },
                        { icon: Mail, link: profile.social.email, color: "hover:text-primary" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`p-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${item.color}`}
                        >
                            <item.icon size={24} />
                        </a>
                    ))}
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce"
            >
                <span className="text-xs text-textSoft uppercase tracking-[0.3em]">Scroll</span>
                <ArrowDown className="text-primary w-5 h-5" />
            </motion.div>

        </section>
    )
}
