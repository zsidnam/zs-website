'use client';

import { Canvas } from '@react-three/fiber';

import { useThemeStore } from '@/app/store/ThemeStoreContext';

export function Scene() {
  const theme = useThemeStore((state) => state.theme);
  const color = theme === 'light' ? 'red' : 'blue';

  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    </Canvas>
  );
}