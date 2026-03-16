import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

// Data Streams matching the user prompt
const DataStreams = () => {
  const groupRef = useRef();
  
  // Create multiple thin vertical lines streaming down
  const streams = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 20,
      z: (Math.random() - 0.5) * 10 - 5,
      speed: Math.random() * 0.05 + 0.02,
      length: Math.random() * 4 + 2,
    }));
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y -= streams[i].speed;
        if (child.position.y < -10) child.position.y = 10;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {streams.map((stream, i) => (
        <Line 
          key={i}
          points={[[stream.x, stream.y, stream.z], [stream.x, stream.y + stream.length, stream.z]]}
          color="#00f0ff"
          lineWidth={1.5}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
};

// Neural Network Nodes connecting to each other
const NeuralNetwork = () => {
  const groupRef = useRef();
  const particleCount = 60;
  
  const [positions, lines] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const pts = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      pts.push(new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]));
    }
    
    // Connect close nodes
    const links = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dist = pts[i].distanceTo(pts[j]);
        if (dist < 3) {
          links.push([pts[i], pts[j]]);
        }
      }
    }
    return [pos, links];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#b026ff" transparent opacity={0.8} />
      </points>
      {lines.map((pair, idx) => (
        <Line 
          key={idx}
          points={pair}
          color="#00f0ff"
          transparent
          opacity={0.15}
          lineWidth={0.5}
        />
      ))}
    </group>
  );
};

const RotatingBrain = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial 
        color="#0a0a0f" 
        emissive="#b026ff" 
        emissiveIntensity={0.2}
        wireframe={true} 
        transparent 
        opacity={0.5} 
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative cursor-auto">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#b026ff" />
        
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <DataStreams />
        <NeuralNetwork />
        <RotatingBrain />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      {/* Intense Core Glow for realism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] filter blur-[120px] opacity-30 rounded-full pointer-events-none mix-blend-screen"></div>
    </div>
  );
};

export default Scene;
