import SearchElement from '../ui-kit/search/SearchElement'
import Select from '../ui-kit/select/Select'
import Country from './Country'
import countries from './data.json'
import Headear from './Headear'

function Countries() {
  return (
    <>
      <Headear />
      <div className='countries__container'>
        <div className='countries__filter'>
          <SearchElement />
          <Select/>
        </div>

        <div className='main__country-container'>
          {countries.map(country => (
            <Country key={country.name} country={country} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Countries
