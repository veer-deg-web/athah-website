"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
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
  equalColumns?: boolean;
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

  if (!floating) return content;

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
  const cls = canvasClassName ?? "h-[620px] w-full lg:h-[760px]";

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
      camera={{ position: [0, 0.6, 3.8], fov: 52 }}
      className={cls}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={2.2} />
      <hemisphereLight intensity={1.3} groundColor="#131313" color="#f6eee8" />
      <directionalLight position={[4, 6, 4]} intensity={3.2} color="#fff1e8" />
      <directionalLight position={[-4, 3, 2]} intensity={1.6} color="#c8d7ff" />
      <spotLight
        position={[-5, 6, 5]}
        angle={0.52}
        penumbra={0.9}
        intensity={120}
        distance={28}
        color="#D97706"
      />
      <Environment preset="studio" />
      {fitMode === "bounds" ? (
        <Bounds fit clip observe margin={0.65}>
          {content}
        </Bounds>
      ) : (
        content
      )}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}

function SceneFallback({ className }: { className: string }) {
  return (
    <div className={`${className} bg-transparent flex flex-col items-center justify-center gap-md text-label-sm uppercase tracking-[0.3em] text-on-surface-variant/60`}>
      <span className="material-symbols-outlined text-[28px] text-primary-container animate-pulse">view_in_ar</span>
      Loading Model...
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
  equalColumns = false,
  sceneClassName,
  canvasClassName,
}: ModelSpotlightProps) {
  // Use static class strings — no runtime interpolation so Tailwind generates them all
  const isLeft = align === "left";
  const canvasCls = canvasClassName ?? "h-[620px] w-full lg:h-[760px]";

  return (
    <section className="px-margin py-xl">
      {equalColumns ? (
        // Equal 50/50 columns
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-xl items-stretch lg:grid-cols-2">
          <div className={`min-w-0 flex flex-col justify-center ${isLeft ? "lg:order-2" : ""}`}>
            <TextContent badge={badge} title={title} description={description} notes={notes} />
          </div>
          <div className={`min-w-0 overflow-visible bg-transparent w-full ${isLeft ? "lg:order-1" : ""}`}>
            <Suspense fallback={<SceneFallback className={canvasCls} />}>
              <SpotlightScene items={items} fitMode={fitMode} autoRotate={autoRotate} canvasClassName={canvasCls} />
            </Suspense>
          </div>
        </div>
      ) : isLeft ? (
        // Asymmetric: scene left, text right
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-xl items-center lg:grid-cols-[minmax(320px,0.86fr)_minmax(560px,1.14fr)]">
          <div className={`min-w-0 overflow-visible bg-transparent ${sceneClassName ?? "w-full"} lg:order-1`}>
            <Suspense fallback={<SceneFallback className={canvasCls} />}>
              <SpotlightScene items={items} fitMode={fitMode} autoRotate={autoRotate} canvasClassName={canvasCls} />
            </Suspense>
          </div>
          <div className="min-w-0 max-w-2xl lg:max-w-none lg:order-2">
            <TextContent badge={badge} title={title} description={description} notes={notes} />
          </div>
        </div>
      ) : (
        // Asymmetric: text left, scene right
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-xl items-center lg:grid-cols-[minmax(560px,1.14fr)_minmax(320px,0.86fr)]">
          <div className="min-w-0 max-w-2xl lg:max-w-none">
            <TextContent badge={badge} title={title} description={description} notes={notes} />
          </div>
          <div className={`min-w-0 overflow-visible bg-transparent ${sceneClassName ?? "w-full"}`}>
            <Suspense fallback={<SceneFallback className={canvasCls} />}>
              <SpotlightScene items={items} fitMode={fitMode} autoRotate={autoRotate} canvasClassName={canvasCls} />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
}

function TextContent({
  badge,
  title,
  description,
  notes,
}: {
  badge: string;
  title: string;
  description: string;
  notes: string[];
}) {
  return (
    <>
      <span className="inline-block px-md py-xs border border-primary/50 text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
        {badge}
      </span>
      <h2 className="text-headline-lg mb-md">{title}</h2>
      <p className="text-body-lg text-on-surface-variant max-w-xl lg:max-w-2xl mb-lg">{description}</p>
      <div className="grid gap-md sm:grid-cols-2">
        {notes.map((note) => (
          <div key={note} className="border border-outline-variant/20 bg-black/20 p-md text-body-md text-on-surface-variant">
            {note}
          </div>
        ))}
      </div>
    </>
  );
}

[
  "/glb/concert-stage.glb",
  "/glb/Speaker.glb",
  "/glb/Drum%20Set.glb",
  "/glb/video-camera.glb",
  "/glb/camera.glb",
  "/glb/guitar.glb",
  "/glb/violin.glb",
  "/glb/Microphone.glb",
  "/glb/boombox.glb",
].forEach((url) => useGLTF.preload(url));
