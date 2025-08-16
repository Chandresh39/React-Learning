import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import WatchList from './components/WatchList'
import Movies from './movies/Movies'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/watchList' element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
