import { useReducer } from 'react'

// initialState
const initialState = ['Warner', 'Smith']

//reducer
const reducer = (state, action) => {

  const newState = [...state]

  switch (action) {
    case 'addNames':
      //   state.push('Labuschagne')
      //   state.push('Cummins')
      //   return state
      newState.push('Labuschagne')
      newState.push('Pat Cummins')
      return newState

    case 'reset':
      return initialState

    default:
      return state
  }
}

function ArrayUseReducer () {

  const [names, dispatch] = useReducer(reducer, initialState)

  console.log('ArrayUseReducer Rendering')

  return (
    <div>

      <div>
            {
                names.map((name, index) => {
                    return(
                        <li key={index}> {name} </li>
                    )
                })
            }
      </div>  <br />
     
      <button onClick={() => dispatch('addNames')}> Add Names </button>
      <button onClick={() => dispatch('reset')}> Reset Names </button>
    </div>
  )
}

export default ArrayUseReducer
