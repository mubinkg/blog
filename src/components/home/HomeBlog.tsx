import Image from 'next/image'
import React from 'react'

const HomeBlog = () => {
  return (
    <div>
      <div className='flex gap-[136px] box-border'>
        <div>
          <Image alt='home blog' src='/homeblogperson1.png' width={480} height={480} />
        </div>
        <div className='mt-[24px]'>
          <h1 className='text-6xl w-[750px] text-justify text-[#0F294A]'>Кажи ги своите мислења и поврзи се со останатите HR ентузијасти</h1>
          <p className='text-sm text-[#21383E] w-[496px] mt-[56px]'>Во нашиод блог одсега ке можеш да разменуваш мислења на актуелни теми со останатите корисници</p>
        </div>
      </div>
      <div className='box-border flex justify-between relative'>
        <div style={{ width: "562px", height: "562px" }} className='ml-[400px]'>
          <Image src='/homeblogperson2.png' alt='home blog person two' width={562} height={562} />
        </div>
        <div style={{ boxShadow: "0px 30px 80px 0px rgba(47, 65, 88, 0.2)"}} className='absolute w-[790px] px-[100px] py-[40px] box-border bg-white flex justify-between top-[-80px] left-32 rounded-md items-center'>
          <p className='text-xl text-[#0F294A]'>Упати се уште сега кон</p>
          <button style={{ background: "rgba(232, 123, 34, 1)" }} className='px-[54px] py-[20px] rounded-full text-white font-bold text-xl'>ЗАЧЛЕНИ СЕ</button>
        </div>
        <div style={{ width: "376px", height: "376px" }} className='absolute right-0 top-[-100px]'>
          <Image src='/homeblogperson3.png' alt='home blog person two' width={376} height={376} />
        </div>
      </div>
    </div>
  )
}

export default HomeBlog
