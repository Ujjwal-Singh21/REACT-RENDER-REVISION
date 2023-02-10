import { useState } from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

function GrandParent () {

  const [newCount, setNewCount] = useState(0)

  console.log('Grandparent Render')

  return (
    <div>

      <div>
        <button onClick={() => setNewCount(prevCount => prevCount + 1)}> GrandParent Count - {newCount} </button>

        <ParentOne newCount={newCount}>
            <ChildOne />
        </ParentOne>
      </div>

    </div>
  )
}

export default GrandParent
