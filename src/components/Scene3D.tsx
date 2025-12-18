import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const Moon = ({ position }: { position: [number, number, number] }) => {
  const moonRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Moon glow */}
      <Sphere args={[1.15, 32, 32]}>
        <meshBasicMaterial color="#c4b5fd" transparent opacity={0.15} />
      </Sphere>
      
      {/* Main moon */}
      <group ref={moonRef}>
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#e4e4e7"
            roughness={0.9}
            metalness={0.1}
            emissive="#a1a1aa"
            emissiveIntensity={0.05}
          />
        </Sphere>
        
        {/* Crater details */}
        {[...Array(8)].map((_, i) => {
          const theta = (i / 8) * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          const x = Math.sin(phi) * Math.cos(theta) * 0.95;
          const y = Math.sin(phi) * Math.sin(theta) * 0.95;
          const z = Math.cos(phi) * 0.95;
          const scale = 0.08 + Math.random() * 0.12;
          return (
            <Sphere key={i} args={[scale, 16, 16]} position={[x, y, z]}>
              <meshStandardMaterial color="#a1a1aa" roughness={1} />
            </Sphere>
          );
        })}
      </group>

      {/* Orbiting ring */}
      <group ref={orbitRef}>
        <Torus args={[1.6, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
        </Torus>
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <Sphere 
              key={i} 
              args={[0.04, 8, 8]} 
              position={[
                Math.cos(angle) * 1.6,
                Math.sin(angle) * 1.6 * Math.cos(Math.PI / 3),
                Math.sin(angle) * 1.6 * Math.sin(Math.PI / 3)
              ]}
            >
              <meshBasicMaterial color="#22d3ee" />
            </Sphere>
          );
        })}
      </group>
    </group>
  );
};

const FloatingShape = ({ 
  position, 
  color, 
  shape, 
  speed = 1,
  distort = 0.3 
}: { 
  position: [number, number, number]; 
  color: string; 
  shape: "sphere" | "torus" | "icosahedron";
  speed?: number;
  distort?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case "sphere":
        return (
          <Sphere args={[1, 64, 64]} ref={meshRef}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        );
      case "torus":
        return (
          <Torus args={[1, 0.4, 32, 64]} ref={meshRef}>
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.9}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Torus>
        );
      case "icosahedron":
        return (
          <Icosahedron args={[1, 1]} ref={meshRef}>
            <meshStandardMaterial
              color={color}
              roughness={0.1}
              metalness={0.9}
              wireframe
              emissive={color}
              emissiveIntensity={0.3}
            />
          </Icosahedron>
        );
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={0.8}>
        {renderShape()}
      </group>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#22d3ee"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#a855f7" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#22d3ee" />
        
        {/* Starfield background */}
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <ParticleField />
        
        {/* Moon with universe feel */}
        <Moon position={[5, 2.5, -5]} />
        
        <FloatingShape position={[-4, 2, -2]} color="#a855f7" shape="sphere" speed={0.8} distort={0.4} />
        <FloatingShape position={[4, -1, -3]} color="#22d3ee" shape="torus" speed={1.2} />
        <FloatingShape position={[-3, -2, -1]} color="#f59e0b" shape="icosahedron" speed={0.6} />
        <FloatingShape position={[-5, 2.5, -4]} color="#ec4899" shape="sphere" speed={1} distort={0.3} />
        <FloatingShape position={[0, -3, -4]} color="#22d3ee" shape="torus" speed={0.9} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
