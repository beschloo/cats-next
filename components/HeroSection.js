import React from 'react'
import CatSvg from './CatSvg'
import CatText from './CatText'
import Topbar from './Navigation/Topbar'
import SocialLinks from './socials_svg/SocialLinks'

function HeroSection() {
    return (
        <div className='min-h-screen h-full w-full relative'>
            <Topbar />

            <div className='flex flex-col gap-4'>
                <div className='pt-8 flex flex-col md:flex-row gap-4 items-center md:items-stretch'>
                    <div className='h-40 w-40'>
                        <CatSvg />
                    </div>
                    <div className='h-20 md:h-40'>
                        <CatText />
                    </div>
                </div>

                <div className=''>
                    <p className='text-white text-[7vw] md:text-5xl xl:text-7xl font-arial max-w-screen-xl'>Your new defi feline friend. <br></br>Bringing together the world of cats and crypto.</p>
                </div>
            </div>

            <div className='absolute bottom-10 w-full h-fit flex flex-col md:flex-row gap-4 justify-between items-center'>
                <button className='text-black bg-cats-yellow rounded-full h-fit px-6 py-2 md:py-4 font-arial'>BUY $CATS</button>

                <SocialLinks />
            </div>
        </div>
    )
}

export default HeroSection