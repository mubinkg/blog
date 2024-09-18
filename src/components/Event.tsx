import Image from 'next/image'
import React from 'react'

const Event = () => {
  return (
    <div style={{borderRadius: "0px 0px 230px 230px", boxShadow: "0px 12px 16px -4px #10182814"}} className='flex'>
      <div>
        <Image src='/card1.png' alt='card one' width={327} height={361}/>
      </div>
      <div className='px-20 py-10'>
        <h1 className='text-primary text-xl font-bold w-[300px]'>Како да привлечете и задржите таленти</h1>
        <p className='underline text-ternary mt-[120px]'>Прочитај повеќе</p>
      </div>
    </div>
  )
}

export default Event
