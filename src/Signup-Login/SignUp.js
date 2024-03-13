import React from 'react'
import Logo from '../Logo'
import SignUpForm from './SignUpForm'

function SignUp() {
    const logoStyles = {
        'maxWidth':'13rem',
        'margin':'auto',
        'marginBottom':'2rem'
    }

    return (
        <div className='w-full flex'>
            <div className='sm:min-h-screen bg-black side-img'></div>
            <div id='login-form-wrapper' className='m-auto'>
                <Logo styles={logoStyles}/>
                <h1 className='text-3xl text-forest-green font-extrabold underline mb-4'>Sign Up</h1>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp
