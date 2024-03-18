'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

import { useExperienceThemeColors } from '@/_experience/useExperienceThemeColor';

export function Experience() {
  const cube = useRef<Mesh>(null!);
  const { foreground } = useExperienceThemeColors();

  useFrame((_, delta) => {
    cube.current.rotation.y += delta;
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={3} position={[1, 1, 3]} />

      <mesh ref={cube}>
        <boxGeometry />
        <meshStandardMaterial color={foreground} />
      </mesh>
    </>
  );
}
