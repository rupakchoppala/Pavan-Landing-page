import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home'
import Services from './pages/services'
function App() {
  
      return(
        <>
        <div className='overflow-hidden'>
        <HomePage/>
        <Services/>
        </div>
         
        </>
      )
}

export default App
