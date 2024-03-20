import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import SignUpForm from './SignUpForm'
import './signup.css'

function SignUp() {
    const logoStyles = {
        'maxWidth':'7rem',
        'margin':'auto',
    }

    return (
        <div id='signup-wrapper' className='w-full min-h-screen flex'>

            <div className='signup-side-img w-1/2 hidden sm:block'></div>

            <div className='w-full m-auto'>
                <Link className='inline-block mb-3' to='/'>
                    <Logo styles={logoStyles}/>
                </Link>
                <h1 className='font-bold text-4xl' style={{fontFamily: 'Staatliches'}}>WELCOME TO MONEY MAGNET!</h1>
                <p className='text-sm mb-20'>Please fill out your details</p>
                <SignUpForm />
                <p className='mt-1'>Already have an account? <Link to='/login'>Log-in</Link></p>
            </div>
        </div>
    )
}

export default SignUp
