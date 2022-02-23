import React from 'react'

const ChildSix = ({ name, person }) => {
  console.log('ChildSix Render')
  return (
    <div>
      <h3>Hello {name}, {person.firstName} {person.lastName} </h3>
      {/* <h3>Hello {name} </h3> */}
    </div>
  )
}

export const MemoizedChildSix = React.memo(ChildSix)
