import React from 'react'

function WatchList() {
  return (
    <>
      {/* Search Bar */}
      <div className="p-5 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search Movies..."
          className="bg-gray-100 px-4 py-2 w-72 sm:w-96 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Genre Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition">
          All Genre
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300 transition">
          Action
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300 transition">
          Comedy
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300 transition">
          Drama
        </button>
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto px-5">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-left">
              <th className="py-3 px-4">Sr. No.</th>
              <th className="py-3 px-4">Poster</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Rating ⭐</th>
              <th className="py-3 px-4">Genre</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="hover:bg-gray-100 transition">
              <td className="py-3 px-4 text-gray-700 font-medium">1</td>
              <td className="py-3 px-4">
                <div
                  className="h-28 w-20 bg-cover bg-center rounded-lg shadow-md"
                  style={{
                    backgroundImage: `url('https://english.cdn.zeenews.com/sites/default/files/2025/01/16/1635505-jh234-2025-01-16t130115.212.jpg')`,
                  }}
                ></div>
              </td>
              <td className="py-3 px-4 font-semibold text-gray-800">Narshimha</td>
              <td className="py-3 px-4 text-yellow-500 font-bold">9.7</td>
              <td className="py-3 px-4 text-gray-600">Action, Animation</td>
              <td className="py-3 px-4 text-center">
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
