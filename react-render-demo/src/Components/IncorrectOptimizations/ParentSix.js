import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildSix } from './ChildSix'

function ParentSix () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')
  console.log('ParentSix Render')

  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName('Gopinav')}> Change Name </button>

      <MemoizedChildSix name={name} person={memoizedPerson} />
      {/* <MemoizedChildSix name={name} handleClick={memoizedHandleClick} /> */}
    </div>
  )
}

export default ParentSix
