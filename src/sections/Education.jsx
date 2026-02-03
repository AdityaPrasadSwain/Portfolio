import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'
import { GraduationCap, Calendar, Star } from 'lucide-react'

const EducationCard = ({ edu, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`relative flex items-center justify-between md:justify-normal gap-8 mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
        {/* Center Line Dot */}
        <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full shadow-lg z-10 -translate-x-1/2 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>

        {/* Content Card */}
        <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
            <div className="bg-white p-8 rounded-3xl relative group overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decoration Icon */}
                <div className={`absolute top-0 opacity-[0.03] text-primary ${index % 2 === 0 ? 'left-0 -translate-x-1/4 -translate-y-1/4' : 'right-0 translate-x-1/4 -translate-y-1/4'}`}>
                    <GraduationCap size={150} />
                </div>

                <div className="relative z-10">
                    <div className={`flex items-center gap-2 mb-3 text-sm font-semibold tracking-wide text-primary ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar size={14} />
                        <span>{edu.year}</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-gray-500 font-medium mb-4 text-lg">{edu.institution}</p>

                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 text-sm text-gray-600 ${index % 2 === 0 ? 'md:mr-0' : ''}`}>
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        Score: <span className="text-gray-900 font-bold">{edu.score}</span>
                    </div>
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
        <section id="education" ref={containerRef} className="py-32 relative bg-slate-50">
            {/* Background Glows */}


            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20 md:mb-32 text-center"
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-bold mb-3">Milestones</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                        Academic <span className="text-gradient">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-6xl mx-auto px-4">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-primary box-shadow-[0_0_15px_#38bdf8]"
                        />
                    </div>

                    <div className="space-y-4">
                        {profile.education.map((edu, index) => (
                            <EducationCard key={index} edu={edu} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
