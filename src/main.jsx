// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from './App.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ThemeContext.Provider value={{ theme: "light" }}>
     <MyApp />
  </ThemeContext.Provider>
  // </StrictMode>,
)
