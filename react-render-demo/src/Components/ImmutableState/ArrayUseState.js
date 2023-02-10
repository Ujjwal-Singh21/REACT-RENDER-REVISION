import { useState } from 'react'

const initialState = ['Bruce', 'Clarke']

function ArrayUseState () {

  const [persons, setPersons] = useState(initialState)

  const handleAddName = () => {
    // persons.push('Wayne')
    // persons.push('Diana')
    // setPersons(persons)

    const newPersons = [...persons]
    newPersons.push('Wayne')
    newPersons.push('Diana')
    setPersons(newPersons)
  }

  console.log('ArrayUseState Rendering')

  return (
    <div>
      <button onClick={handleAddName}> AddName </button>
      
      {
            persons.map((person, index) => {
              return(
                    <li key={index}> {person} </li>
                )
            })
        }
    </div>
  )
}

export default ArrayUseState
