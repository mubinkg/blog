import Hero from "@/components/Hero";
import Sliders from "@/components/Sliders";
import BlogContent from "@/components/blogs/BlogContent";
import BlogHero from "@/components/blogs/BlogHero";
import Courses from "@/components/blogs/Courses";
import Events from "@/components/home/Events";

export default function Page(){
    return (
        <div>
           <div className="container">
            <Hero leftImage="heroleft.png" rightImage="blogright.png"/>
           </div>
           <Sliders/>
           <div className="container">
            <BlogHero/>
            <BlogContent/>
            <Courses/>
            <Events title='Тема: Култура во компанијата'/>
            <Events title='Тема: Култура во компанијата'/>
           </div>
        </div>
    )
}