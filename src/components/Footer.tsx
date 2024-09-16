import React from 'react'
import Logo from './icons/Logo'

const Footer = () => {
  return (
    <div className='container'>
      <hr />
      <div className='flex my-[50px]'>
        <div className='w-6/12'>
          <Logo />
          <div className='flex gap-10 mt-10'>
            <div>
              <h2 className='font-bold'>Адреса</h2>
              <p>Бул. ВМРО бр. 7/1-7</p>
              <p>1000 Скопје, Македонија</p>
            </div>
            <div>
              <h2 className='font-bold'>Е-маил</h2>
              <p>contact@mhra.mk</p>
            </div>
          </div>
        </div>
        <div className='w-6/12'>
          <h2 className='font-bold text-xl mb-3'>Претплати се на билтен</h2>
          <input placeholder='Е-маил' className='w-full outline-none rounded-full px-[26px] py-[15px]' style={{border: "1px solid rgba(208, 213, 221, 1)"}} type="text" />
        </div>
      </div>
    </div>
  )
}

export default Footer
