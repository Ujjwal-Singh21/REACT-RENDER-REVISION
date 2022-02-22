import React, { useReducer } from 'react'

// setting up initial state and reducer function for useReducer hook
const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1

    case 'DECREMENT':
      return state - 1

    case 'RESET':
      return initialState

    default:
      return state
  }
}

function UseReducer () {

  const [count, dispatch] = useReducer(reducer, initialState)
  console.log('UseReducer Render');
  
  return (
    <div>
      <div>
        <h1> Count - {count} </h1>
        <button onClick={() => dispatch('INCREMENT')}> Increment </button>
        <button onClick={() => dispatch('DECREMENT')}> Decrement </button>
        <button onClick={() => dispatch('RESET')}> Reset </button>
      </div>
    </div>
  )
}

export default UseReducer
