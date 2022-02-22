import React, { Children, useState } from 'react'
// import ChildOne from './ChildOne'

function ParentOne (props) {
  const { children } = props
  const [count, setCount] = useState(0)
  console.log('ParentOne Render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>
      {children}
      {/* <ChildOne /> */}
    </div>
  )
}

export default ParentOne
