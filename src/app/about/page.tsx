import Hero from "@/components/Hero";
import Sliders from "@/components/Sliders";

export default function Page(){
    return (
        <div>
            <div className="container">
            <Hero leftImage="heroleft.png" rightImage="blogright.png"/>
            </div>
            <div>
                <Sliders/>
            </div>
            <div className="container">

            </div>
        </div>
    )
}