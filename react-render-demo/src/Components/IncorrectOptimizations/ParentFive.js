import React, { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'

function ParentFive () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')
  console.log('ParentFive Render')

  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }

  const handleClick = () => {}

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName('Gopinav')}> Change Name </button>

      <MemoizedChildFive name={name} person={person} />
      {/* <MemoizedChildFive name={name} handleClick={handleClick} /> */}
    </div>
  )
}

export default ParentFive
