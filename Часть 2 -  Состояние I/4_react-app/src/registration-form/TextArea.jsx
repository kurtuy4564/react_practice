import { useId } from 'react'

export default function TextArea({textLabel, type, value, setValue}) {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input id={id} type={type} value={value} onInput={e => setValue(e.target.value)} />
    </>
  )
}
