import React from 'react'

function MovieList({ poster_path, original_title }) {
  return (
    <div className="p-5">
      <div
        className="h-[40vh] w-48 flex bg-cover bg-center rounded relative hover:scale-110 duration-300 hover:cursor-pointer group"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-white p-2 bg-gray-900/70 text-center opacity-0 group-hover:opacity-100 duration-300">
          {original_title}
        </div>
      </div>
    </div>
  )
}

export default MovieList
