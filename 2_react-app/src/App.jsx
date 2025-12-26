import Task_1 from './1_task/Task_1'
import AccessMessage from './access-message/AccessMessage'
import Greeting from './greeting/Greeting'

function App() {
  return (
    <div className='main__container'>
      {/* Task_2-3 */}
      <AccessMessage age={18}/>
      <Greeting/>

      <Task_1 />

    </div>
  )
}

export default App
