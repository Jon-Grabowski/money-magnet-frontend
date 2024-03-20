import React from 'react'
import { useFormik } from 'formik';
import './loginform.css'

function LoginForm() {
    const initialValues = {
        email:'',
        password:'',
        remember: false
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values, {resetForm})=>{
            console.log(values)
            resetForm({values: ''})
        }
    });

    return (
        <div className='m-auto max-w-72'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-y-2'>
                <div className='w-full flex flex-col mb-4'>
                    <label htmlFor='email' className='text-start mb-2 font-bold' style={{fontFamily: 'Rubix'}}>Email Address</label>
                    <input 
                        type='text' 
                        value={formik.values.email}
                        name='email'
                        onChange={formik.handleChange}
                        className='p-2'
                        required
                    ></input>
                </div>
                <div className='w-full flex flex-col mb-2'>
                <label htmlFor='password' className='text-start mb-2 font-bold' style={{fontFamily: 'Rubix'}}>Password</label>
                    <input 
                        type='password' 
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        className='p-2'
                        required
                    ></input>
                </div>
                <div className='w-full flex justify-between items-center mb-3'>
                    <label className='flex items-center'>
                        <input 
                            type='checkbox'
                            checked={formik.values.remember}
                            onChange={()=> formik.setFieldValue('remember', !formik.values.remember)}
                        />
                        <span className='text-sm ms-1 h-full'>Remember me</span>
                    </label>
                    <p className='text-sm'>Forget password?</p>
                </div>
                <button 
                    className='bg-magnetic-plum hover:bg-magnetic-plum-light text-white font-bold py-2 px-4 w-full' 
                    type='submit'
                >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LoginForm
