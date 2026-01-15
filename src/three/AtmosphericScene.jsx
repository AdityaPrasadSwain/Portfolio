import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Stars, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

const FloatingShape = ({ position, color, scale, speed }) => {
    return (
        <Float
            speed={speed}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            position={position}
        >
            <Icosahedron args={[1, 0]} scale={scale}>
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.8}
                    transmission={0.5} // Glass-like
                    thickness={2}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    ior={1.5}
                />
            </Icosahedron>
        </Float>
    );
};

const Aurora = () => {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
            ref.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
        }
    });

    return (
        <mesh ref={ref} position={[0, -2, -5]} scale={[10, 5, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <meshBasicMaterial
                color="#0c4a6e"
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
};

const Shapes = () => {
    // Generate random positions for shapes
    const shapes = useMemo(() => {
        return new Array(25).fill().map(() => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ],
            scale: 0.2 + Math.random() * 0.4,
            speed: 0.5 + Math.random(),
            color: Math.random() > 0.5 ? '#00f6ff' : '#a855f7' // Ultra bright Cyan or Purple
        }));
    }, []);

    return (
        <group>
            {shapes.map((shape, i) => (
                <FloatingShape
                    key={i}
                    position={shape.position}
                    scale={shape.scale}
                    speed={shape.speed}
                    color={shape.color}
                />
            ))}
        </group>
    );
};

const CameraRig = () => {
    useFrame((state) => {
        // Slow mouse parallax
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.5, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.5, 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}


const AtmosphericScene = () => {
    return (
        <div className="absolute inset-0 z-0 bg-background transition-opacity duration-1000 ease-in-out">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
                dpr={[1, 1.5]} // Performance optimization
            >
                <color attach="background" args={['#020617']} />

                {/* Lighting - Darker & More Dramatic */}
                <ambientLight intensity={0.2} color="#020617" />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.5}
                    penumbra={1}
                    intensity={3}
                    color="#38bdf8"
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#818cf8" />

                <group position={[0, 0, -2]}>
                    <Aurora />
                    <Shapes />
                    <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
                </group>

                {/* Cinematic Post Processing */}
                <EffectComposer disableNormalPass>
                    {/* Stronger Bloom for Neon effect against dark background */}
                    <Bloom luminanceThreshold={0.2} mipmapBlur intensity={0.8} radius={0.5} />
                    <Noise opacity={0.05} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>

                <CameraRig />
            </Canvas>

            {/* Gradient Overlay for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default AtmosphericScene;
