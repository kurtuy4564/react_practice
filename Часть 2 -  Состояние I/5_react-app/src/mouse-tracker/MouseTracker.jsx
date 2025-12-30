import { useState } from 'react'

export default function MouseTracker() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

  function handlePointerMove(e) {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <div onPointerMove={handlePointerMove} className='mouse-tracker__container'>
      <div>X: {coordinates.x}</div>

      <div>Y: {coordinates.y}</div>
    </div>
  )
}
