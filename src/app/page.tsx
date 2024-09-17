import Hero from "@/components/Hero";
import Sliders from "@/components/Sliders";
import Events from "@/components/home/Events";
import HomeBlog from "@/components/home/HomeBlog";
import JoinBenifit from "@/components/home/JoinBenifit";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
      </div>
      <Sliders />
      <div className="container">
        <HomeBlog/>
        <JoinBenifit/>
        <Events title='Тема: Култура во компанијата'/>
        <Events title='Популарни истражувања'/>
      </div>
    </>
  );
}
