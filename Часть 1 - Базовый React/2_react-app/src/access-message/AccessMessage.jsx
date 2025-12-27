import './AccessMessage.css'
import clsx from 'clsx'

function AccessMessage({ age }) {
  return (
    <div className='access-message'>
      <div className={clsx('access-message__container', age < 18 ? 'age-minor' : 'age-adult')}>
        {age < 18 ? 'Доступ запрещён' : 'Добро пожаловать!'}
      </div>
    </div>
  )
}

export default AccessMessage
