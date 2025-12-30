import React, { useId, useState } from 'react'

export default function RegistrationForm() {
  const idForm = useId()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    city: '',
  })

  function handleOnInput(e) {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form id={idForm} onSubmit={handleClick}>
        Имя:
        <input name='name' value={user.name} onInput={handleOnInput} />
        Почта:
        <input name='email' value={user.email} onInput={handleOnInput} />
        Пароль:
        <input name='password' value={user.password} onInput={handleOnInput} />
        Возраст
        <input name='age' value={user.age} onInput={handleOnInput} />
        Город
        <input name='city' value={user.city} onInput={handleOnInput} />
      </form>
      <button type='submit' form={idForm}>
        Отправить
      </button>
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}
