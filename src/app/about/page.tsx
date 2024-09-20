import Hero from "@/components/Hero";
import Sliders from "@/components/Sliders";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="container">
                <Hero leftImage="heroleft.png" rightImage="blogright.png" />
            </div>
            <div>
                <Sliders />
            </div>
            <div className="container">
                <div className="flex gap-3">
                    <p>Почетна</p>
                    <p>{">"}</p>
                    <p className="text-[orange]">Годишна конференција</p>
                </div>
                <div className="mt-32 flex gap-20">
                    <div style={{ width: "465px", height: "577px" }}>
                        <Image src='/about1.png' alt="about" width={465} height={577} />
                    </div>
                    <div className="w-8/12 mt-20">
                        <h1 className="text-5xl font-semibold mb-16">МИСИЈА И ВИЗИЈА</h1>
                        <h3 className="text-3xl w-6/12 mb-12">Македонска Асоцијација за Човечки Ресурси</h3>
                        <p className="mb-10">МАЧР е стручно, невладино, непартиско и непрофитно здружение на граѓани формирано на 22 април 2009 година, заради вршење на дејности и активности поврзани со развојот на работната сила, промоција на управувањето со човечките ресурси, како и унапредување на професијата управување со човечки ресурси.</p>
                        <p>
                            <span className="text-orange-400">Мисија:</span> “Мисија на МАЧР е унапредување и развој на професијата менаџмент со човечките ресурси”.
                        </p>
                        <p>
                            <span className="text-orange-400">Визија:</span> “Визија на МАЧР е развој на луѓето и организациите!”
                        </p>
                    </div>
                </div>
                <div className="flex mt-16 gap-10">
                    <div className="w-8/12">
                        <h1 className="text-5xl text-primary mb-[56px]">Цели и задачи:</h1>
                        <p className="text-body mb-2"><span className="text-orange-400">ПОДДРШКА</span> на највисоките идеали во областа на управувањето со човечки ресурси и посестрано прифаќање и ценење на професијата;</p>
                        <p className="text-body mb-2"><span className="text-orange-400">ПРИЗНАВАЊЕ</span> на управувањето со човечки ресурси поради неговиот придонес за успешно работење и зајакнување на способноста и кредибилитетот на професијата управување со човечки ресурси;</p>
                        <p className="text-body mb-2"><span className="text-orange-400">СТРЕМЕЖ</span> да бидеме водачи во развојот и промовирањето на добрите практики во професијата управување со човечки ресурси, што ќе ги применуваат и професионалните членови и нивните колеги и да ги поставиме основните национални стандарди за управување со човечки ресурси; Лобирање кај владата и поднесување на документи во име на членовите и трети лица.</p>
                        
                    </div>
                    <div>
                        <Image src='/about2.png' alt="about second" width={456} height={483}/>
                    </div>
                </div>
            </div>
        </div>
    )
}