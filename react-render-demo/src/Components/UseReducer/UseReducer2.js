import React, { useReducer } from 'react'

// with state and action as object
// hence dispatch takes input as object & reducer function also returns state as object
const initialState = {
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload }

    case 'DECREMENT':
      return { count: state.count - action.payload }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

function UseReducerTwo () {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <h1> Count - {count.count} </h1>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}> Reset </button>
      </div>
    </div>
  )
}

export default UseReducerTwo
