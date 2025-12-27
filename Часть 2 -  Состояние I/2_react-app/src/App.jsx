import ColorSwitcher from '../color-switcher/ColorSwitcher'
import Counter from '../counter/Counter'
import FeedbackForm2 from '../feedback-form-2/FeedbackForm2'
import FeedbackForm from '../feedback-form/FeedbackForm'
import Form from '../form/Form'
import Gallery from './gallery/Gallery'
import TextToggle from './text-toggle/TextToggle'

function App() {
  function handleClick() {
    let bodyStyle = document.body.style

    if (bodyStyle.backgroundColor === 'white') {
      bodyStyle.backgroundColor = 'gray'
    } else {
      bodyStyle.backgroundColor = 'white'
    }
  }

  return (
    <div className='main-backround'>
      {/* Task 1 'Задания внутри теории' */}
      <>
        {/* <Gallery />
        <Form />
        <FeedbackForm />
        <FeedbackForm2 /> */}
      </>

      {/* Task 2 'Счётчик' */}
      <Counter />

      {/* Task 3 'Счётчик' */}
      <TextToggle />

      {/* Task 4 'Смена цвета' */}
      <ColorSwitcher onClick={() => handleClick()} />
    </div>
  )
}

export default App
