'use client';

import { Particles } from '@/_experience/Particles';

export function Experience() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={3} position={[1, 1, 3]} />

      <Particles />
    </>
  );
}
