import Hero from "@/components/Hero";
import Sliders from "@/components/Sliders";
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
      </div>
    </>
  );
}
