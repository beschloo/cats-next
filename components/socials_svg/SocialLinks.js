import React from 'react'
import DextoolsIcon from './DextoolsIcon'
import EtherIcon from './EtherIcon'
import TelegramIcon from './TelegramIcon'
import TwitterIcon from './TwitterIcon'

function SocialLinks() {
    return (
        <div className='flex gap-4'>
            <a href="" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <TelegramIcon />
            </a>
            <a href="" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <TwitterIcon />
            </a>
            <a href="" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <DextoolsIcon />
            </a>
            <a href="" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <EtherIcon />
            </a>
        </div>
    )
}

export default SocialLinks