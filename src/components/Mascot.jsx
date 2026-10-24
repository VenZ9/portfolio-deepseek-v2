import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';

export default function Mascot() {
  const meshRef  = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.2;
      groupRef.current.rotation.y = Math.sin(t * 0.8) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Body */}
      <mesh ref={meshRef} castShadow>
        <Sphere args={[0.8, 64, 64]}>
          <MeshDistortMaterial
            color="#a78bfa"
            roughness={0.2}
            metalness={0.5}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </mesh>

      {/* Eyes */}
      <mesh position={[0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
      </mesh>

      {/* Pupils */}
      <mesh position={[0.3, 0.2, 0.9]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#0b0d17" />
      </mesh>
      <mesh position={[-0.3, 0.2, 0.9]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#0b0d17" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, -0.1, 0.9]}>
        <torusGeometry args={[0.2, 0.04, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={1} />
      </mesh>

      {/* Ears / decorations */}
      <mesh position={[0.6, 0.6, 0.2]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-0.6, 0.6, 0.2]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={0.8} />
      </mesh>

      {/* Floating rings */}
      <Torus args={[1.2, 0.05, 16, 64]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={2} transparent opacity={0.6} />
      </Torus>
      <Torus args={[1.4, 0.03, 16, 64]} rotation={[Math.PI / 2, 0.5, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={2} transparent opacity={0.4} />
      </Torus>
    </group>
  );
}
