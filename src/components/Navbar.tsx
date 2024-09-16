import React from 'react'
import Logo from './icons/Logo'
import Link from 'next/link'
import Search from './icons/Search'
import Notification from './icons/Notification'

const Navbar = () => {
  return (
    <div>
      <div className='flex'>
        <Logo/>
        <div className='flex'>
            <Link href="#">Информативни Содржини</Link>
            <Link href="#">Едукативни Содржини</Link>
            <Link href="#">Годишна Конференција</Link>
            <Link href="#">Настани</Link>
            <Link href="#">Блог</Link>
            <Search/>
            <Notification/>
            <button>МК / ЕN</button>
            <button>ЗАЧЛЕНИ СЕ</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
