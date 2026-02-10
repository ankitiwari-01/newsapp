import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePages from './Pages/HomePages'
import Footer from './Components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='' element={<HomePages/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
