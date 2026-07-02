import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const certificates = [
  {
    title: 'Java Full Stack',
    file: '/certificates/Java_Full_Stack_Certificate.pdf',
  },
  {
    title: 'PostgreSQL',
    file: '/certificates/PostgreSQL_Certificate.pdf',
  },
  {
    title: 'Maven',
    file: '/certificates/Udemy_Maven.pdf',
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-black/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Certificates
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my continuous learning and professional achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto relative px-12 md:px-20"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="py-8 h-[400px] sm:h-[500px] md:h-[650px] w-full"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="w-[85vw] max-w-[850px] h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-4">
                <div className="w-full h-[85%] rounded-xl overflow-hidden pointer-events-none bg-transparent flex items-center justify-center">
                  <Document 
                    file={cert.file} 
                    className="flex justify-center items-center w-full h-full"
                    loading={<div className="text-gray-500 animate-pulse">Loading Certificate...</div>}
                  >
                    <Page 
                      pageNumber={1} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false} 
                      className="flex justify-center items-center w-full h-full overflow-hidden"
                      canvasClassName="w-full h-full object-contain"
                    />
                  </Document>
                </div>
                <div className="h-[15%] w-full flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">{cert.title}</h3>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-controler mt-8 flex justify-center items-center gap-4 relative z-50">
              <div className="swiper-pagination !static !w-auto" />
            </div>
          </Swiper>

          {/* Eye-catching Custom Arrows Placed Outside the Certificates */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.6)] text-white hover:scale-110 transition-transform duration-300 border-2 border-white/20 focus:outline-none">
            <ChevronLeft size={32} />
          </button>
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white hover:scale-110 transition-transform duration-300 border-2 border-white/20 focus:outline-none">
            <ChevronRight size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
