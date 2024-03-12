import React from 'react'
import { useFormik } from 'formik';

function Login() {

    const initialValues = {
        email:'',
        password:''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values)=>{console.log(values)}
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-y-1'>
                <input 
                    type='text' 
                    value={formik.values.email}
                    name='email'
                    onChange={formik.handleChange}
                    placeholder='email...'
                    className=''
                    required
                ></input>
                <input 
                    type='password' 
                    value={formik.values.password}
                    name='password'
                    onChange={formik.handleChange}
                    placeholder='password...'
                    className=''
                    required
                ></input>
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                    type='submit'
                >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default Login
