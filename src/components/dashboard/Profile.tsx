import Image from 'next/image'
import React from 'react'
import User from '../icons/User'
import Clip from '../icons/Clip'
import Contact from '../icons/Contact'
import Mail from '../icons/Mail'
import Settings from '../icons/Settings'

const Profile = () => {
    return (
        <div className='flex gap-10'>
            <div className='w-[509px] h-[744px] rounded-3xl' style={{ boxShadow: "0px 9px 80px 0px #2F41581F" }}>
                <div className='flex flex-col items-center pt-[27px] gap-4'>
                    <div>
                        <Image src='/avatar.png' alt='avatar' width={215} height={214} />
                    </div>
                    <h2 className='text-primary text-2xl font-semibold'>Валентина С.</h2>
                    <p className='text-sm'>Битола</p>
                </div>
                <div className='w-[317px] mt-[64px] ml-[42px]'>
                    <div className='flex flex-col gap-5'>
                        <hr />
                        <div className='flex gap-5 ml-[70px]'>
                            <User />
                            <p>HR регрутер</p>
                        </div>
                        <div className='flex gap-5 ml-[70px]'>
                            <Clip />
                            <p className='border-b-gray-300 border-b-2 cursor-pointer'>CV</p>
                        </div>
                    </div>
                </div>
                <div className='w-[317px] mt-[64px] ml-[42px]'>
                    <div className='flex flex-col gap-5'>
                        <hr />
                        <div className='flex gap-5 ml-[70px]'>
                            <Contact />
                            <p>+389 70 481 440</p>
                        </div>
                        <div className='flex gap-5 ml-[70px]'>
                            <Mail />
                            <p>vstojanova@hotmail.com</p>
                        </div>
                        <div className='flex gap-5 ml-[70px]'>
                            <Settings />
                            <p className='border-b-gray-300 border-b-2 cursor-pointer'>Поставки</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-8/12'>
                <h1 className='mt-[40px] font-semibold text-3xl mb-[56px]'>Кратка биографија</h1>
                <p className='text-body leading-8'>
                    Јас сум Валентина Стојанова, искусен HR регрутер со над 10 години работно искуство во полето на човечките ресурси. Својата кариера ја започнав како помлад HR асистент и со текот на годините напредував, стекнувајќи богато знаење и вештини во регрутирањето и управувањето со таленти. Позната сум по мојот професионализам, одлична комуникација и способност да пронајдам и привлечам врвни таленти за различни индустрии. Работев со големи компании, помагајќи им да изградат силни и ефикасни тимови. Со посветеност кон мојата професија и постојана желба за усовршување, се стремам да бидам лидер и ментор во областа на HR.
                </p>
                <h1 className='mt-[56px] text-3xl font-semibold'>Препораки</h1>
            </div>
        </div>
    )
}

export default Profile
