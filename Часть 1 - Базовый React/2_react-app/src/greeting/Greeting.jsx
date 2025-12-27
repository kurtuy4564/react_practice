import clsx from 'clsx'
import styles from './Greeting.module.css'

function useGreeting() {
  const hour = new Date().getHours()
  console.log(hour)
  let timeOfDay, classGreeting

  if (hour < 12) {
    timeOfDay = 'Доброе утро!'
    classGreeting = 'greeting--morning'
  } else if (hour < 18) {
    timeOfDay = 'Добрый день!'
    classGreeting = 'greeting--day'
  } else {
    timeOfDay = 'Добрый вечер!'
    classGreeting = 'greeting--evening'
  }
  return { timeOfDay, classGreeting }
}

function Greeting() {
  const { timeOfDay, classGreeting } = useGreeting()

  return (
    <div className={styles.greeting}>
      <div className={clsx(styles.greeting__container, styles[classGreeting])}>
        {timeOfDay}
      </div>
    </div>
  )
}

export default Greeting
