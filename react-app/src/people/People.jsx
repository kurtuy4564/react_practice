import people from './people'

function People() {
  return (
    <div>
      {people.map(el => (
        <div key={el}>- {el}</div>
      ))}
    </div>
  )
}

export default People
