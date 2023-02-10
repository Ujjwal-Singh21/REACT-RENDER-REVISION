import { useState } from 'react'

const initialState = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

function ObjectUseState () {

  const [person, setPerson] = useState(initialState)

  const handleNameChange = () => {

    // person.firstName = 'Tony'
    // person.lastName = 'Stark'
    // setPerson(person)

    const newPerson = { 
      ...person
     }
    newPerson.firstName = 'Tony'
    newPerson.lastName = 'Stark'
    setPerson(newPerson)

  }

  // // our usual way
  // //--------------
  //   const handleNameChange = () => {
  //     setPerson({ ...person, firstName: 'Tony', lastName: 'Stark'})
  //   }

  console.log('ObjectUseState render')

  return (
    <div>
      <button onClick={handleNameChange}> {person.firstName} {person.lastName} </button>
    </div>
  )
}

export default ObjectUseState
