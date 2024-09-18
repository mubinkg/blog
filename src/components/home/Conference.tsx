import Image from 'next/image'
import React from 'react'

const Conference = () => {
  return (
    <div className='my-32 flex justify-between'>
      <div className='flex flex-col gap-14 w-[607px] mt-32'>
        <h1 className='text-4xl'>Најголемиот HR настан на нашите простори - Годишната HR конференција на МАЧР</h1>
        <p>Меѓународна размена на искуства во полето на човечки ресурси и константно движење во чекор со светските трендови.</p>
        <div className='flex'>
            <div>
            <Image src='/conferanceperson.png' alt='conferance' width={66} height={66}/>
            </div>
            <div>
              <h4>м-р Дарко Петровски</h4>
              <p>Претседател на МАЧР</p>
            </div>
        </div>
      </div>
      <div className='relative flex'>
        <div>
          <Image src='/conferance.png' width={551} height={991} alt='conferace'/>
        </div>
        <div className='absolute left-[-120px]'>
          <Image src='/conferance1.png' width={312} height={312} alt='conferace'/>
        </div>
      </div>
    </div>
  )
}

export default Conference
 