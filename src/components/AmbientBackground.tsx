'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  hue: number;
  phase: number;
  radius: number;
  speed: number;
};

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const forcedColors = window.matchMedia('(forced-colors: active)');

    if (!canvas || !context || reducedMotion.matches || forcedColors.matches) {
      return;
    }

    const particles: Particle[] = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      hue: Math.random() * 360,
      phase: Math.random() * Math.PI * 2,
      radius: 1 + Math.random() * 1.35,
      speed: 0.004 + Math.random() * 0.006,
    }));

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;
    let previousFrame = 0;
    let colors: string[] = [];

    const updateColors = () => {
      const darkMode = document.documentElement.classList.contains('dark');
      colors = particles.map(
        ({ hue }) =>
          `hsla(${hue}, 94%, ${darkMode ? 76 : 66}%, ${darkMode ? 0.88 : 0.82})`,
      );
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (timestamp: number) => {
      if (timestamp - previousFrame < 32) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      const delta = previousFrame
        ? Math.min((timestamp - previousFrame) / 1000, 0.05)
        : 0;
      const seconds = timestamp / 1000;
      previousFrame = timestamp;

      context.clearRect(0, 0, width, height);
      context.save();

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        particle.y -= particle.speed * delta;
        particle.x += Math.sin(seconds * 0.12 + particle.phase) * delta * 0.0015;
        if (particle.y < 0) {
          particle.y = 1;
          particle.x = Math.random();
        }
        if (particle.x < 0) particle.x = 1;
        if (particle.x > 1) particle.x = 0;

        context.beginPath();
        context.arc(
          particle.x * width,
          particle.y * height,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.globalAlpha = 0.62 + (Math.sin(seconds + particle.phase) + 1) * 0.16;
        context.shadowBlur = 9;
        context.shadowColor = colors[index];
        context.fillStyle = colors[index];
        context.fill();
      }

      context.restore();
      animationFrame = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    updateColors();
    animationFrame = window.requestAnimationFrame(draw);
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const themeObserver = new MutationObserver(updateColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className='ambient-background' aria-hidden='true'>
        <canvas ref={canvasRef} />
      </div>
      <div className='viewport-beam' aria-hidden='true'>
        <div className='viewport-beam__border' />
      </div>
    </>
  );
}