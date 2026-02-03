import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'
import { Server, Globe, Cpu, ArrowUpRight, Code, Sparkles } from 'lucide-react'

export default function About() {
    const containerRef = useRef()
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    const stats = [
        { label: "Years Experience", value: "2+" },
        { label: "Projects Built", value: "15+" },
        { label: "Coffees Brewed", value: "∞" },
    ]

    return (
        <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-slate-50 border-t border-gray-200">
            {/* Background Decor */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-[80px] opacity-60 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Developer Card Visual */}
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl blur-[20px] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                        <motion.div
                            style={{ y }}
                            className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-blue-50 rounded-2xl text-primary">
                                    <Cpu size={32} />
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Status</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full text-green-600 text-sm font-bold mt-1 border border-green-100">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Open to Work
                                    </div>
                                </div>
                            </div>

                            {/* Card Content (Abstract representation of a developer) */}
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                                    <p className="text-primary font-medium">{profile.roles[0]}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {profile.roles.slice(1).map((role, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-500 text-xs rounded-lg font-medium">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Code Elements */}
                            <div className="absolute -bottom-10 -right-10 opacity-[0.05] text-primary transform rotate-12 pointer-events-none">
                                <Code size={200} />
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                        >
                            <div className="p-2 bg-orange-50 rounded-full text-orange-500">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Focus</p>
                                <p className="text-gray-900 font-bold text-sm">AI Integration</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest text-sm uppercase block mb-4"
                        >
                            Who I Am
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Engineer. Architect. <br />
                            <span className="text-gradient">Problem Solver.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-lg leading-relaxed mb-8 text-justify"
                        >
                            {profile.objective}
                        </motion.p>

                        {/* Detailed Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl text-primary mt-1 group-hover:scale-110 transition-transform">
                                    <Server size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Backend Systems</h4>
                                    <p className="text-sm text-gray-500 leading-snug mt-1">Scalable architectures using Java, Spring Boot & Microservices.</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                                <div className="p-3 bg-indigo-50 rounded-xl text-secondary mt-1 group-hover:scale-110 transition-transform">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Modern Frontend</h4>
                                    <p className="text-sm text-gray-500 leading-snug mt-1">Responsive experiences with React, Tailwind & Framer Motion.</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-12 border-t border-gray-200 pt-8">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-4xl font-bold text-gray-900">{stat.value}</h4>
                                    <p className="text-sm text-gray-500 font-medium mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
