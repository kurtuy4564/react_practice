import { getImageUrl } from './utils.js'

function Profile({ title, image, items }) {
  const { src, alt } = image

  return (
    <section className='profile'>
      <h2>{title}</h2>
      <img className='avatar' src={getImageUrl(src)} alt={alt} width={70} height={70} />
      <ul>
        {items.map(el => (
          <li>
            <b>{el.title} </b>
            {el.content}
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Profile
