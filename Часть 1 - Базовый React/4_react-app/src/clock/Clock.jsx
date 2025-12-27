import React, { useEffect } from 'react'
import './Clock.css'

export default function Clock({ time }) {
  const hours = time.getHours()

  useEffect(() => {
    if (hours >= 0 && hours <= 6) {
      document.getElementById('time').className = 'night'
    } else {
      document.getElementById('time').className = 'day'
    }
  }, [hours])

  return <h1 id='time'>{time.toLocaleTimeString()}</h1>
}
