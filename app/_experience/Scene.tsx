'use client';

import { Canvas } from '@react-three/fiber';

import { Experience } from '@/_experience/Experience';
import { Performance } from '@/_experience/Performance';

export function Scene() {
  return (
    <div id="canvas-container" className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <Experience />

        {process.env.NODE_ENV === 'development' && <Performance />}
      </Canvas>
    </div>
  );
}
