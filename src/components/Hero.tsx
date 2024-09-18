import Image from 'next/image'
import React from 'react'
import LinkedinSmall from './icons/LinkedinSmall'
import InstaSmall from './icons/InstaSmall'
import { FbSmall } from './icons/FbSmall'
import YtSmall from './icons/YtSmall'

type IProps = {
    leftImage:string
    rightImage: string
}

const Hero = ({leftImage, rightImage}:IProps) => {
    return (
        <div>
            <div className='flex justify-between relative'>
                <Image src={`/${leftImage}`} width="512" height="702" alt="" />
                <div className='flex flex-col'>
                    <Image src={`/${rightImage}`} width="784" height="496" alt="" />
                    <div style={{background: "rgba(33, 56, 62, 1)", marginLeft: "auto"}} className='w-6/12 mt-[117px] py-8 px-14 rounded-l-full absolute bottom-0 right-[-145px]' >
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
