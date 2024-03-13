import React from 'react'
import Logo from '../Logo'
import HomeNav from './HomeNav'

function Home() {
    return (
        <div>
            <HomeNav />
            <div style={{marginTop:'2.5rem'}} className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-1/2'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home
