import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCards } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

export default function Testimonials() {
    const testimonials = [
        {
            name: "Project Lead",
            role: "Zidio Private Limited",
            text: "Aditya demonstrated exceptional grasp of backend logic during his internship. His contribution to the Expense Management System showed maturity beyond his experience level."
        },
        {
            name: "Academic Mentor",
            role: "CUTM Faculty",
            text: "A focused student with a natural aptitude for problem-solving. His final year project stood out for its clean architecture and innovative use of technology."
        } // Added placeholders based on context
    ]

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm tracking-widest uppercase font-semibold">Endorsements</span>
                    <h2 className="text-4xl font-bold mt-2 text-white">What People Say</h2>
                </motion.div>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Autoplay]}
                    pagination={{ dynamicBullets: true }}
                    autoplay={{ delay: 5000 }}
                    className="max-w-xl mx-auto"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i} className="glass-card p-10 rounded-3xl min-h-[300px] flex flex-col justify-center bg-[#020617]">
                            <div className="mb-6 opacity-30 text-primary">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>
                            <p className="text-lg md:text-xl text-textMain italic mb-8 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-sm text-textSoft">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
