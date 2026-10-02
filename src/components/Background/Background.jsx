import React, { useEffect, useRef } from 'react'

const Background = () => {
  const canvaRef = useRef(null);

  useEffect(() => {
    const canvas = canvaRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }))

    const animation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
      });
      requestAnimationFrame(animation);
    }
    animation();
  }, []);


  return (
    <canvas ref={canvaRef} className='w-full h-full fixed top-0 left-0 z-0 pointer-events-none'>
    </canvas>
  )
}

export default Background
