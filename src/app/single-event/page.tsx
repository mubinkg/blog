import Sliders from "@/components/Sliders";
import { FbSmall } from "@/components/icons/FbSmall";
import InstaSmall from "@/components/icons/InstaSmall";
import LinkIcon from "@/components/icons/LinkIcon";
import LinkedinSmall from "@/components/icons/LinkedinSmall";
import YtSmall from "@/components/icons/YtSmall";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="container relative">
                <Image src='/airticle.png' width="1861" height={700} alt="blog airticle image" />
                <div className="absolute top-[200px] left-[150px] text-white">
                    <h4>Настан</h4>
                    <h1 className="text-4xl w-[500px] mt-5">HR Кафе</h1>
                    <p className="mt-10">l 25 Јули, 2024   </p>
                </div>
                <div style={{ background: "rgba(33, 56, 62, 1)", marginLeft: "auto" }} className='w-6/12 mt-[117px] py-8 px-14 rounded-l-full absolute bottom-0 right-[-145px]' >
                    <h2 className='text-white mb-2'>Заследи не на социјалните медиуми</h2>
                    <div className='flex gap-4'>
                        <LinkedinSmall />
                        <InstaSmall />
                        <FbSmall />
                        <YtSmall />
                    </div>
                </div>
            </div>
            <div>
                <Sliders />
            </div>
            <div className="container">
                <div className="flex gap-3 mt-20">
                    <p>Почетна</p>
                    <p>{">"}</p>
                    <p>Настани</p>
                    <p>{">"}</p>
                    <p>HR кафе</p>
                    <p>{">"}</p>
                    <p className="text-orange-400">Информации за настан</p>
                </div>
                <div>
                    <h2 className="text-6xl font-bold my-10">HR кафе</h2>
                    <h2 className="text-5xl leading-snug">ТЕМА:  „ПОТРЕБАТА ОД ЗАЈАКНУВАЊЕ НА СОРАБОТКАТА ПОМЕЃУ HR ОДДЕЛОТ И ПРЕТСТАВНИКОТ НА ВРАБОТЕНИТЕ (СИНДИКАТОТ), СО ЦЕЛ УНАПРЕДУВАЊЕ НА РАБОТНАТА ОРГАНИЗАЦИЈА“</h2>
                </div>
                <div className="flex mt-10 justify-between">
                    <div className="w-5/12 gap-20 mt-20 flex flex-col">
                        <div className="flex flex-col gap-16">
                            <h1 className="text-3xl">Опис:</h1>
                            <p>Опис: Овој настан има за цел да ја истакне важноста од тесната соработка меѓу HR одделот и претставникот на вработените (синдикатот) во организациите. Преку овој настан ќе ги разгледаме најдобрите практики, предизвиците и можностите кои се јавуваат при заедничката работа на овие две страни, со цел подобрување на работната атмосфера и организациската ефикасност. Учесниците ќе имаат можност да слушнат од експерти во областа, да дискутираат за своите искуства и да пронајдат нови начини за унапредување на соработката.</p>
                        </div>
                        <div className="flex flex-col gap-16">
                            <h1 className="text-3xl">Цел:</h1>
                            <p>Целта на овој HR кафе настан е да се создаде платформа за отворена комуникација и размена на идеи која ќе придонесе за подобра соработка меѓу HR одделот и синдикатот, што ќе резултира со позитивни промени во работната организација.</p>
                        </div>
                    </div>
                    <div className="mr-20 relative">
                        <Image src='/singleevent1.png' width={551} height={891} alt="signle" />
                        <div className="right-[-100px] top-[700px] bg-white absolute flex items-center gap-5 py-1 px-2 rounded-full" style={{boxShadow: "0px 30px 80px 0px #2F415833"}}>
                            <div className="bg-orange-400 p-5 rounded-full">
                                <LinkIcon />
                            </div>
                            <div className="flex flex-col gap-2 pr-10">
                                <h1 className="text-lg">КУПИ КАРТА</h1>
                                <p className="text-xs">mhraconference.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}