import Profile from './Profile.jsx'

export default function Gallery() {
  const items1 = [
    { title: 'Profession:', content: 'physicist and chemist' },
    {
      title: 'Awards: 4',
      content: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
    },
    { title: 'Discovered:', content: 'polonium (chemical element)' },
  ]

  const items2 = [
    { title: 'Profession:', content: 'geochemist' },
    {
      title: 'Awards: 2 ',
      content: '(Miyake Prize for geochemistry, Tanaka Prize)',
    },
    { title: 'Discovered:', content: 'a method for measuring carbon dioxide in seawater' },
  ]

  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile
        title='Maria Skłodowska-Curie'
        image={{ src: 'szV5sdG', alt: 'Maria Skłodowska-Curie' }}
        items={items1}
      />
      <Profile
        title='Katsuko Saruhashi'
        image={{ src: 'YfeOqp2', alt: 'Katsuko Saruhashi' }}
        items={items2}
      />
    </div>
  )
}
