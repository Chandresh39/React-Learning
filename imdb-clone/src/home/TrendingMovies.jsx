import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import axios from 'axios'

function TrendingMovies() {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [watchlist, setWatchlist] = useState([])

    // display movies throught API
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=de129c78859f307157260a20a0534c74&language=en-US&page=${pageNo}`).then(function (res) {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    }, [pageNo])

    // Change pages 
    function prevPage() {
        if (pageNo === 1) {
            setPageNo(1)
        } else {
            setPageNo(pageNo - 1)
        }
    }
    function nextPage() {
        setPageNo(pageNo + 1)
    }

 function handleWatchlist(movieObj) {
  // check if movie already exists in watchlist
  if (watchlist.some(m => m.id === movieObj.id)) {
    // remove it
    setWatchlist(watchlist.filter(m => m.id !== movieObj.id))
    console.log("Removed:", movieObj)
  } else {
    // add it
    setWatchlist([...watchlist, movieObj])
    console.log("Added:", movieObj)
  }
}



    return (
        <>
            <div className='text-center text-3xl p-5'>Trending Movie's</div>
           
            <div className='flex flex-row flex-wrap justify-around'>
                {
                    movies.map((movieObj) => {
                        return <MovieList key={movieObj.id} movieObj={movieObj} handleWatchlist={handleWatchlist} poster_path={movieObj.poster_path} original_title={movieObj.original_title} watchlist={watchlist} />

                    })
                }
            </div>
            
            <div className='bg-gray-600 flex justify-center text-2xl p-1'>
                <div>
                    <button disabled={pageNo === 1}
  className={`border hover:opacity-50 p-1 mr-11 rounded-2xl ${pageNo === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
  onClick={prevPage}>&#8592;</button>
                </div>
                <div className='p-1'>
                    {pageNo}
                </div>
                <div>
                    <button className='border hover:opacity-50 p-1 ml-11 rounded-2xl' onClick={nextPage}>&#8594;</button>
                </div>
            </div>
        </>
    )
}

export default TrendingMovies
