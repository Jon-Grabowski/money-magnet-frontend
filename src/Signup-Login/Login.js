import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../Logo'
import './login.css'


function Login() {
    const logoStyles = {
        'maxWidth':'13rem',
        'margin':'auto',
        'marginBottom':'2rem'
    }

    return (
        <div className='w-full flex'>
            <div className='sm:min-h-screen bg-black side-img'>
                {/* <img src='../assests/money-stock-1-rotated.jpg' alt='money' className='h-full'/> */}
            </div>
            <div id='login-form-wrapper' className='m-auto'>
                <Logo styles={logoStyles}/>
                <h1 className='text-3xl text-forest-green font-extrabold underline mb-4'>Log-In</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
