import React from 'react'
import Login from '../Signup-Login/Login'

function Home() {
    return (
        <div className='flex flex-wrap justify-center items-center container mx-auto border gap-x-1 md:gap-x-10'>
            <div>
                <h1 className=''>LOGO GOES HERE</h1>
            </div>
            <div>
                <h1>Log-in HERE</h1>
                <Login/>
            </div>
        </div>
    )
}

export default Home
