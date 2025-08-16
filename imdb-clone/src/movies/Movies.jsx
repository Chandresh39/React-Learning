import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from '../home/MovieList'

function Movies() {
    const [films, setFims] = useState([])
    const [pageNo, setPageNo] = useState(1)

    function prevPage(){
        if(pageNo === 1){
            setPageNo(1)
        }else{
            setPageNo(pageNo - 1)
        }
    }
    function nextPage(){
        setPageNo(pageNo + 1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=de129c78859f307157260a20a0534c74&include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`).then(function (res) {
           return setFims(res.data.results)
        })
    }, [pageNo])

    return (
        <>
            <div className='flex flex-row flex-wrap justify-around'>
                {
                    films.map((movieObj) => {
                        return <MovieList poster_path={movieObj.poster_path} original_title={movieObj.original_title} />

                    })
                }
            </div>
            <div className='flex justify-center p-4 bg-gray-400'>
                <div className='text-xl mr-4 hover:cursor-pointer hover:opacity-35' onClick={prevPage}>&#8592;</div>
                <div className='text-xl '>{pageNo}</div>
                <div className='text-xl ml-4 hover:cursor-pointer hover:opacity-35' onClick={nextPage}>&#8594;</div>
            </div>
        </>
    )
}

export default Movies
