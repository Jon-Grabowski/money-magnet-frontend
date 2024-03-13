import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';

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
                <div className='w-full flex justify-between items-center'>
                    <label htmlFor='email' className='float-start'>Email:</label>
                    <input 
                        type='text' 
                        value={formik.values.email}
                        name='email'
                        onChange={formik.handleChange}
                        placeholder='email'
                        className='border rounded p-2 float-end'
                        required
                    ></input>
                </div>
                <div className='w-full flex justify-between items-center'>
                <label htmlFor='password' className='float-start'>Password:</label>
                    <input 
                        type='password' 
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        placeholder='password'
                        className='border rounded p-2 float-end'
                        required
                    ></input>
                </div>
                <div className='w-full flex justify-between items-center'>
                <label htmlFor='passwordConfirm' className='float-start'>Re-enter Password:</label>
                    <input 
                        type='password' 
                        value={formik.values.passwordConfirm}
                        name='passwordConfirm'
                        onChange={formik.handleChange}
                        placeholder='confirm password'
                        className='border rounded p-2 float-end'
                        required
                    ></input>
                </div>
                {error ? <p className='text-red-500'>{error}</p> : null }
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-40' 
                    type='submit'
                >
                    Next
                </button>
                
            </form>
        </div>
    )
}

export default SignUpForm
