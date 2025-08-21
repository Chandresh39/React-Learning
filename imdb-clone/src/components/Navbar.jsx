import React from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center px-3 space-x-9'>

            <img src={Logo} alt="logo" className='w-12' />
            <Link to="/" className='text-blue-900 text-xl'>Home</Link>
            <Link to="/watchList" className='text-blue-900 text-xl'>WatchList</Link>

        </div>
    )
}

export default Navbar
