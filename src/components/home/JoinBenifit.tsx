import React from 'react'
import Benifit from './Benifit'

const benifitList = [
    'Едукативни настани',"Најнови информации и случувања",'Ширење на мрежата на контакти','Вклучување во работењето на МАЧР','HR огласи за работа'
]

const JoinBenifit = () => {
    return (
        <div className='my-[100px]'>
            <div className='flex gap-32'>
                <div className='w-8/12'>
                    {
                        benifitList.map((d,index)=><Benifit title={d} id={index} key={index}/>)
                    }
                </div>
                <div className='w-4/12 flex flex-col gap-16'>
                    <h1 className='text-[#0F294A] text-5xl'>Бенефити од зачленување во МАЧР</h1>
                    <p className='text-[#21383E] text-sm'>
                        Македонската асоцијација за човечки ресурси - МАЧР како невладино, непрофитно и непартиско здружение на граѓани, продолжува со остварување на својата мисија за промоција и унапредување на професијата управување со човечките ресурси, како и создавање и имплементирање на највисоките професионални стандарди и развој на човечкиот капитал во Република Македонија како единствен ентитет од овој вид во земјава.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JoinBenifit
