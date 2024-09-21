import Hero from '@/components/Hero'
import Google from '@/components/icons/Google'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='container'>
                <Hero leftImage="heroleft.png" rightImage="blogright.png" />
                <div className='flex flex-col gap-10 items-center mt-32 font-semibold'>
                    <h1 className='text-3xl'>Најави се  или Регистрирај се</h1>
                    <div className='flex border-gray-300 border-2 items-center gap-10 py-1 px-32 rounded-full'>
                        <Google />
                        <h4 className='text-xl'>Продолжи со Google</h4>
                    </div>
                    <div >
                        <h5>Или</h5>
                    </div>
                    <div className='w-[555px]'>
                        <p className='ml-4 font-light'>e-маил</p>
                        <input className='border-gray-300 px-5 rounded-full border-2 w-full h-[55px]' placeholder='mhra@primer.com' />
                    </div>
                    <button className='text-white bg-orange-400 py-5 px-[185px] rounded-full'>Продолжи со овој email</button>
                    <div className='flex flex-col gap-1'>
                        <p className='font-light w-[555px]'>Со кликнување на 'Продолжи со Google/Email', се согласувате со нашите Услови на користење и Политика за приватност</p>
                        <div className='flex items-center font-light gap-2'>
                            <input type='checkbox' />
                            <p>Сакам да станам член на МАЧР</p>
                        </div>
                        <div className='flex items-center font-light gap-2'>
                            <input type='checkbox' />
                            <p>
                                Сакам редовно да добивам информации на е-маил
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-[316px]'>
                    <div className='w-6/12'>
                        <Image src='/loginone.png' width={785} height={400} alt='login one' />
                    </div>
                    <div className='mx-[300px] w-[350px]'>
                        <h1 className='text-4xl my-3'>Бенефити од индивидуално зачленување</h1>
                        <ul className='list-disc mt-[46px] ml-5'>
                            <li>Едукативни настани</li>
                            <li>Најнови информации и случувања</li>
                            <li>Ширење на мрежата на контакти</li>
                            <li>Вклучување во работењето на МАЧР</li>
                            <li>HR огласи за работа</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between mt-20'>
                    <div className='w-[350px] mt-10'>
                        <h1 className='text-4xl my-3'>Бенефити од индивидуално зачленување</h1>
                        <ul className='list-disc mt-[46px] ml-5'>
                            <li>Едукативни настани</li>
                            <li>Најнови информации и случувања</li>
                            <li>Ширење на мрежата на контакти</li>
                            <li>Вклучување во работењето на МАЧР</li>
                            <li>HR огласи за работа</li>
                        </ul>
                    </div>
                    <div className='w-6/12'>
                        <Image src='/logintwo.png' width={785} height={400} alt='login one' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
