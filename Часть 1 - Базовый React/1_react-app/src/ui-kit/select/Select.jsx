import { ChevronDown } from 'lucide-react'
import './Select.css'

function Select() {
  return (
    <div className='select__container'>
      <div className='select__main-el'>
        <div>Filter by Region</div>
        <ChevronDown/>
      </div>
    </div>
  );
}

export default Select;