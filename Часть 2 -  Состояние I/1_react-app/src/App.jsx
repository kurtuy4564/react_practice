import ColorSwitch from './color-switch/ColorSwitch'
import CustomButton from './custom-button/CustomButton'
import LightSwitch from './light-switch/LightSwitch'
import LogButton from './log-button/LogButton'

function App() {
  return (
    <>
      {/* 1 Task 'Задания внутри теории' */}
      <>
        <LightSwitch />
        <ColorSwitch
          onChangeColor={() => {
            let bodyStyle = document.body.style
            bodyStyle.backgroundColor = bodyStyle.backgroundColor === 'black' ? 'white' : 'black'
          }}
        />
      </>

      {/* 2 Task 'Кнопка с сообщением в консоль' */}
      <LogButton />

      {/* 2 Task 'Передача обработчика через пропсы' */}
      <CustomButton label='Сохранить' onPress={() => console.log('Сохраняем...')} />
    </>
  )
}

export default App
