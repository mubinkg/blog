import Image from 'next/image'
import React from 'react'
import LinkedinSmall from './icons/LinkedinSmall'
import InstaSmall from './icons/InstaSmall'
import { FbSmall } from './icons/FbSmall'
import YtSmall from './icons/YtSmall'

const Hero = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <Image src='/person1.png' width="512" height="702" alt="" />
                <div className='flex flex-col'>
                    <Image src='/person2.png' width="784" height="496" alt="" />
                    <div style={{background: "rgba(33, 56, 62, 1)", marginLeft: "auto"}} className='w-10/12 mt-[117px] py-8 px-14 rounded-l-full' >
                        <h2 className='text-white mb-2'>Заследи не на социјалните медиуми</h2>
                        <div className='flex gap-4'>
                            <LinkedinSmall/>
                            <InstaSmall/>
                            <FbSmall/>
                            <YtSmall/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
