import Image from 'next/image'
import React from 'react'

const UserCard = () => {
    return (
        <div className='flex gap-5 items-center'>
            <div>
                <Image src='/commentuser.png' alt='comment user' width={92} height={86} />
            </div>
            <div>
                <h1 className=' text-2xl'>Попај Морнаровски</h1>
                <p className='mt-2'>Пред 10 минути</p>
            </div>
        </div>
    )
}

export default UserCard
