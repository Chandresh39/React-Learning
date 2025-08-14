import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='flex items-center px-3 space-x-9 border'>

            <img src={Logo} alt="logo" className='w-12' />
            <a href="/" className='text-blue-700'>Home</a>
            <a href="/watchList" className='text-blue-700'>WatchList</a>

        </div>
    )
}

export default Navbar
