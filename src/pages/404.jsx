import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NotFound = () => {

    return (
        <div className='h-[100vh] text-tPrimary relative container mx-auto'>
            <Navbar />
            <div
                className='flex flex-col items-center justify-center h-[calc(100%-100px)]'
            >
                <h1 className='text-9xl font-bold text-tPrimary'>404</h1>
                <p className='text-2xl font-bold text-blue-400'>Page not found</p>
                <button
                    className='px-4 py-2 mt-4 text-white bg-blue-400 rounded-md hover:bg-blue-600'
                >
                    <Link to='/'>Go back to home</Link>
                </button>
            </div>
        </div>
    )
}

export default NotFound