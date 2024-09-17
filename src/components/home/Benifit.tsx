import React from 'react'

const Benifit = ({title, id}:any) => {
    return (
        <>
            <div className='flex gap-32 my-7'>
                <p className='mt-1'>0{id+1}</p>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[#0F294A] font-[40px] text-3xl'>{title}</h1>
                    <p className='underline text-[#21383E]'>Прочитај повеќе</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Benifit
