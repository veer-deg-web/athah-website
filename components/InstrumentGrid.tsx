"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function NormalizedModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  // Compute bounding box and normalise to fit a ~1.4 unit cube
  useEffect(() => {
    if (!groupRef.current) return;
    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const targetSize = 1.4;
      groupRef.current.scale.setScalar(targetSize / maxDim);
      // Re-center after rescale
      box.setFromObject(groupRef.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      groupRef.current.position.sub(center);
    }
  }, [scene]);

  return (
    <Float speed={0.7} rotationIntensity={0.07} floatIntensity={0.1}>
      <group ref={groupRef}>
        <Center>
          <primitive object={scene.clone()} />
        </Center>
      </group>
    </Float>
  );
}

function SceneContent({ url }: { url: string }) {
  return (
    <>
      <ambientLight intensity={3.5} />
      <hemisphereLight intensity={2} groundColor="#555" color="#ffffff" />
      <directionalLight position={[4, 8, 4]} intensity={4} color="#ffffff" />
      <directionalLight position={[-4, 4, -3]} intensity={2.5} color="#ffe0c8" />
      <directionalLight position={[0, -3, 4]} intensity={1.5} color="#c8d7ff" />
      <spotLight position={[0, 5, 4]} angle={0.6} penumbra={0.8} intensity={120} distance={28} color="#D97706" />
      <Environment preset="warehouse" />
      <NormalizedModel url={url} />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.6}
      />
    </>
  );
}

const MODELS = [
  "/glb/guitar.glb",
  "/glb/Drum%20Set.glb",
  "/glb/boombox.glb",
  "/glb/Speaker.glb",
];

MODELS.forEach((url) => useGLTF.preload(url));

function ModelCard({ url, height }: { url: string; height: string }) {
  return (
    <div className={`${height} overflow-hidden`}>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px] text-primary-container/30 animate-pulse">
              view_in_ar
            </span>
          </div>
        }
      >
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 2.8], fov: 44 }}
          className="h-full w-full"
          gl={{ antialias: true, alpha: true }}
        >
          <SceneContent url={url} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default function InstrumentGrid({ height = "h-[160px] lg:h-[190px]" }: { height?: string }) {
  return (
    <div className="grid grid-cols-2 gap-sm">
      {MODELS.map((url) => (
        <ModelCard key={url} url={url} height={height} />
      ))}
    </div>
  );
}
