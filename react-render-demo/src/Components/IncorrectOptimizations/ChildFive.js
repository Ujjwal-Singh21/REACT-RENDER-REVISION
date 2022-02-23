import React from 'react'

const ChildFive = ({ name, person }) => {
  console.log('ChildFive Render')
  return (
    <div>
      <h3>Hello {name}, {person.firstName} {person.lastName} </h3>
      {/* <h3>Hello {name} </h3> */}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
