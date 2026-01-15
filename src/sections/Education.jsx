import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'

const EducationCard = ({ edu, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`relative flex items-center justify-between md:justify-normal gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
        {/* Center Line Dot */}
        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#38bdf8] z-10 -translate-x-1/2" />

        {/* Content Card */}
        <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
            <div className="glass-card p-6 rounded-2xl relative group overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="text-secondary font-mono text-sm tracking-wider">{edu.year}</span>
                <h3 className="text-xl font-bold text-textMain mt-2 mb-1">{edu.degree}</h3>
                <p className="text-primary/80 font-medium mb-2">{edu.institution}</p>
                <div className="inline-block px-3 py-1 bg-black/5 rounded-full border border-black/10 text-sm text-textSoft">
                    Score: <span className="text-textMain">{edu.score}</span>
                </div>
            </div>
        </div>

        {/* Empty space for opposite side */}
        <div className="hidden md:block w-[45%]" />
    </motion.div>
)

export default function Education() {
    const containerRef = useRef()
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <section id="education" ref={containerRef} className="py-32 relative">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400"
            >
                Academic Journey
            </motion.h2>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="w-full h-full bg-gradient-to-b from-primary via-secondary to-primary/50"
                    />
                </div>

                <div className="space-y-4">
                    {profile.education.map((edu, index) => (
                        <EducationCard key={index} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
