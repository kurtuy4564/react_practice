import { useState } from 'react'

export default function LoginForm() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function sendForm(e) {
    e.preventDefault()
    if (login && password) {
      console.log(`Добро пожаловать, ${login}!`)
    } else {
      console.log('Пожалуйста, заполните все поля. ')
    }
  }

  return (
    <form>
      <input type='text' value={login} onInput={e => setLogin(e.target.value)}></input>
      <input type='password' value={password} onInput={e => setPassword(e.target.value)}></input>
      <button type='submit' onClick={sendForm}>
        Войти
      </button>
    </form>
  )
}
