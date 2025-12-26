import Gallery from './gallery/Gallery'
import Modal from './modal/Modal'
import Profile from './profile/Profile'
import Profile2 from './profile2/Profile2'

function App() {
  return (
    <>
      {/* Task_1 'Задания внутри теории'*/}
      <>
        <Gallery />
        {/* <Profile/> */}
        {/* <Profile2 /> */}
      </>

      {/* Task_2 'Модальное окно'*/}
      <>
        <Modal title='Подтверждение действия'>
          <p>Вы уверены, что хотите удалить файл?</p>
          <button>Да</button>
          <button>Нет</button>
        </Modal>

        <Modal title='О нас'>
          <p>Наша команда разрабатывает образовательные проекты на React.</p>
        </Modal>
      </>
    </>
  )
}

export default App
