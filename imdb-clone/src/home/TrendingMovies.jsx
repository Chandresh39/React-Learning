import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import axios from 'axios'

function TrendingMovies({ handleWatchlist, watchlist }) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=de129c78859f307157260a20a0534c74&language=en-US&page=${pageNo}`)
      .then((res) => setMovies(res.data.results))
  }, [pageNo])

  function prevPage() {
    setPageNo(pageNo === 1 ? 1 : pageNo - 1)
  }
  function nextPage() {
    setPageNo(pageNo + 1)
  }

  return (
    <>
      <div className="text-center text-3xl p-5">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movieObj) => (
          <MovieList
            key={movieObj.id}
            movieObj={movieObj}
            handleWatchlist={handleWatchlist}
            poster_path={movieObj.poster_path}
            original_title={movieObj.original_title}
            watchlist={watchlist}
          />
        ))}
      </div>

      <div className="bg-gray-600 flex justify-center text-2xl p-1">
        <div>
          <button
            disabled={pageNo === 1}
            className={`border hover:opacity-50 p-1 mr-11 rounded-2xl ${
              pageNo === 1 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            onClick={prevPage}
          >
            &#8592;
          </button>
        </div>
        <div className="p-1">{pageNo}</div>
        <div>
          <button
            className="border hover:opacity-50 p-1 ml-11 rounded-2xl"
            onClick={nextPage}
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  )
}

export default TrendingMovies
