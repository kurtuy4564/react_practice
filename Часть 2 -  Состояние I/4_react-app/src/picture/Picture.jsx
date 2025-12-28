import { useState } from 'react'
import style from './Picture.module.css'
import clsx from 'clsx'

export default function Picture() {
  const [isActiveImg, setIsActiveImg] = useState(false)

  const classContainer = clsx(style.bg__container, {
    [style['background--active']]: isActiveImg,
  })

  const classImg = clsx(style.picture, {
    [style['picture--active']]: !isActiveImg,
  })

  function handleClickImg(e) {
    e.stopPropagation()
    setIsActiveImg(false)
  }

  function handleClickContainer() {
    setIsActiveImg(true)
  }

  return (
    <div onClick={handleClickContainer} className={classContainer}>
      <img onClick={handleClickImg} className={classImg} src='https://i.imgur.com/5qwVYb1.jpeg' />
    </div>
  )
}
