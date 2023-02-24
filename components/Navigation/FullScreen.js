import React from 'react'
import CatSvg from '../CatSvg'
import CatText from '../CatText'
import SocialLinks from '../socials_svg/SocialLinks'

function Fullscreen({ fullscreen, disableFullscreen }) {
    return (
        <div className={`${fullscreen === true ? 'opacity-100 z-[9999] left-0' : 'left-[-1300px] opacity-0 -z-[1]'} h-screen w-screen fixed top-0  transition-all duration-500 ease-in-out bg-black bg-opacity-95 backdrop-blur-lg`}>
            <div className={`${fullscreen === true ? 'opacity-100 visible' : 'opacity- invisible'} transition-all duration-500 ease-in-out`}>
                {/* close button */}
                <div className='mt-5 mr-4 px-4 flex justify-end'>
                    <button className='' onClick={(disableFullscreen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7 4.3C19.3 3.9 18.7 3.9 18.3 4.3L12 10.6L5.7 4.3C5.3 3.9 4.7 3.9 4.3 4.3C3.9 4.7 3.9 5.3 4.3 5.7L10.6 12L4.3 18.3C3.9 18.7 3.9 19.3 4.3 19.7C4.5 19.9 4.7 20 5 20C5.3 20 5.5 19.9 5.7 19.7L12 13.4L18.3 19.7C18.5 19.9 18.8 20 19 20C19.2 20 19.5 19.9 19.7 19.7C20.1 19.3 20.1 18.7 19.7 18.3L13.4 12L19.7 5.7C20.1 5.3 20.1 4.7 19.7 4.3Z" fill="white" />
                        </svg>
                    </button>
                </div>

                {/* menu items */}
                <div className='flex flex-col mt-20 text-4xl font-heading-black w-full gap-6 px-4 text-white'>
                    <a href="#tokenomics">TOKENOMICS</a>
                    <a href="#roadmap">ROADMAP</a>
                    <a href="#story">STORY</a>
                    <a href="/images/catstoken_whitepaper_022423.pdf">WHITEPAPER</a>
                </div>

                <div className='my-8 h-[2px] w-4/6 bg-cats-orange-red mx-4'></div>

                <div className='mt-4 flex flex-col px-4'>
                    <SocialLinks />
                </div>

                <div className='h-20 w-fit absolute bottom-4 flex items-center px-4'>
                    <div className='h-20 w-20'>
                        <CatSvg />
                    </div>
                    <div className='h-16 w-full'>
                        <CatText />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fullscreen