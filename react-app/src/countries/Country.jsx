import './Country.css'

function Country({ country }) {
  return (
    <div className='country__container'>
      <img src={country.flag} className='country__img' />

<div className='country__info'>
      <h2>{country.name}</h2>
      <div>Population: {country.population}</div>
      <div>Region: {country.region}</div>
      <div>capital: {country.capital}</div>
</div>
    </div>
  )
}

export default Country
