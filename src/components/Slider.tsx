import Image from 'next/image'
import React from 'react'

const Slider = () => {
    return (
        <div style={{ width: "300px", height: "246px", boxSizing:"border-box"}}>
            <div className='relative'>
                <div style={{ width: "300px", height: "246px", boxSizing:"border-box"}}>
                    <Image src="/slider1.png" alt='slider' width={300} height={246} />
                </div>
                <div className='absolute top-0 text-white bg-black flex flex-col items-center' style={{ width: "300px", height: "246px", opacity: ".7", borderRadius: "0px 0px 200px 200px" }}>
                    <p className='mt-[19px]'>HR кафе </p>
                    <p>Развој на Кариерата</p>
                    <h1 className='mt-4 text-2xl font-medium'>Јул</h1>
                    <div className='border-4 mt-2 rounded-lg'>
                        <h1 className='text-5xl p-2'>26</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
