import { useState } from 'react'

export default function TextToggle() {
  const TEXT_ARR = ['Первый текст', 'Второй текст']
  const [text, setText] = useState(TEXT_ARR[0])

  return (
    <div className='container'>
      <div>{text}</div>
      <button onClick={() => setText(text === TEXT_ARR[0] ? TEXT_ARR[1] : TEXT_ARR[0])}>
        Поменять текст
      </button>
    </div>
  )
}
