import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'

function ParentFour () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')
  console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName('Gopinav')}> Change Name </button>

      <MemoizedChildFour name={name} />
    </div>
  )
}

export default ParentFour
