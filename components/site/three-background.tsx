"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 900;
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      values[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      values[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      values[i * 3 + 2] = radius * Math.cos(phi);
    }

    return values;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y = clock.elapsedTime * 0.035 + mouse.x * 0.05;
    ref.current.rotation.x = mouse.y * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#55f0ff"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
      />
    </points>
  );
}

function RotatingCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x = clock.elapsedTime * 0.18 + mouse.y * 0.2;
    ref.current.rotation.y = clock.elapsedTime * 0.26 + mouse.x * 0.18;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.8}>
      <mesh ref={ref} position={[2.2, 0.8, -1.7]}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#55f0ff"
          emissive="#0fbfd2"
          emissiveIntensity={0.4}
          roughness={0.22}
          metalness={0.78}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 56 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#05060d"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[3, 3, 4]} intensity={18} color="#55f0ff" />
        <pointLight position={[-4, -2, 3]} intensity={10} color="#ff4fd8" />
        <ParticleCloud />
        <RotatingCore />
      </Canvas>
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 grid-mask opacity-55" />
    </div>
  );
}
