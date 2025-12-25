import { Moon } from 'lucide-react'

function Headear() {
  return (
    <div className='main__headear'>
      <div className='header__container'>
        <h3>Where is the world?</h3>
        <div className='header__theme'>
          <Moon />
          <h3>Dark mode</h3>
        </div>
      </div>
    </div>
  )
}

export default Headear
