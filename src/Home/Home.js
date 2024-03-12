import React from 'react'
import Login from '../Signup-Login/Login'

function Home() {
    return (
        <div className='flex justify-center items-center container mx-auto border'>
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
