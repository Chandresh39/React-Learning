import React, { useEffect, useState } from 'react'
import Banner from '../home/Banner'
import MovieList from '../home/MovieList'
import axios from 'axios'

function Home() {

  const [movies, setMovies] = useState([])
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=de129c78859f307157260a20a0534c74&language=en-US&page=1`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }, [])

  function handleWatchlist(movieObj){
    setWatchlist([...watchlist, movieObj])
    console.log([...watchlist, movieObj])
  }

  return (
    <>
      <Banner />
      <div className='text-center text-3xl p-5'>Trending Movie's</div>
      <div className='flex flex-row flex-wrap justify-around'>
        {
          movies.map((movieObj) => {
            return <MovieList key={movieObj.id} poster_path={movieObj.poster_path} original_title={movieObj.original_title} movieObj={movieObj} handleWatchlist={handleWatchlist}  />

          })
        }
      </div>
    </>
  )
}

export default Home
