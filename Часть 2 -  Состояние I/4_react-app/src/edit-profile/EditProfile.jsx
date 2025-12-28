import { useState } from 'react'

export default function EditProfile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [isActiveForm, setIsActiveForm] = useState(true)

  function handleClickForm(e) {
    e.preventDefault()
    setIsActiveForm(!isActiveForm)
  }

  return (
    <form>
      <label>
        First name: <b>{firstName}</b>
        {isActiveForm && <input onInput={e => setFirstName(e.target.value)} value={firstName} />}
      </label>
      <label>
        Last name: <b>{lastName}</b>
        {isActiveForm && <input onInput={e => setLastName(e.target.value)} value={lastName} />}
      </label>
      <div>
        <button onClick={handleClickForm} type='submit'>
          {isActiveForm ? 'Save' : 'Edit'} Profile
        </button>
      </div>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  )
}
