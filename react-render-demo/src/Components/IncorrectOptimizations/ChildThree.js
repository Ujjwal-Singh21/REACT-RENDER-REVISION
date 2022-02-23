import React from 'react'

function ChildThree (props) {
  const { children, name } = props
  console.log('ChildThree Render')
  return (
    <div>
      <h4> {children} {name} </h4>
    </div>
  )
}

// export default ChildThree
export default React.memo(ChildThree)
