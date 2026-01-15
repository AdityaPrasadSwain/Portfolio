import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative, Mousewheel } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const chapters = [
    {
        id: 1,
        title: "The Beginning",
        text: "It wasn't just code. It was the logic. The idea that pure thought could build structures in the ether. I wrote my first Java class and felt the click—the moment the abstract became real.",
        year: "2018",
        bg: "from-black via-slate-900 to-black"
    },
    {
        id: 2,
        title: "Curiosity & Struggle",
        text: "The console stared back, red with errors. NullPointers were my teachers. Infinite loops were my lessons. I learned that resilience is the syntax of success.",
        year: "2019",
        bg: "from-black via-indigo-950 to-black"
    },
    {
        id: 3,
        title: "First Real Systems",
        text: "Architecture. Patterns. Data flow. I moved from scripts to systems. I realized that good backend code is invisible—it just works, silently powering the world.",
        year: "2020",
        bg: "from-black via-blue-950 to-black"
    },
    {
        id: 4,
        title: "Falling in Love with Backend",
        text: "Spring Boot opened the door. APIs became my language. Creating scalable, secure endpoints wasn't a task; it was a craft. I found beauty in performance.",
        year: "2022",
        bg: "from-black via-violet-950 to-black"
    },
    {
        id: 5,
        title: "Building Products",
        text: "Real users. Real loads. Real stakes. Building e-commerce platforms and management tools taught me the weight of reliability. Code is trust.",
        year: "2024",
        bg: "from-black via-fuchsia-950 to-black"
    },
    {
        id: 6,
        title: "Journey Forward",
        text: "The learning never stops. New technologies, deeper problems, bigger systems. I am ready for the next challenge. The best code is yet to be written.",
        year: "Future",
        bg: "from-black via-cyan-950 to-black"
    }
];

const Story = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="story" className="py-32 relative overflow-hidden">

            {/* Dynamic Background Atmosphere */}
            <div className={`absolute inset-0 bg-gradient-radial ${chapters[activeIndex].bg} opacity-30 transition-all duration-1000 ease-in-out blur-3xl scale-150`} />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-white">My Journey</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 h-[550px] md:h-[650px] relative z-20">
                <Swiper
                    modules={[Navigation, Pagination, EffectCreative, Mousewheel]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                            opacity: 0,
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    speed={1000}
                    mousewheel={{ forceToAxis: true }}
                    pagination={{
                        clickable: true, renderBullet: function (index, className) {
                            return '<span class="' + className + ' transition-all duration-300"></span>';
                        }
                    }}
                    navigation={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="h-full rounded-3xl border border-white/5 bg-white/5 backdrop-blur-2xl shadow-2xl"
                >
                    {chapters.map((chapter) => (
                        <SwiperSlide key={chapter.id} className="relative flex items-center justify-center p-8 md:p-20">
                            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto w-full">

                                {/* Visual Year */}
                                <div className="flex-shrink-0 text-center md:text-left relative">
                                    <motion.div
                                        key={activeIndex === chapter.id - 1 ? 'active' : 'inactive'}
                                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="text-[120px] md:text-[200px] font-black text-white/5 leading-none select-none absolute -top-12 -left-12 md:-left-20 z-0"
                                    >
                                        0{chapter.id}
                                    </motion.div>
                                    <div className="relative z-10">
                                        <h3 className="text-accent text-lg md:text-2xl font-mono tracking-[0.2em] mb-2 uppercase">Chapter</h3>
                                        <div className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                                            {chapter.year}
                                        </div>
                                    </div>
                                </div>

                                {/* Narrative Content */}
                                <div className="flex-1 relative z-10 max-w-xl">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60"
                                    >
                                        {chapter.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="text-lg md:text-xl text-muted leading-relaxed font-light"
                                    >
                                        {chapter.text}
                                    </motion.p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.2) !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #38bdf8 !important;
        }
      `}</style>
        </section>
    );
};

export default Story;
