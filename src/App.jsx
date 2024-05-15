import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'

function App() {


  return <div>

   

    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  </div>



}

function Appbar() {

  const navigate = useNavigate();
  return <div>
   <div>
    {/* <h2 style={{background:"black", color:"white"}}>this is the navbar</h2> */}
    <button onClick={() => navigate('/dashboard')}>dashboard</button>
    <button onClick={() => navigate('/')}>Landing</button>
  </div>
  </div>
}

export default App
