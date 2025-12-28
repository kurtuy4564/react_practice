import { useState } from 'react'

export default function ChoosingFavoriteColor() {
  const [color, setColor] = useState('')

  return (
    <form>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value=''>Выбирите цвет</option>
        <option value='Красный'>Красный</option>
        <option value='Зеленый'>Зеленый</option>
        <option value='Желтый'>Желтый</option>
      </select>
      <div>Ваш любимый цвет - {color}</div>
    </form>
  )
}
