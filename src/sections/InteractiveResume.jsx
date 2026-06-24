import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function InteractiveResume() {
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScale(0.6);
            } else if (window.innerWidth < 1024) {
                setScale(0.8);
            } else {
                setScale(1.2);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="resume" className="py-32 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-secondary text-sm tracking-widest uppercase font-semibold">Professional Profile</span>
                    <h2 className="text-4xl font-medium mt-2 text-textMain mb-4">My Resume</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center max-w-5xl mx-auto"
                >
                    <div className="bg-white/5 border border-white/10 p-4 md:p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl w-full flex flex-col items-center overflow-x-auto no-scrollbar">
                        <Document
                            file="/resume/ATS_Aditya_Prasad_Swain_Resume.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            className="flex flex-col items-center gap-6"
                            loading={
                                <div className="text-primary animate-pulse py-20 font-mono">
                                    Loading Resume...
                                </div>
                            }
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <div key={`page_${index + 1}`} className="shadow-2xl overflow-hidden rounded-lg bg-white/90">
                                    <Page
                                        pageNumber={index + 1}
                                        scale={scale}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                    />
                                </div>
                            ))}
                        </Document>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
