'use client';

import { Perf } from 'r3f-perf';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    /** Toggles the visibility of the Perf component.
     * (This file should only be run in the development build). */
    togglePerf: () => void;
  }
}

export function Performance() {
  const [showPerf, setShowPerf] = useState(true);

  useEffect(() => {
    window.togglePerf = () => {
      setShowPerf((prev) => !prev);
    };
  }, []);

  if (!showPerf) return null;

  return <Perf position="top-left" logsPerSecond={3} />;
}
