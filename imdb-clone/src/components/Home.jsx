import React from 'react'
import Banner from '../home/Banner'
import MovieList from '../home/MovieList'

function Home() {
  return (
    <>
      <Banner />
      <div className='text-center text-3xl p-5'>Trending Movie's</div>
      <div className='flex flex-row flex-wrap justify-around'>
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
      </div>
    </>
  )
}

export default Home
