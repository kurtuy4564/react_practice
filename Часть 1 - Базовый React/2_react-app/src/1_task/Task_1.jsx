function Item1({ name, isPacked }) {
  return (
    <li className='item'>
      {name} {isPacked ? null : '❌'}
    </li>
  )
}

function Item2({ name, importance }) {
  return (
    <li className='item'>
      {name} {importance && `(Важность ${importance})`}
    </li>
  )
}

function Drink({ name }) {
  let partPlant, caffeineContent, age

  if (name === 'tea') {
    partPlant = 'leaf'
    caffeineContent = '15–70 mg/cup'
    age = '4,000+ years'
  } else {
    partPlant = 'bean'
    caffeineContent = '80–185 mg/cup'
    age = '1,000+ years'
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  )
}

function Task_1() {
  return (
    <>
      <div>
        <Item1 isPacked={true} name='Item 1' />
        <Item1 isPacked={false} name='Item 1' />
      </div>

      <div>
        <Item2 importance={9} name='Item 2' />
        <Item2 importance={9} name='Item 2' />
      </div>

      <div>
        <Drink name='tea' />
        <Drink name='coffee' />
      </div>
    </>
  )
}

export default Task_1
