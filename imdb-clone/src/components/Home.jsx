import React from 'react'
import Banner from '../home/Banner'
import TrendingMovies from '../home/TrendingMovies'

function Home({ handleWatchlist, watchlist }) {
  return (
    <>
      <Banner />
      <TrendingMovies handleWatchlist={handleWatchlist} watchlist={watchlist} />
    </>
  )
}

export default Home
