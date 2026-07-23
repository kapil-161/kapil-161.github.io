'use client';

import { Suspense, useMemo, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';

const RADIUS = 1.3;
const ACCENT = '#6c7fc4';
const ACCENT_HOVER = '#8b9dd4';

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Pin({ position, label }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={ACCENT_HOVER} />
      </mesh>
      <Html distanceFactor={9} occlude="blending" style={{ pointerEvents: 'none' }}>
        <span
          style={{
            fontSize: '9px',
            fontFamily: 'var(--font-heading, sans-serif)',
            fontWeight: 600,
            color: '#e2e3ed',
            background: 'rgba(18, 19, 29, 0.8)',
            padding: '1px 6px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            transform: 'translate(-50%, -22px)',
            display: 'inline-block',
          }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

function Arc({ start, end }) {
  const mid = useMemo(
    () => start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.35),
    [start, end]
  );
  return (
    <QuadraticBezierLine
      start={start}
      mid={mid}
      end={end}
      color={ACCENT_HOVER}
      lineWidth={1.6}
      transparent
      opacity={0.65}
    />
  );
}

function GlobeGroup({ locations }) {
  const points = useMemo(
    () => locations.map((loc) => ({ ...loc, vec: latLonToVector3(loc.lat, loc.lon, RADIUS) })),
    [locations]
  );

  return (
    <group rotation={[0, 0, 0.35]}>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.985, 48, 48]} />
        <meshStandardMaterial color="#181926" roughness={0.85} metalness={0.1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS, 32, 32]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.28} />
      </mesh>
      {points.map((p) => (
        <Pin key={p.name} position={p.vec.clone().multiplyScalar(1.02)} label={p.name} />
      ))}
      {points.slice(1).map((p, i) => (
        <Arc key={p.name} start={points[i].vec} end={p.vec} />
      ))}
    </group>
  );
}

export default function GlobeScene({ locations }) {
  const [enableRotate, setEnableRotate] = useState(false);

  useEffect(() => {
    setEnableRotate(window.matchMedia('(pointer: fine)').matches);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.3, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={1.1} color={ACCENT_HOVER} />
      <Suspense fallback={null}>
        <GlobeGroup locations={locations} />
        <Stars radius={40} depth={30} count={600} factor={1.6} saturation={0} fade speed={0.4} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={enableRotate}
        autoRotate
        autoRotateSpeed={0.7}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
