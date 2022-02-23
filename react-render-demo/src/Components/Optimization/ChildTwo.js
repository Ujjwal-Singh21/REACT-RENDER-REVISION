import React from 'react'

function ChildTwo () {
  console.log('ChildTwo Render')
  return (
    <div>
      <h3> ChildTwo Component </h3>
    </div>
  )
}

// export default ChildTwo
export default React.memo(ChildTwo)
