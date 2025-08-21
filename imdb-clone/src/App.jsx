import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import WatchList from './components/WatchList'

function App() {
  const [watchlist, setWatchlist] = useState([])

  // Load watchlist from localStorage on mount
  useEffect(() => {
    let savedList = localStorage.getItem('movieList')
    if (savedList) {
      setWatchlist(JSON.parse(savedList))
    }
  }, [])

  function handleWatchlist(movieObj) {
    if (watchlist.some(m => m.id === movieObj.id)) {
      // Remove movie
      let updatedList = watchlist.filter(m => m.id !== movieObj.id)
      setWatchlist(updatedList)
      localStorage.setItem('movieList', JSON.stringify(updatedList))
      console.log("Removed:", movieObj)
    } else {
      // Add movie
      let updatedList = [...watchlist, movieObj]
      setWatchlist(updatedList)
      localStorage.setItem('movieList', JSON.stringify(updatedList))
      console.log("Added:", movieObj)
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home handleWatchlist={handleWatchlist} watchlist={watchlist} />} 
        />
        <Route 
          path="/watchList" 
          element={<WatchList watchlist={watchlist} handleWatchlist={handleWatchlist} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
