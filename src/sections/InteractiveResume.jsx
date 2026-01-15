import { motion } from 'framer-motion'
import ResumeBook from '../components/ResumeBook'

export default function InteractiveResume() {
    return (
        <section id="resume" className="py-32 relative overflow-hidden">
            {/* Background gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-secondary text-sm tracking-widest uppercase font-semibold">Interactive Dossier</span>
                    <h2 className="text-4xl font-bold mt-2 text-textMain mb-4">The Resume Book</h2>
                    <p className="text-textSoft flex items-center justify-center gap-2">
                        <span className="animate-bounce">👉</span>
                        Drag pages to flip or click corners
                        <span className="animate-bounce">👈</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <ResumeBook />
                </motion.div>
            </div>
        </section>
    )
}
