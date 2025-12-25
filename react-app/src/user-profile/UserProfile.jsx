import './UserProfile.css'

function UserProfile({ user }) {
  return (
    <div className='user__container'>
      <img className='user__img' src={user.avatarUrl} />
      <div className='user__info'>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.bio}</div>
      </div>
    </div>
  )
}

export default UserProfile
