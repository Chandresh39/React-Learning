import React from 'react'

function MovieList({poster_path, original_title}) {
    return (
        <div className='p-5'>
            <div className='h-[40vh] w-48 flex bg-cover bg-center rounded hover:scale-110 duration-300 hover:cursor-pointer' style={{ backgroundImage: `URL(https://image.tmdb.org/t/p/original/${poster_path})` }}>
                <div className='text-white p-2 bg-gray-900/60 text-center w-full'>{original_title}</div>
            </div>
        </div>
    )
}

export default MovieList
