import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.distort = 0.5 + Math.sin(t) * 0.2;
        ref.current.color.setHSL((t * 0.1) % 1, 0.5, 0.5); // Subtle color shift
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} scale={2.2}>
                <MeshDistortMaterial
                    ref={ref}
                    color="#38bdf8"
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.9}
                    roughness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </Sphere>
        </Float>
    );
};

const SceneBreak = () => {
    return (
        <section className="h-[70vh] w-full bg-background relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={2} color="#818cf8" />
                    <directionalLight position={[-10, -10, -5]} intensity={2} color="#38bdf8" />
                    <AnimatedSphere />
                </Canvas>
            </div>

            <div className="relative z-10 text-center px-6 mix-blend-overlay">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white"
                >
                    Code Is Art.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="text-xl md:text-3xl font-light text-white/80 tracking-widest uppercase"
                >
                    Functionality Is Beauty.
                </motion.p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
        </section>
    );
};

export default SceneBreak;
