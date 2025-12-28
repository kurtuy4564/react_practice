import { useState } from 'react'
import TextArea from './TextArea'

export default function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (name && email && password && age && city) {
      console.log({
        name,
        email,
        password,
        age,
        city,
      })
    } else {
      console.log('Заполните все поля')
    }
  }

  return (
    <form>
      <TextArea textLabel='Имя' type='text' value={name} setValue={setName} />
      <TextArea textLabel='Email' type='email' value={email} setValue={setEmail} />
      <TextArea textLabel='Пароль' type='password' value={password} setValue={setPassword} />
      <TextArea textLabel='Возраст' type='number' value={age} setValue={setAge} />
      <TextArea textLabel='Город' type='text' value={city} setValue={setCity} />

      <button type='submit' onClick={onSubmit}>
        Отправить
      </button>
    </form>
  )
}
