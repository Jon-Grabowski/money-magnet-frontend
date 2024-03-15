import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Logo from '../Logo'
import './login.css'


function Login() {
    const logoStyles = {
        'maxWidth':'13rem',
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
                <h1 className='text-3xl text-forest-green font-extrabold underline mb-4'>Log-In</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
