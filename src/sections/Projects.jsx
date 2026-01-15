import { useState } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules'
import { profile } from '../data/profile'
import ProjectDetails from '../components/ProjectDetails'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="py-32 relative overflow-visible">
            {/* Project Details Overlay */}
            <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-secondary text-sm tracking-widest uppercase font-semibold">Selected Works</span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-2 text-textMain">Featured <br /> Projects</h2>
                </motion.div>

                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={30}
                    freeMode={true}
                    mousewheel={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 2.5 }
                    }}
                    modules={[FreeMode, Pagination, Mousewheel]}
                    className="pb-20 !overflow-visible"
                >
                    {profile.projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="glass-card h-[450px] p-8 rounded-[2rem] flex flex-col justify-between group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden cursor-pointer"
                            >
                                {/* Background Glow */}
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="px-3 py-1 bg-black/5 rounded-full text-xs text-secondary border border-black/10">
                                            {project.category}
                                        </span>
                                        <span className="text-xs text-textSoft font-mono">0{index + 1}</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-textMain mb-4 leading-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-textSoft text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs text-textMain/50 uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {project.tech.slice(0, 4).map(t => (
                                            <span key={t} className="px-2 py-1 text-textMain bg-black/5 rounded border border-black/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-black/10 flex justify-between items-center">
                                        <span className="text-xs text-textSoft">Role: <span className="text-textMain">{project.role}</span></span>
                                        <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
