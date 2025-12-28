// import styles from './CreatePost.module.scss';

import { useState } from 'react'

export default function CreatePost() {
  const [status, setStatus] = useState('Ожидаем действия')
  const [isActiveArea, setIsActiveArea] = useState(false)

  function saveDraft(e) {
    e.preventDefault()
    if (!isActiveArea) {
      setStatus('Заполните поле')
      return
    }
    setStatus('Сохранено как черновик')
  }

  function publicPost(e) {
    e.preventDefault()
    if (!isActiveArea) {
      setStatus('Заполните поле')
      return
    }
    setStatus('Публикация...')

    setTimeout(() => {
      const randomValue = Math.random() > 0.3

      if (randomValue) {
        setIsActiveArea(true)
        setStatus('Пост опубликован')
      } else {
        setStatus('Ошибка публикации')
      }
    }, 1500)
  }

  function throwPost(e) {
    e.preventDefault()
    setIsActiveArea(false)
    setStatus('Ожидаем действия')
    setStatus('')
  }

  return (
    <form>
      <textarea disabled={isActiveArea} />
      <div>
        <button disabled={isActiveArea} onClick={saveDraft}>
          Сохранить как черновик
        </button>
        <button disabled={isActiveArea} onClick={publicPost}>
          Опубликовать
        </button>
        <button onClick={throwPost}>Сбросить</button>
      </div>
      <p>{status}</p>
    </form>
  )
}
