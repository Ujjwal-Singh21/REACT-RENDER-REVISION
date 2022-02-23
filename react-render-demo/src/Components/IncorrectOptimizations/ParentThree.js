import React, { useState } from 'react'
import ChildThree from './ChildThree'

function ParentThree () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')
  console.log('ParentThree Render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName('Gopinav')}> Change Name </button>

      <ChildThree name={name}>
        {/* Hello  */}
       <strong> Hello </strong> 
      </ChildThree>
    </div>
  )
}

export default ParentThree
