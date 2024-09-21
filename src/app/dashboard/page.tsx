import Sliders from "@/components/Sliders";
import Profile from "@/components/dashboard/Profile";
import Progress from "@/components/dashboard/Progress";

export default function Page() {
    return (
        <div>
            <div className="mt-[88px] container">
                <Profile />
            </div>
            <div className="my-40">
                <Sliders/>
            </div>
            <div className="conatiner">
                <Progress/>
            </div>
        </div>
    )
}