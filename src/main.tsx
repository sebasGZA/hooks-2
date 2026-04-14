import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ScrambleWords } from './useReducer/ScrambleWords'

// import { TasksApp } from './useReducer/TaskApp'
// import { FocusScreen } from './useRef/FocusScreen'
// import { PokemonPage } from './pages/PokemonPage'
// import { TrafficLightWithHook } from './useEffect/trafficLightWithHook'
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect'
// import HooksApp from './HooksApp'
// import { TrafficLight } from './useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>,
)
