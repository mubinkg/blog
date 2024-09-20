import React from 'react'
import Event from '../Event'
import Slider from '../Slider'
import Image from 'next/image'

const BlogContent = () => {
  return (
    <div className='mt-16'>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-bold'>Најнови блогови</h1>
        <input style={{boxShadow: "0px 30px 80px 0px #2F415833"}} className='rounded-full py-3 px-5 min-w-[512px]' placeholder='Пребарај'/>
      </div>
      <div className='mt-12 flex gap-10'>
        <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
                <Event/>
                <Slider/>
            </div>
            <div className='flex gap-10'>
                <Slider/>
                <Event/>
            </div>
        </div>
        <div>
            <Image src='/blogevent.png' height={559} width={308} alt='blog'/>
        </div>
      </div>
    </div>
  )
}

export default BlogContent
