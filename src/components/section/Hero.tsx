import Image from "next/image"
import { RiSearch2Line } from "react-icons/ri"


function Hero() {
  return (
    <div className="mt-24 space-y-12 flex flex-col items-center">
        <div className="flex flex-col gap-12 lg:flex-row justify-between w-[80%] mx-auto">
            <div className="xl:w-fit py-2.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <div className="flex gap-1">
                    {
                        [1,2,3,4,5].map((ele)=> ( 
                            <Image key={ele} src={'/icons/Star.png'} alt="" width={20} height={20} />
                        ))
                    }
                </div>
                <p className="text-lg text-secondary font-medium">“Superb job matching service”</p>
            </div>
            <div className="xl:w-fit py-2.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <div className="flex gap-1">
                    {
                        [1,2,3,4,5].map((ele)=> ( 
                            <Image key={ele} src={'/icons/Star.png'} alt="" width={20} height={20} />
                        ))
                    }
                </div>
                <p className="text-lg text-secondary font-medium">“Found my perfect role fast”</p>
            </div>
            <div className="xl:w-fit py-2.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <div className="flex gap-1">
                    {
                        [1,2,3,4,5].map((ele)=> ( 
                            <Image key={ele} src={'/icons/Star.png'} alt="" width={20} height={20} />
                        ))
                    }
                </div>
                <p className="text-lg text-secondary font-medium">“Helped me find work quickly”</p>
            </div>
        </div>
        <h1 className="text-5xl xl:text-8xl font-extrabold xl:leading-[100px] text-center xl:w-[90%] mx-auto"><span className="text-primary text-nowrap">Explore new job</span> vacancies all over the world</h1>
        <p className="text-lg text-center xl:w-[50%] mx-auto text-secondary font-semibold">Our platform features more than 1.2 million job vacancies worldwide, connecting you with employers who value your skills and experience.</p>
        <div className="flex flex-col lg:flex-row gap-8">
            <div className=" bg-gray py-2.5 px-3.5 flex items-center rounded-xl">
                <RiSearch2Line className=""  /> 
                <input type="text" placeholder="Company or industry"  className="text-secondary outline-none px-8 bg-transparent xl:w-[400px]" />
                <select name="" id="" className="text-secondary border-l outline-none  bg-transparent py-1.5 px-3.5 xl:w-[100px]" >
                    <option value="25 mi">25 mi</option>
                </select>
            </div>
            <button className="bg-primary rounded-xl py-3.5 px-8">
                Search
            </button>
        </div>
        <div className="flex flex-wrap gap-3.5 justify-center xl:w-[30%] mx-auto">
            <div className="w-fit py-1.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <p className="text-sm text-primary">Remote</p>
            </div>
            <div className="w-fit py-1.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <p className="text-sm text-primary">Work from home</p>
            </div>
            <div className="w-fit py-1.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <p className="text-sm text-primary">Part-time</p>
            </div>
            <div className="w-fit py-1.5 px-3.5 rounded-lg flex flex-col space-y-3 items-center bg-gray ">
                <p className="text-sm text-primary">Design</p>
            </div>
        </div>
    </div>
  )
}


export default Hero
