import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseHandler);
    return () => window.removeEventListener("mousemove", mouseHandler)

  }, []);

  return (
    <div
      className='fixed top-0 left-0 pointer-events-none z-50'
      style={{ transform: `translate(${position.x - 40}px, ${position.y - 40}px)` }}
    >
      <div className='h-20 w-20 rounded-full bg-amber-300 opacity-40 blur-md' />
    </div>
  )
}

export default CustomCursor;
