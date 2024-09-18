import Hero from "@/components/Hero";
import Courses from "@/components/blogs/Courses";
import Events from "@/components/home/Events";

export default function Page(){
    return (
        <div>
           <div className="container">
            <Hero leftImage="heroleft.png" rightImage="blogright.png"/>
           </div>
           <div className="container">
            <Courses/>
            <Events title='Тема: Култура во компанијата'/>
            <Events title='Тема: Култура во компанијата'/>
           </div>
        </div>
    )
}