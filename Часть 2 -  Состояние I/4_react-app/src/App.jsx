import { useId } from 'react'
import Picture from './picture/Picture'
import EditProfile from './edit-profile/EditProfile'
import NameForm from './name-form/NameForm'
import LoginForm from './login-form/LoginForm'
import ChoosingFavoriteColor from './choosing-favorite-color/ChoosingFavoriteColor'
import RegistrationForm from './registration-form/RegistrationForm'
import CreatePost from './create-post/CreatePost'

function App() {
  const id = useId()
  console.log(id)

  return (
    <>
      {/* 1 Task 'Задания внутри теории' */}
      <>
        {/* <Picture /> */}
        {/* <EditProfile /> */}
      </>
      {/* 2-3 Task */}
      {/* <NameForm /> */}

      {/* 4 Task 'Форма входа'*/}
      {/* <LoginForm /> */}

      {/* 5 Task 'Выбор любимого цвета'*/}
      {/* <ChoosingFavoriteColor /> */}

      {/* 6 Task 'Расширенная форма регистрации'*/}
      {/* <RegistrationForm /> */}

      {/* 7 Task 'Создание поста с черновиком, отправкой и статусами'*/}
      <CreatePost/>
    </>
  )
}

export default App
