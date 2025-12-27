import { useState } from 'react'

export default function CounterWithLog() {
  const [count, setCount] = useState(0)
  const [log, setLog] = useState([])

  function handleClick() {
    setCount(e => e + 1)
    setLog(prev => [...prev, `Новое значение: <${count + 1}>`])
  }

  return (
    <div>
      <button onClick={handleClick}>Увеличить значение</button>
      <div>{count}</div>
      {log.map(el => (
        <div key={el}>{el}</div>
      ))}
    </div>
  )
}
