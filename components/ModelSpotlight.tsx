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
  floating?: boolean;
};

type ModelSpotlightProps = {
  badge: string;
  title: string;
  description: string;
  notes: string[];
  items: ModelItem[];
  align?: "left" | "right";
  fitMode?: "bounds" | "manual";
  autoRotate?: boolean;
  sceneClassName?: string;
  canvasClassName?: string;
};

function SpotlightAsset({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  floatSpeed = 1,
  floating = true,
}: ModelItem) {
  const { scene } = useGLTF(url);

  const content = (
    <group position={position} rotation={rotation} scale={scale}>
      <Center>
        <primitive object={scene.clone()} />
      </Center>
    </group>
  );

  if (!floating) {
    return content;
  }

  return (
    <Float speed={floatSpeed} rotationIntensity={0.1} floatIntensity={0.14}>
      {content}
    </Float>
  );
}

function SpotlightScene({
  items,
  fitMode = "bounds",
  autoRotate = true,
  canvasClassName,
}: {
  items: ModelItem[];
  fitMode?: "bounds" | "manual";
  autoRotate?: boolean;
  canvasClassName?: string;
}) {
  const content = (
    <group position={fitMode === "manual" ? [0, -0.9, 0] : [0, -0.1, 0]}>
      {items.map((item, index) => (
        <SpotlightAsset key={`${item.url}-${index}`} {...item} />
      ))}
    </group>
  );

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.15, 6.2], fov: 26 }}
      className={canvasClassName ?? "h-[520px] w-full lg:h-[620px]"}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.85} />
      <hemisphereLight intensity={1.1} groundColor="#131313" color="#f6eee8" />
      <directionalLight position={[4, 5, 4]} intensity={2.8} color="#fff1e8" />
      <directionalLight position={[-4, 3, 2]} intensity={1.4} color="#c8d7ff" />
      <spotLight
        position={[-5, 6, 5]}
        angle={0.52}
        penumbra={0.9}
        intensity={95}
        distance={24}
        color="#ff6128"
      />
      <Environment preset="studio" />

      {fitMode === "bounds" ? (
        <Bounds fit clip observe margin={1.15}>
          {content}
        </Bounds>
      ) : (
        content
      )}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={autoRotate}
        autoRotateSpeed={0.35}
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
    <div className="h-[520px] w-full bg-transparent flex items-center justify-center text-label-sm uppercase tracking-[0.3em] text-on-surface-variant/60 lg:h-[620px]">
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
  fitMode = "bounds",
  autoRotate = true,
  sceneClassName,
  canvasClassName,
}: ModelSpotlightProps) {
  const layoutClass =
    align === "left"
      ? "lg:grid-cols-[minmax(320px,0.86fr)_minmax(560px,1.14fr)]"
      : "lg:grid-cols-[minmax(560px,1.14fr)_minmax(320px,0.86fr)]";

  const textOrder = align === "left" ? "lg:order-2" : "";
  const sceneOrder = align === "left" ? "lg:order-1" : "";

  return (
    <section className="px-margin py-xl">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 gap-xl items-center ${layoutClass}`}>
        <div className={`min-w-0 max-w-2xl lg:max-w-none ${textOrder}`}>
          <span className="inline-block px-md py-xs border border-primary/50 text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            {badge}
          </span>
          <h2 className="text-headline-lg mb-md">{title}</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl lg:max-w-2xl mb-lg">
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

        <div className={`min-w-0 overflow-visible bg-transparent ${sceneClassName ?? "mx-auto w-full max-w-[44rem] lg:max-w-[48rem]"} ${sceneOrder}`}>
          <Suspense fallback={<SceneFallback />}>
            <SpotlightScene
              items={items}
              fitMode={fitMode}
              autoRotate={autoRotate}
              canvasClassName={canvasClassName}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

[
  "/glb/concert-stage.glb",
  "/glb/Speaker.glb",
  "/glb/drum-set.glb",
  "/glb/video-camera.glb",
  "/glb/camera.glb",
  "/glb/guitar.glb",
  "/glb/violin.glb",
  "/glb/Microphone.glb",
].forEach((url) => useGLTF.preload(url));
