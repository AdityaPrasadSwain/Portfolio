import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Small delay before triggering completion to ensure 100% is seen
                    setTimeout(() => {
                        if (onComplete) onComplete();
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative mb-4">
                <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-tighter">
                    ADITYA.
                </span>
            </div>

            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <div className="mt-2 font-mono text-xs text-white/50">
                {Math.min(100, Math.floor(progress))}%
            </div>
        </motion.div>
    );
};

export default Loader;
