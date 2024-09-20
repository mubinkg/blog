import Image from 'next/image'
import React from 'react'
import FbDark from '../icons/FbDark'
import TwitterDark from '../icons/TwitterDark'
import InstaDark from '../icons/InstaDark'
import LinkedinDark from '../icons/LinkedinDark'

const UserCardItem = () => {
  return (
    <div className='flex content-center items-center flex-col gap-8 min-h-[390px] min-w-[240px]' style={{boxShadow: "0px 12px 16px -4px #10182814", borderRadius: "0px 0px 200px 200px"}}>
      <div>
        <Image src='/carditem1.png' alt='card item 1' width={160} height={160}/>
      </div>
      <h1 className='text-orange-400 text-xl'>Дарко Петровски</h1>
      <p>Претседател на МАЧР</p>
      <div className='flex gap-5'>
        <FbDark/>
        <TwitterDark/>
        <InstaDark/>
        <LinkedinDark/>
      </div>
    </div>
  )
}

export default UserCardItem
