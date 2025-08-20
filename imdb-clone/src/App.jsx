import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import WatchList from './components/WatchList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchList' element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
