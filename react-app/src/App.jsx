import UserProfile from '../user-profile/UserProfile'
import users from '../user-profile/userData'
import people from './people/people'
import countries from './countries/data.json'
import Country from './countries/Country'

function App() {
  return (
    <div className='main__container'>
      <div className='main__country-container'>
        {countries.map(country => (
          <Country key={country.name} country={country} />
        ))}
      </div>

      <div>
        {people.map(el => (
          <div key={el}>- {el}</div>
        ))}
      </div>

      <div>
        {users.map(user => (
          <UserProfile user={user} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default App
