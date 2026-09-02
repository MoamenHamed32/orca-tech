"use client";

import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  CanvasTexture,
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  NoColorSpace,
  NoToneMapping,
  Quaternion,
  Vector3,
} from "three";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeOutBack(t: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function useLogoTexture() {
  const [texture, setTexture] = useState<CanvasTexture | null>(null);

  useEffect(() => {
    const image = new Image();
    let disposed = false;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const scale = Math.min(512 / image.width, 512 / image.height) * 0.88;
      const width = image.width * scale;
      const height = image.height * scale;
      ctx.drawImage(
        image,
        (512 - width) / 2,
        (512 - height) / 2,
        width,
        height,
      );
      const next = new CanvasTexture(canvas);
      next.colorSpace = NoColorSpace;
      next.anisotropy = 8;
      next.needsUpdate = true;
      if (!disposed) setTexture(next);
    };

    image.src = "/assets/logo.svg";
    return () => {
      disposed = true;
      setTexture((current) => {
        current?.dispose();
        return null;
      });
    };
  }, []);

  return texture;
}

function CountryLogo({
  radius,
  lat,
  lon,
  scale,
  discColor,
  logo,
}: {
  radius: number;
  lat: number;
  lon: number;
  scale: number;
  discColor: string;
  logo: CanvasTexture;
}) {
  const { position, quaternion } = useMemo(() => {
    const position = latLonToVec3(lat, lon, radius * 1.012);
    const quaternion = new Quaternion().setFromUnitVectors(
      new Vector3(0, 0, 1),
      position.clone().normalize(),
    );
    return { position, quaternion };
  }, [lat, lon, radius]);

  return (
    <group position={position} quaternion={quaternion}>
      <mesh renderOrder={1}>
        <circleGeometry args={[0.09 * scale, 48]} />
        <meshBasicMaterial
          color={discColor}
          transparent
          opacity={0.78}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, 0, 0.003]} renderOrder={2}>
        <planeGeometry args={[0.14 * scale, 0.16 * scale]} />
        <meshBasicMaterial
          map={logo}
          transparent
          depthWrite={false}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

const MARKERS = [
  { lat: 26.8, lon: 30.6, scale: 1.28, discColor: "#c48412" },
  { lat: 24.45, lon: 54.38, scale: 1, discColor: "#0bb8d4" },
  { lat: 39.5, lon: -98, scale: 1, discColor: "#0bb8d4" },
  { lat: 52.4, lon: -1.2, scale: 1, discColor: "#0bb8d4" },
  { lat: 24.7, lon: 46.7, scale: 1, discColor: "#0bb8d4" },
  { lat: -14.2, lon: -51.9, scale: 1, discColor: "#0bb8d4" },
  { lat: 31.8, lon: -7.1, scale: 1, discColor: "#0bb8d4" },
] as const;

function Globe() {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);
  const intro = useRef(0);
  const lastScroll = useRef(0);
  const scrollSpin = useRef(0);
  const logo = useLogoTexture();
  const [tech] = useTexture(["/assets/textures/earth-tech.jpg?v=8"]);

  tech.colorSpace = NoColorSpace;
  tech.anisotropy = 8;

  const baseTint = useMemo(() => new Color(1.18, 1.24, 1.36), []);
  const startY = useMemo(() => {
    const egypt = latLonToVec3(26.8, 30.6, 1);
    return -Math.atan2(egypt.x, egypt.z);
  }, []);

  useEffect(() => {
    lastScroll.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      scrollSpin.current += (y - lastScroll.current) * 0.01;
      scrollSpin.current = Math.max(-1.4, Math.min(1.4, scrollSpin.current));
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;

    intro.current = Math.min(1, intro.current + delta / 1.25);
    const t = easeOutCubic(intro.current);
    const pop = easeOutBack(Math.min(1, intro.current / 0.82));

    group.current.scale.setScalar(0.08 + pop * 0.92);
    group.current.position.y = (1 - t) * -0.62;

    state.camera.position.z = 4.85 + (1 - t) * 2.55;
    state.camera.position.y = 0.08 + (1 - t) * 0.42;
    state.camera.lookAt(0, 0, 0);

    const { x, y } = state.pointer;
    const introSpin = (1 - t) ** 2 * 4.2;
    group.current.rotation.y +=
      delta * (0.055 + introSpin + scrollSpin.current) + x * delta * 0.35;
    scrollSpin.current *= Math.exp(-delta * 4.2);
    group.current.rotation.x += (y * 0.28 - group.current.rotation.x) * 0.06;

    if (ring.current) {
      ring.current.scale.setScalar(1.08 + t * 1.55);
      const material = ring.current.material as MeshBasicMaterial;
      material.opacity = Math.max(0, 0.42 * (1 - t));
      ring.current.visible = intro.current < 1;
      ring.current.rotation.z += delta * 1.4;
    }
  });

  return (
    <>
      <group ref={group} rotation={[0, startY, 0]} scale={0.08}>
        <mesh>
          <sphereGeometry args={[1.22, 96, 96]} />
          <meshBasicMaterial map={tech} color={baseTint} toneMapped={false} />
        </mesh>
        {logo
          ? MARKERS.map((marker) => (
              <CountryLogo
                key={`${marker.lat}-${marker.lon}`}
                radius={1.22}
                lat={marker.lat}
                lon={marker.lon}
                scale={marker.scale}
                discColor={marker.discColor}
                logo={logo}
              />
            ))
          : null}
      </group>
      <mesh ref={ring} rotation={[Math.PI / 2.15, 0.2, 0]}>
        <ringGeometry args={[1.32, 1.38, 80]} />
        <meshBasicMaterial
          color="#5B8CFF"
          transparent
          opacity={0.42}
          depthWrite={false}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
}

export function Hero3D() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="grid h-full place-items-center">
        <div className="h-40 w-40 rounded-full border border-accent/50 bg-accent/20 shadow-[0_0_80px_rgb(47_111_255/0.45)]" />
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0.5, 7.4], fov: 38 }}
        dpr={[1, 1.75]}
        resize={{ scroll: false }}
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: NoToneMapping,
          premultipliedAlpha: false,
        }}
      >
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  );
}
