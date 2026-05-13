"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

type Vec3 = [number, number, number];

type ModelItem = {
  url: string;
  position?: Vec3;
  rotation?: Vec3;
  scale?: number;
  floatSpeed?: number;
};

type ModelSpotlightProps = {
  badge: string;
  title: string;
  description: string;
  notes: string[];
  items: ModelItem[];
  align?: "left" | "right";
};

function SpotlightAsset({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  floatSpeed = 1,
}: ModelItem) {
  const { scene } = useGLTF(url);

  return (
    <Float speed={floatSpeed} rotationIntensity={0.1} floatIntensity={0.14}>
      <group position={position} rotation={rotation} scale={scale}>
        <Center>
          <primitive object={scene.clone()} />
        </Center>
      </group>
    </Float>
  );
}

function SpotlightScene({ items }: { items: ModelItem[] }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 8], fov: 32 }} className="h-[420px] w-full">
      <color attach="background" args={["#070707"]} />
      <fog attach="fog" args={["#070707", 8, 18]} />
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 5, 4]} intensity={2.2} color="#fff1e8" />
      <spotLight
        position={[-5, 6, 5]}
        angle={0.52}
        penumbra={0.9}
        intensity={80}
        distance={24}
        color="#F59E0B"
      />
      <Environment preset="studio" />

      <Bounds fit clip observe margin={1.15}>
        <group position={[0, -0.25, 0]}>
          {items.map((item) => (
            <SpotlightAsset key={item.url} {...item} />
          ))}
        </group>
      </Bounds>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.45, 0]}>
        <circleGeometry args={[5.8, 64]} />
        <meshStandardMaterial color="#121010" roughness={0.92} metalness={0.04} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.42, 0]}>
        <ringGeometry args={[2.4, 4.6, 64]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.18} />
      </mesh>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.45}
        minAzimuthAngle={-0.45}
        maxAzimuthAngle={0.45}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 2.08}
      />
    </Canvas>
  );
}

function SceneFallback() {
  return (
    <div className="h-[420px] w-full border border-outline-variant/20 bg-[#0d0d0d] flex items-center justify-center text-label-sm uppercase tracking-[0.3em] text-on-surface-variant/60">
      Loading Model
    </div>
  );
}

export default function ModelSpotlight({
  badge,
  title,
  description,
  notes,
  items,
  align = "right",
}: ModelSpotlightProps) {
  const layoutClass =
    align === "left"
      ? "lg:grid-cols-[minmax(520px,1fr)_0.95fr]"
      : "lg:grid-cols-[0.95fr_minmax(520px,1fr)]";

  const textOrder = align === "left" ? "lg:order-2" : "";
  const sceneOrder = align === "left" ? "lg:order-1" : "";

  return (
    <section className="px-margin py-xl">
      <div className={`max-w-7xl mx-auto grid gap-xl items-center ${layoutClass}`}>
        <div className={`min-w-0 max-w-2xl ${textOrder}`}>
          <span className="inline-block px-md py-xs border border-primary/50 text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            {badge}
          </span>
          <h2 className="text-headline-lg mb-md">{title}</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mb-lg">
            {description}
          </p>
          <div className="grid gap-md sm:grid-cols-2">
            {notes.map((note) => (
              <div
                key={note}
                className="border border-outline-variant/20 bg-black/20 p-md text-body-md text-on-surface-variant"
              >
                {note}
              </div>
            ))}
          </div>
        </div>

        <div className={`min-w-0 overflow-hidden border border-outline-variant/20 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.45)] ${sceneOrder}`}>
          <Suspense fallback={<SceneFallback />}>
            <SpotlightScene items={items} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

[
  "/glb/concert-stage.glb",
  "/glb/video-camera.glb",
  "/glb/camera.glb",
  "/glb/guitar.glb",
  "/glb/violin.glb",
  "/glb/microphone.glb",
].forEach((url) => useGLTF.preload(url));
