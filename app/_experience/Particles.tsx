'use client';

import { Sparkles } from '@react-three/drei';

import { useExperienceThemeColors } from '@/_experience/useExperienceThemeColor';

const NUM_PARTICLES = 100;

export function Particles() {
  const { foreground } = useExperienceThemeColors();

  //TODO: Make this more random
  return (
    <Sparkles
      scale={5}
      noise={2}
      count={NUM_PARTICLES}
      size={2}
      color={foreground}
    />
  );
}
