export function getFinalState(baseState, queue) {
  let finalState = baseState

  queue.forEach(el => {
    if (typeof el === 'function') {
      finalState = el(finalState)
    } else {
      finalState = el
    }
  })

  return finalState
}
