import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WatchList({ watchlist, handleWatchlist }) {
  const [search, setSearch] = useState("")
  const [genres, setGenres] = useState([])
  const [currGenre, setCurrGenre] = useState("All")

  // Fetch all genres from TMDB API
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=de129c78859f307157260a20a0534c74&language=en-US"
      )
      .then((res) => {
        setGenres(res.data.genres) // [{id:28,name:"Action"}...]
      })
  }, [])

  // Convert genre_ids to readable names
  function getGenreNames(genreIds) {
    return genreIds
      .map((id) => {
        const g = genres.find((gen) => gen.id === id)
        return g ? g.name : null
      })
      .filter(Boolean)
      .join(", ")
  }

  // Create dynamic genre list from movies in watchlist
  const uniqueGenres = ["All", ...new Set(
    watchlist.flatMap((movie) =>
      movie.genre_ids?.map(
        (id) => genres.find((g) => g.id === id)?.name
      ) || []
    ).filter(Boolean)
  )]

  // Filter by search + genre
  const filteredMovies = watchlist.filter((movie) => {
    const matchesSearch = movie.original_title.toLowerCase().includes(search.toLowerCase())
    const movieGenres = getGenreNames(movie.genre_ids || [])
    const matchesGenre = currGenre === "All" || movieGenres.includes(currGenre)
    return matchesSearch && matchesGenre
  })

  return (
    <>
      {/* Search Bar */}
      <div className="p-5 flex justify-center">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-100 px-4 py-2 w-72 sm:w-96 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Genre Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        {uniqueGenres.map((genre) => (
          <button
            key={genre}
            onClick={() => setCurrGenre(genre)}
            className={`px-4 py-2 rounded-xl shadow transition ${
              currGenre === genre
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto px-5">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-left">
              <th className="py-3 px-4">Sr. No.</th>
              <th className="py-3 px-4">Poster</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Genre</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movieObj, index) => (
                <tr key={movieObj.id} className="hover:bg-gray-100 transition">
                  <td className="py-3 px-4 text-gray-700 font-medium">{index + 1}</td>
                  <td className="py-3 px-4">
                    <div
                      className="h-28 w-20 bg-cover bg-center rounded-lg shadow-md"
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
                      }}
                    ></div>
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-800">
                    {movieObj.original_title}
                  </td>
                  <td className="py-3 px-4 text-yellow-500 font-bold">
                    {movieObj.vote_average.toFixed(1)}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {getGenreNames(movieObj.genre_ids || [])}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleWatchlist(movieObj)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-5 text-gray-500">
                  No movies found 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
