import React from 'react'
import Logo from './icons/Logo'
import Link from 'next/link'
import Search from './icons/Search'
import Notification from './icons/Notification'

const Navbar = () => {
    return (
        <div style={{ boxShadow: "0px 30px 80px 0px rgba(47, 65, 88, 0.2)", position: "sticky", top: "0", background: "white", zIndex: 1000}}>
            <div className='container py-5'>
                <div className='flex items-center content-center justify-between'>
                    <Logo />
                    <div className='flex justify-between gap-36 items-center content-center'>
                        <div className='flex gap-8 items-center content-center'>
                            <Link href="#">Информативни Содржини</Link>
                            <Link href="#">Едукативни Содржини</Link>
                            <Link href="#">Годишна Конференција</Link>
                            <Link href="event-listing">Настани</Link>
                            <Link href="blogs">Блог</Link>
                            <Search />
                        </div>
                        <div className='flex gap-7 items-center content-center'>
                            <Notification />
                            <button>МК / ЕN</button>
                            <button style={{background: "rgba(232, 123, 34, 1)"}} className='px-[54px] py-[7px] rounded-full text-white'>ЗАЧЛЕНИ СЕ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
