import { useState } from 'react'

export default function CustomButton() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1)
    }, 3000)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>Увеличения счетчика</button>
    </>
  )
}
