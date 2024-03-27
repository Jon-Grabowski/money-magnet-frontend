import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Logo from '../Logo'
import './login.css'


function Login() {
    const logoStyles = {
        'maxWidth':'7rem',
        'margin':'auto',
    }

    return (
        <div id='login-page-wrapper' className='w-full min-h-screen flex'>

            <div className='side-img w-1/2 hidden sm:block'></div>

            <div className='m-auto w-full'>
                <Link className='inline-block mb-3' to='/'>
                    <Logo styles={logoStyles} />
                </Link>
                <p className='font-bold text-5xl' style={{fontFamily: 'Staatliches'}}>WELCOME BACK!</p>
                <p className='mb-20'>Enter your details</p>
                <LoginForm />
                <p className='mt-5'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
