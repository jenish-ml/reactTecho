import Counter from "./pages/Counter"
import Home from "./pages/Home"
import Status from "./pages/Status"
import './App.css'
import FormDisplay from "./pages/FormDisplay"
import ShowPassword from "./pages/ShowPassword"
import Activity from "./pages/Activity"
import Mount from "./components/useEffectLearn/Mount"
import Card from "./components/Card"
import Timer from "./components/useEffectLearn/Timer"
import { useState } from "react"
import Practice from "./components/useEffectLearn/Practice"
import Effect from "./Effect/Effect"
import Mounting from "./Effect/Mounting"
import Updating from "./Effect/Updating"
import MultipleUpdate from "./Effect/MultipleUpdate"

function App() {
  // const [show, setShow] = useState(true);
  return (
    <>

      {/* <Home /> */}
      {/* <Status isLoggedIn={false}/> */}
      {/* <Counter /> */}
      {/* <FormDisplay /> */}
      {/* <ShowPassword /> */}
      {/* <Activity /> */}
      {/* <Card /> */}
      {/* <Mount /> */}
      {/* <button onClick={() => setShow(!show)}>
        Toggle Timer
      </button>

      {show && <Timer />} */}

      {/* <Practice /> */}
      {/* <Effect /> */}
      {/* <Mounting /> */}
      {/* <Updating /> */}
      <MultipleUpdate />
    </>
  )
}

export default App
