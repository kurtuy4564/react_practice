export default function Profile2() {
  return (
    <div>
      <Card
        title='Photo'
        children={
          <img
            className='avatar'
            src='https://i.imgur.com/OKS67lhm.jpg'
            alt='Aklilu Lemma'
            width={70}
            height={70}
          />
        }
      />

      <Card
        title='About'
        children={
          <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment
            to schistosomiasis.
          </p>
        }
      />
    </div>
  )
}

function Card({ children, title }) {
  return (
    <div className='card'>
      <div className='card-content'>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}
