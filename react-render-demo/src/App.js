import './App.css'
import ArrayUseReducer from './Components/ImmutableState/ArrayUseReducer'
import ArrayUseState from './Components/ImmutableState/ArrayUseState'
import ObjectUseReducer from './Components/ImmutableState/ObjectUseReducer'
import ObjectUseState from './Components/ImmutableState/ObjectUseState'
import ChildOne from './Components/Optimization/ChildOne'
import GrandParent from './Components/Optimization/GrandParent'
import ParentOne from './Components/Optimization/ParentOne'
import Parent from './Components/ParentChild/Parent'
import UseReducer from './Components/UseReducer/UseReducer'
import UseReducerTwo from './Components/UseReducer/UseReducer2'
import UseState from './Components/UseState/UseState'

function App () {
  return (
    <div className='App'>
      <GrandParent />
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <ParentOne /> */}

      {/* <Parent /> */}
      {/* <ArrayUseReducer /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerTwo /> */}
      {/* <UseState /> */}
    </div>
  )
}

export default App
