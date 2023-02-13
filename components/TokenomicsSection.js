import React from 'react'

function TokenomicsSection() {
    return (
        <div className='flex flex-col my-36 h-full w-full gap-4'>
            <h1 className='text-center text-[6vw] md:text-4xl text-white font-helvetica tracking-[0.6rem] md:tracking-[1.2rem]'>TOKENOMICS</h1>

            <div className='grid grid-cols-3'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h1 className='font-helvetica font-extrabold text-6xl md:text-7xl xl:text-9xl text-white'>3<span className='text-4xl xl:text-7xl'>%</span></h1>
                    <h2 className='text-white font-arial uppercase'>BUY / SELL</h2>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h1 className='font-helvetica font-extrabold text-6xl md:text-7xl xl:text-9xl text-white'>2<span className='text-4xl xl:text-7xl'>%</span></h1>
                    <h2 className='text-white font-arial uppercase'>Reflections</h2>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h1 className='font-helvetica font-extrabold text-6xl md:text-7xl xl:text-9xl text-white'>1<span className='text-4xl xl:text-7xl'>%</span></h1>
                    <h2 className='text-white font-arial uppercase'>liquidity</h2>
                </div>
            </div>
        </div>
    )
}

export default TokenomicsSection