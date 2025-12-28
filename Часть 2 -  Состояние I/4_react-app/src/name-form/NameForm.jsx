import { useState } from 'react'

export default function NameForm() {
  const [name, setName] = useState('')

  function submitForm(e) {
    e.preventDefault()
    console.log(`Привет, ${name}!`)
  }

  return (
    <div className='container'>
      <form>
        <input onInput={e => setName(e.target.value)} value={name} />
        <button type='submit' onClick={submitForm}>
          Отправить
        </button>
      </form>
      <p>{name}</p>
    </div>
  )
}
