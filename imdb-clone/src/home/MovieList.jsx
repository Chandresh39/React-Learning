import React from 'react'

function MovieList({ poster_path, original_title, handleWatchlist, movieObj, watchlist }) {

  const isInWatchlist = watchlist.some(m => m.id === movieObj.id)

  return (
    <div className="p-5">
      <div
        className="h-[40vh] w-48 bg-cover bg-center rounded-2xl relative overflow-hidden shadow-lg hover:scale-105 duration-300 hover:cursor-pointer group"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {/* Like / Favorite Button */}
        <div className="absolute top-2 right-2 bg-black/60 rounded-full h-9 w-9 flex items-center justify-center text-xl opacity-80 hover:scale-125 hover:opacity-100 duration-300 cursor-pointer"
          onClick={() => handleWatchlist(movieObj)}>
          
          {isInWatchlist ? "❤️" : "🤍"}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 text-white p-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-center opacity-0 group-hover:opacity-100 duration-300">
          <p className="text-sm font-semibold truncate">{original_title}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieList
