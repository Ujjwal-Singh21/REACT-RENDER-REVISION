import React, { useState } from 'react'
import ChildTwo from './ChildTwo'

function ParentTwo (props) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')
  console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName('Gopinav')}> Change Name </button>

      <ChildTwo name={name} />
    </div>
  )
}

export default ParentTwo
