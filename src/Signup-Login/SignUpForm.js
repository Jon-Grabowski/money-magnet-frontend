import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import './signupform.css'

function SignUpForm() {
    const [error, setError] = useState('')

    const initialValues = {
        email:'',
        password:'',
        passwordConfirm:''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values, {resetForm})=>{
            if (values.password !== values.passwordConfirm){
                setError('Passwords do not match')
            }else{
                console.log(values)
                setError('')
                resetForm({values: ''})
            }

        }
    });

    return (
        <div className='m-auto max-w-72'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-y-2'>
                <div className='w-full flex flex-col mb-1'>
                    <label htmlFor='email' className='text-start mb-1 font-bold' style={{fontFamily: 'Rubix'}}>Email</label>
                    <input 
                        type='text' 
                        value={formik.values.email}
                        name='email'
                        onChange={formik.handleChange}
                        className='p-2'
                        required
                    ></input>
                </div>
                <div className='w-full flex flex-col mb-1'>
                <label htmlFor='password' className='text-start mb-1 font-bold' style={{fontFamily: 'Rubix'}}>Password</label>
                    <input 
                        type='password' 
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        className='p-2'
                        required
                    ></input>
                </div>
                <div className='w-full flex flex-col mb-1'>
                <label htmlFor='passwordConfirm' className='text-start mb-1 font-bold' style={{fontFamily: 'Rubix'}}>Confirm Password</label>
                    <input 
                        type='password' 
                        value={formik.values.passwordConfirm}
                        name='passwordConfirm'
                        onChange={formik.handleChange}
                        className='p-2'
                        required
                    ></input>
                </div>
                {error ? <p className='text-red-500'>{error}</p> : null }
                <button 
                    className='bg-magnetic-plum hover:bg-magnetic-plum-light text-white font-bold py-2 px-4 w-full' 
                    type='submit'
                >
                    Next
                </button>
                
            </form>
        </div>
    )
}

export default SignUpForm
