import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import ParaCards from './components/ParaCards';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <ParaCards />
      <Footer />
    </>
  )
}

export default App
