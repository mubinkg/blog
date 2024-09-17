import React from 'react'
import Event from '../Event'

const Events = ({title}:any) => {
    return (
        <div>
            <h1 className='text-5xl py-20 font-light text-primary'>{title}</h1>
            <div className='grid grid-cols-2 gap-10'>
                <Event />
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    )
}

export default Events
