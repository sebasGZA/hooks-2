import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'

import { ClientInformation } from './use-suspense/ClientInformation'
import { getUserAction } from './use-suspense/api/get-user.action'
// import { InstagromApp } from './useOptimistic/instagromApp'
// import { MemoCounter } from './memo/MemoCounter'
// import { MemoHook } from './memo/MemoHook'
// import { ScrambleWords } from './useReducer/ScrambleWords'
// import { TasksApp } from './useReducer/TaskApp'
// import { FocusScreen } from './useRef/FocusScreen'
// import { PokemonPage } from './pages/PokemonPage'
// import { TrafficLightWithHook } from './useEffect/trafficLightWithHook'
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect'
// import HooksApp from './HooksApp'
// import { TrafficLight } from './useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense
      fallback={
        <div className='bg-gradient flex flex-col'>
          <h1>Loading...</h1>
        </div>
      }>
      <ClientInformation getUser={getUserAction(1)} />
    </Suspense>
  </StrictMode>,
)
