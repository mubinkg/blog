import Hero from "@/components/Hero";
import Sliders from "@/components/Sliders";
import Conference from "@/components/home/Conference";
import Events from "@/components/home/Events";
import HomeBlog from "@/components/home/HomeBlog";
import JoinBenifit from "@/components/home/JoinBenifit";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero leftImage="person1.png" rightImage="person2.png"/>
      </div>
      <Sliders />
      <div className="container mb-20">
        <HomeBlog/>
        <JoinBenifit/>
        <Events title='Тема: Култура во компанијата'/>
        <Conference/>
        <Events title='Популарни истражувања'/>
      </div>
    </>
  );
}
