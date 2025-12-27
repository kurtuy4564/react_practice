import AppTask from './app-task/AppTask'
import CounterWithLog from './counter-with-log/CounterWithLog'
import CustomButton from './custom-button/CustomButton'
import RequestTracker from './request-tracker/RequestTracker'
import TrafficLight from './traffic-light/TrafficLight'

function App() {
  return (
    <div className='main-container'>
      {/* Task 1 'Задания внутри теории' */}
      <div>
        <TrafficLight />
        <RequestTracker />
        <AppTask />
      </div>

      {/* Task 2 'Реализуй кнопку' */}
      <div>
        <CustomButton />
      </div>

      {/* Task 3 'Последовательное обновление разных состояний' */}
      <div>
        <CounterWithLog />
      </div>
    </div>
  )
}

export default App
