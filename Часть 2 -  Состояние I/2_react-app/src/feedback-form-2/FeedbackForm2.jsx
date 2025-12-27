export default function FeedbackForm2() {
  function handleClick() {
    const nameTemp = prompt('What is your name?')
    alert(`Hello, ${nameTemp}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
