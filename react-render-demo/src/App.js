import './App.css'
import { ChildA } from './Components/Context/ContextChildren'
import ContextParent from './Components/Context/ContextParent'
import ArrayUseReducer from './Components/ImmutableState/ArrayUseReducer'
import ArrayUseState from './Components/ImmutableState/ArrayUseState'
import ObjectUseReducer from './Components/ImmutableState/ObjectUseReducer'
import ObjectUseState from './Components/ImmutableState/ObjectUseState'
import ParentFive from './Components/IncorrectOptimizations/ParentFive'
import ParentFour from './Components/IncorrectOptimizations/ParentFour'
import ParentSix from './Components/IncorrectOptimizations/ParentSix'
import ParentThree from './Components/IncorrectOptimizations/ParentThree'
import ChildOne from './Components/Optimization/ChildOne'
import GrandParent from './Components/Optimization/GrandParent'
import ParentOne from './Components/Optimization/ParentOne'
import ParentTwo from './Components/Optimization/ParentTwo'
import Parent from './Components/ParentChild/Parent'
import UseReducer from './Components/UseReducer/UseReducer'
import UseReducerTwo from './Components/UseReducer/UseReducer2'
import UseState from './Components/UseState/UseState'

function App () {
  return (
    <div className='App'>
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ContextParent /> */}
      {/* <ParentSix /> */}
      {/* <ParentFive /> */}
      {/* <ParentFour /> */}
      {/* <ParentThree /> */}
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
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
