import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Blobs (Soft Pastels) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-[100px] animate-blob animation-delay-4000" />

            {/* Soft Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-gray-600 text-sm font-medium tracking-wide">Available for new projects</span>
                </motion.div>

                {/* Main Heading */}
                <div className="mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-textMain leading-tight mb-2"
                    >
                        Hi, I'm <span className="text-gradient">{profile.name.split(' ')[0]}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-2xl md:text-3xl lg:text-4xl text-textSoft font-light h-[60px]"
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Full Stack Developer",
                                    "UI/UX Enthusiast",
                                    "Problem Solver",
                                    "Tech Visionary"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </motion.div>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10"
                >
                    Transforming complex problems into elegant, minimalist digital solutions.
                    I build web applications that are as beautiful as they are functional.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                    >
                        View My Work <ArrowRight size={20} />
                    </a>

                    <a
                        href="/resume.pdf"
                        download="Aditya_Prasad_Resume.pdf"
                        className="px-8 py-4 bg-white text-textMain border border-gray-200 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                    >
                        Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 flex items-center justify-center gap-6"
                >
                    {[
                        { icon: Github, link: profile.social.github },
                        { icon: Linkedin, link: profile.social.linkedin },
                        { icon: Mail, link: `mailto:${profile.email}` }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-primary hover:border-primary/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
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
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
            >
                <span className="text-[10px] text-textSoft uppercase tracking-[0.3em] font-semibold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
            </motion.div>

        </section>
    )
}
