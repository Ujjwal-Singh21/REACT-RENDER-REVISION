import React, { useReducer } from 'react'

const initialState = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

const reducer = (state, action) => {

  const newState = { 
    ...state 
  }

  switch (action) {

    case 'firstName':
      // Our usual way
      // return { ...state, firstName: state.firstName = 'Ujjwal'}

      //   state.firstName = 'Steve'
      //   return state
      newState.firstName = 'Steve'
      return newState

    case 'lastName':
      //   state.lastName = 'Rogers'
      //   return state
      newState.lastName = 'Rogers'
      return newState

    case 'reset':
      return initialState

    default:
      return state
  }
}

function ObjectUseReducer () {

  const [name, dispatch] = useReducer(reducer, initialState)

  console.log('ObjectUseReducer Rendering')

  return (
    <div>
      <h2> FirstName : {name.firstName} , LastName : {name.lastName} </h2>
      <button onClick={() => dispatch('firstName')}> Change FirstName </button>
      <button onClick={() => dispatch('lastName')}> Change LastName </button>
      <button onClick={() => dispatch('reset')}> Reset Name </button>
    </div>
  )
}

export default ObjectUseReducer
