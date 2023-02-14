import React, { useState } from 'react'
import CatSvg from '../CatSvg';
import Fullscreen from './FullScreen';

function Topbar() {

    const [fullscreen, setFullscreen] = useState(false);

    const disableFullscreen = () => {
        if (fullscreen === true) {
            setFullscreen(false)
        }
        else {
            return
        }
    }

    return (
        <>
            <div className='hidden md:flex justify-between text-white font-arial'>
                <a data-scroll-to href="#tokenomics">TOKENOMICS</a>
                <a data-scroll-to href="#roadmap">ROADMAP</a>
                <a data-scroll-to href="#story">STORY</a>
                <a data-scroll-to href="#">WHITEPAPER</a>
            </div>

            <div className='flex justify-between md:hidden absolute top-0 left-0 w-full'>
                <div className='h-10 w-10 flex gap-2'>
                    <CatSvg />
                    {/* <CatText /> */}
                </div>
                <button className="flex items-center justify-center ring-0 outline-none"
                    onClick={() => setFullscreen(true)}
                >
                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5.5" y1="12.2" x2="29.5" y2="12.2" stroke="white" strokeWidth="2" />
                        <line x1="5.5" y1="21.7999" x2="29.5" y2="21.7999" stroke="white" strokeWidth="2" />
                    </svg>

                </button>
            </div>


            {/* fullscreen menu */}
            <Fullscreen fullscreen={fullscreen} disableFullscreen={disableFullscreen} />
        </>
    )
}

export default Topbar