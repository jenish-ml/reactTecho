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
import FetchData from "./Effect/FetchData"
import Parent from "./components/propsDrilling/Parent"
import Child from "./components/propsDrilling/Child"
import GrandChild from "./components/propsDrilling/GrandChild"
import NewParent from "./components/useContextLearn/NewParent"
import { ThemeContext } from "./context/ThemeContext"
import FetchPost from "./Effect/FetchPost"
import First from "./PropsDrilling/First"
import Second from "./PropsDrilling/Second"



import { createContext } from "react"
import One from "./Contextlearn/One"


export const NameContext = createContext();

function App() {

  const [show, setShow] = useState(true)
  const [theme, setTheme] = useState("light")
  return (
    <>
    <div className={theme === "light" ? "themeLight" : "themeDark"}>
      
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
      {/* <MultipleUpdate /> */}
      {/* <FetchData /> */}
      {/* { show && <Timer />} */}
      {/* <button onClick={() => setShow(!show)}>Toggle Button</button> */}

      {/* <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>

      <NewParent /> */}
      {/* <FetchPost /> */}
    <NameContext.Provider value = {"Techolas"}>
      <One />
    </NameContext.Provider>
    </div>
    </>
  )
}

export default App
