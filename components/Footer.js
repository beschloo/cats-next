import React from 'react'
import CatSvg from './CatSvg'
import CatText from './CatText'

function Footer() {
    return (
        <div className='pt-10 flex flex-col xl:flex-row gap-4 items-center xl:items-stretch mx-auto w-fit'>
            <div className='h-36 w-36 xl:h-60 xl:w-60'>
                <CatSvg />
            </div>
            <div>
                <CatText />
            </div>
        </div>
    )
}

export default Footer