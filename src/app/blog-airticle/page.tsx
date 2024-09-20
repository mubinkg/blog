import Sliders from "@/components/Sliders";
import AirticleList from "@/components/blogs/AirticleList";
import Events from "@/components/home/Events";
import { FbSmall } from "@/components/icons/FbSmall";
import InstaSmall from "@/components/icons/InstaSmall";
import LinkedinSmall from "@/components/icons/LinkedinSmall";
import YtSmall from "@/components/icons/YtSmall";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="container relative">
                <Image src='/airticle.png' width="1861" height={700} alt="blog airticle image" />
                <div className="absolute top-[200px] left-[150px] text-white">
                    <h4>Блог</h4>
                    <h1 className="text-4xl w-[500px] mt-5">Како до најдобар избор при  процесот на регрутација</h1>
                    <p className="mt-10">Oд Ѓоко Вукановски l 20 Јуни, 2024</p>
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
                <Sliders/>
            </div>
            <div className="container">
                <AirticleList/>
                <Events title='Слични блогови'/>
            </div>
        </div>
    )
}