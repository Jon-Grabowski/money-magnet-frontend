import React from 'react'
import { Link } from 'react-router-dom'
import LogoWithText from '../LogoWithText'
import './homenav.css'

function HomeNav() {
    return (
        <nav id='home-nav-bar' className='flex justify-between items-center'>
            <div className='w-1/3 ms-5'>
                <LogoWithText />
            </div>
            <div className='w-1/3 items-center'>
                Something Else
            </div>
            <div className='w-1/3 items-center'>
                <Link to='/login' className='float-end me-5'><button>Log In</button></Link>
            </div>
            
        </nav>
    )
}

export default HomeNav
