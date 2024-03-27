import React from 'react'
import Logo from '../Logo'
import './home.css'
import { Link } from 'react-router-dom'
import { firstParagraph } from './utilitiesHome'

function Home() {
    return (
        <div className='mt-10 container'>
            <div className='mt-20 flex flex-wrap justify-around'>
                <div className='md:w-1/2 flex items-center'>
                    <p className='font-bold text-start'>
                        {firstParagraph}
                    </p>
                </div>
                <div className='md:w-1/4 flex flex-col gap-4 justify-center'>
                    <h1>Start your path to financial freedom today!</h1>
                    <Link to='/signup'><button>Sign Up</button></Link>
                    <p>Already have an account? <Link to='/login'>Log In</Link></p>
                </div>
            </div>
            {/* <div style={{marginTop:'2.5rem'}} className='w-full border'>
                <div className='flex flex-wrap justify-center mt-5'>
                    <div className='max-w-80'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div> */}
        </div>
        
    )
}

export default Home
