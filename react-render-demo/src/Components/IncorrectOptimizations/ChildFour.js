import React from 'react'

const ChildFour = ({ name }) => {
  const date = new Date()
  console.log('ChildFour Render')
  return (
    <div>
      <h3>
        Hello {name}. The time is {date.getHours()}:{date.getMinutes()}:
        {date.getSeconds()}
      </h3>
    </div>
  )
}

export const MemoizedChildFour = React.memo(ChildFour)
