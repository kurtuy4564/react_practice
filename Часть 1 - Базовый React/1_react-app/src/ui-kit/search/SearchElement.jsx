import { Search } from 'lucide-react'
import './SearchElement.css'

function SearchElement() {
  return (
    <div className='search__container'>
      <Search />
      <div>Search for a country...</div>
    </div>
  )
}

export default SearchElement
