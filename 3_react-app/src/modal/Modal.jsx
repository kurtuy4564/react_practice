import styles from './Modal.module.css'
import { X } from 'lucide-react'

export default function Modal({ title, children }) {
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__backdrop} />

      <div className={styles.modal__container}>
        <div className={styles.modal__content}>
          <h1>{title}</h1>
          {children}
          <X className={styles.cross} />
        </div>
      </div>
    </div>
  )
}
