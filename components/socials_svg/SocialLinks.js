import React from 'react'
import DextoolsIcon from './DextoolsIcon'
import ArbiIcon from './ArbiIcon'
import TelegramIcon from './TelegramIcon'
import TwitterIcon from './TwitterIcon'

function SocialLinks() {
    return (
        <div className='flex gap-4'>
            <a href="https://t.me/catscatscatstoken" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <TelegramIcon />
            </a>
            <a href="https://twitter.com/CatsCatsToken" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <TwitterIcon />
            </a>
            <a href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0x5ee69be4eb99902883c216f505a74ac879e9597d" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <DextoolsIcon />
            </a>
            <a href="https://arbiscan.io/address/0xB1CD1D319f5363Ed57FCe58a85055ADA0e15A957" className='bg-white bg-opacity-30 hover:bg-cats-yellow-dark hover:bg-opacity-70 transition-all duration-150 ease-in-out rounded-full h-10 w-10 flex items-center justify-center'>
                <ArbiIcon />
            </a>
        </div>
    )
}

export default SocialLinks