import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

interface ParticleNetworkCanvasProps {
  className?: string;
}

export function ParticleNetworkCanvas({
  className = "pointer-events-none absolute inset-0 z-0 opacity-70",
}: ParticleNetworkCanvasProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) setReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 560,
      background: { color: "transparent" },
      particles: {
        number: {
          value: 70,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: ["#f43f5e", "#fb7185", "#e879f9"] },
        opacity: {
          value: { min: 0.3, max: 0.4 },
          animation: {
            enable: true,
            speed: 1.7,
            sync: false,
          },
        },
        size: {
          value: { min: 0.8, max: 2.6 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        links: { enable: false },
        move: {
          enable: true,
          speed: 0.3,
          direction: "top-right",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
      },
      // interactivity: {
      //   events: {
      //     onHover: { enable: false, mode: "grab" },
      //     onClick: { enable: false, mode: "push" },
      //     resize: { enable: true },
      //   },
      // },
      motion: {
        disable: false,
        reduce: { factor: 3, value: true },
      },
    }),
    [],
  );

  if (!ready) return null;

  return <Particles id="hero-particles" className={className} options={options} />;
}

export default ParticleNetworkCanvas;
