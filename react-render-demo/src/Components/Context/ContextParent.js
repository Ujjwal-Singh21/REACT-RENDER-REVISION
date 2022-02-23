import React, { useState } from 'react'
// import { ChildA } from './ContextChildren'
import { MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

function ContextParent ({children}) {
  const [count, setCount] = useState(0)

  console.log('ContextParent Render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count - {count}
      </button>

      {/* <CountProvider value={count}> */}
      {/* <ChildA /> */}
      {/* <MemoizedChildA /> */}
      {/* </CountProvider> */}

      <CountProvider value={count}>
          {children}
      </CountProvider>

    </div>
  )
}

export default ContextParent
