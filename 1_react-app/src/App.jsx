import UserProfile from './user-profile/UserProfile.jsx'
import users from './user-profile/userData.js'
import Countries from './countries/Countries'
import People from './people/People.jsx'

function App() {
  return (
    <div className='main__container'>
      <Countries />
      <People />
      <div>
        {users.map(user => (
          <UserProfile user={user} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default App
