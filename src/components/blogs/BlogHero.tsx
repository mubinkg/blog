import Image from 'next/image'
import React from 'react'

const BlogHero = () => {
    return (
        <div className='flex gap-16 content-center items-center'>
            <div style={{minWidth: "372px"}}>
                <Image src='/blogheroperson.png' width={371} height={320} alt='blog hero person' />
            </div>
            <div className='w-7/12'>
                <h1 className='text-[40px] leading-[50px] font-light text-primary text-justify'>
                    Биди <span style={{color: "orange"}}>активен/на</span>, споделувај настани на социјаните медиуми, собирај поени, добивај значки и рамки, кани пријатели на настани и освојувај попусти за следната купена карта
                </h1>
                <p className='text-xs mt-7 text-tarnary text-[#21383E]'>
                    Доколку овој месец си најактивен/а во форумот добиваш награди за да го направиш твојот профил уникатен, а ако каниш пријатели и тие купат карта преку твојот линк за покана добиваш попуст на следната купена карта за настан.
                </p>
            </div>
        </div>
    )
}

export default BlogHero
