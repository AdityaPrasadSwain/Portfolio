import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Environment, Lightformer, Sparkles, TorusKnot, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

function GlassShape({ position, rotation, scale, color, geometry: Geometry, ...props }) {
    return (
        <Float floatIntensity={2} rotationIntensity={1.5} speed={1.2}>
            <Geometry position={position} rotation={rotation} scale={scale} {...props}>
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={2}
                    chromaticAberration={0.3}
                    anisotropy={0.3}
                    distortion={0.4}
                    distortionScale={0.5}
                    temporalDistortion={0.2}
                    color={color}
                    resolution={1024}
                    roughness={0.15}
                    toneMapped={true}
                />
            </Geometry>
        </Float>
    )
}

export default function Background3D() {
    return (
        <group>
            <ambientLight intensity={1} />

            {/* High-end Studio Lighting for Glass Reflections */}
            <Environment resolution={512}>
                <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
                <Lightformer form="ring" intensity={2} rotation-y={Math.PI / 2} position={[-10, 2, -5]} scale={[10, 10, 1]} />
            </Environment>

            {/* Floating Glass Geometries */}
            <GlassShape
                geometry={TorusKnot}
                args={[1, 0.3, 128, 32]}
                position={[-3, 1, -5]}
                rotation={[0.5, 0.5, 0]}
                scale={1.2}
                color="#0ea5e9" // Sky Blue
            />

            <GlassShape
                geometry={Octahedron}
                args={[1, 0]} // Detail 0 for sharp edges
                position={[4, -2, -6]}
                rotation={[0, 0, 0.5]}
                scale={2}
                color="#6366f1" // Indigo
            />

            <GlassShape
                geometry={TorusKnot}
                args={[0.8, 0.2, 100, 16]}
                position={[5, 3, -8]}
                rotation={[-0.5, 0, 0]}
                scale={0.8}
                color="#818cf8" // Light Indigo
            />

            <GlassShape
                geometry={Octahedron}
                position={[-5, -3, -7]}
                rotation={[0.5, 0, 0]}
                scale={1.5}
                color="#cbd5e1" // Slate
            />

            {/* Subtle Particles for Depth */}
            <Sparkles
                count={150}
                scale={15}
                size={3}
                speed={0.4}
                opacity={0.5}
                color="#0ea5e9"
            />
        </group>
    )
}
