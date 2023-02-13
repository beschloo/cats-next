import React from 'react'

function PhaseItem({ id, title, description }) {
    return (
        <div className='flex flex-col gap-1 w-full text-white '>
            <h1 className='text-base uppercase font-heading-black'>Phase {id}</h1>
            <h1 className='text-3xl'>{title}</h1>
            <ul className='list-disc text-xl md:text-2xl px-4 '>
                {
                    description.map((item, key) => (
                        <li className='' key={key}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PhaseItem