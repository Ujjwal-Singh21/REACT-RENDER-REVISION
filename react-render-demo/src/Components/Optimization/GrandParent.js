import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

function GrandParent () {
  const [newCount, setNewCount] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => setNewCount(prevCount => prevCount + 1)}>
          GrandParent Count - {newCount}
        </button>
        <ParentOne>
            <ChildOne />
        </ParentOne>
      </div>
    </div>
  )
}

export default GrandParent
