import React from 'react'
import DextoolsIcon from './DextoolsIcon'
import EtherIcon from './EtherIcon'
import TelegramIcon from './TelegramIcon'
import TwitterIcon from './TwitterIcon'

function SocialLinks() {
    return (
        <div className='flex gap-4'>
            <div className='bg-white bg-opacity-30 rounded-full h-10 w-10 flex items-center justify-center'>
                <TelegramIcon />
            </div>
            <div className='bg-white bg-opacity-30 rounded-full h-10 w-10 flex items-center justify-center'>
                <TwitterIcon />
            </div>
            <div className='bg-white bg-opacity-30 rounded-full h-10 w-10 flex items-center justify-center'>
                <DextoolsIcon />
            </div>
            <div className='bg-white bg-opacity-30 rounded-full h-10 w-10 flex items-center justify-center'>
                <EtherIcon />
            </div>
        </div>
    )
}

export default SocialLinks