import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Events from "@/components/home/Events";

export default function Page() {
    return (
        <div>
            <div className="container">
                <Hero leftImage="heroleft.png" rightImage="blogright.png" />
            </div>
            <div className="container">
                <div className="mt-24 my-10 flex gap-4">
                    {
                        ['Сите', 'HR Кафе', 'HR Викенд', 'HR Вебинар', 'HR Конференции'].map(d => (<Button key={d} title={d} />))
                    }
                </div>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Сите настани</h1>
                    <input style={{ boxShadow: "0px 30px 80px 0px #2F415833" }} className='rounded-full py-3 px-5 min-w-[512px]' placeholder='Пребарај' />
                </div>
                <Events title='HR кафе' />
                <Events title='HR Викенд' />
                <Events title='HR Вебинар' />
            </div>
        </div>
    )
}