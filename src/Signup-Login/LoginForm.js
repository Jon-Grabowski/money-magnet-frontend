import React from 'react'
import { useFormik } from 'formik';

function LoginForm() {
    const initialValues = {
        email:'',
        password:''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values)=>{console.log(values)}
    });

    return (
        <div className='m-auto'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-y-2'>
                <div className='border'>
                    <label for='email'>Email:</label>
                    <input 
                        type='text' 
                        value={formik.values.email}
                        name='email'
                        onChange={formik.handleChange}
                        placeholder='email'
                        className='border rounded p-2'
                        required
                    ></input>
                </div>
                <div>
                <label for='password'>Password:</label>
                    <input 
                        type='password' 
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        placeholder='password'
                        className='border rounded p-2'
                        required
                    ></input>
                </div>
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-40' 
                    type='submit'
                >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LoginForm
