import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const letterVariants = {
        hidden: { y: -20, opacity: 0, rotateX: 90 },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hover: {
            y: -5,
            scale: 1.2,
            color: "#3b82f6", // Assuming this is close to a primary color, or we can use a CSS variable
            textShadow: "0px 0px 8px rgb(59, 130, 246)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const dotVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                delay: 0.5
            }
        },
        hover: {
            scale: 1.5,
            rotate: 360,
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <motion.a
            href="#"
            className="relative z-50 flex items-center gap-0.5 text-2xl font-bold tracking-tighter cursor-pointer no-underline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{ overflow: 'hidden' }} // Keep it contained
        >
            {['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                variants={dotVariants}
                className="text-primary inline-block"
            >
                .
            </motion.span>
        </motion.a>
    );
};

export default AnimatedLogo;
