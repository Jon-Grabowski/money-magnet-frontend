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
        <div className='w-full flex'>
            <div className='sm:min-h-screen bg-black side-img'>
            </div>
            <div id='login-form-wrapper' className='m-auto'>
                <Link className='inline-block mb-3' to='/'>
                    <Logo styles={logoStyles} />
                </Link>
                <p className='font-bold text-5xl' style={{fontFamily: 'Staatliches'}}>WELCOME BACK!</p>
                <p className='mb-20'>Enter your details</p>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
