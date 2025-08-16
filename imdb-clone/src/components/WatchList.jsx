import React from 'react'

function WatchList() {
  return (
    <>
    <div className='p-3 justify-center flex'>
      <input type="text" placeholder='Search Movies' className='bg-gray-100 p-2 w-60 h-10 border rounded' />
    </div>
    
    <div className='flex flex-row flex-wrap justify-around'>
      <button className='border text-white bg-blue-500 p-1 m-1 rounded hover:opacity-70'>All Genre</button>
    </div>

    <div>
      <table className='w-full p-2 border rounded'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Poster</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <td>1</td>
            <td className='bg-cover bg-center h-40 w-auto' style={{
                    backgroundImage: `url('https://english.cdn.zeenews.com/sites/default/files/2025/01/16/1635505-jh234-2025-01-16t130115.212.jpg')`,
                }}></td>
            <td>Narshimha</td>
            <td>9.7</td>
            <td>Action, Animation</td>
            <td><button className='text-white bg-red-500 hover:opacity-70 rounded p-1 hover:cursor-pointer'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList
