import React from 'react'
import Logo from '../Logo'

function Home() {
    return (
        <div className='flex flex-col justify-center items-center container mx-auto border gap-x-1 md:gap-x-10'>
            <div>
                <Logo />
            </div>
        </div>
    )
}

export default Home
