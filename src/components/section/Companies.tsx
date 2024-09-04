import Image from "next/image"
import Heading from "../common/Heading"


function Companies() {
  return (
    <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-10">
        <Heading title="Get noticed by leading companies" subTitle="trusted by top companies" category="Companies" />
        <p className="w-[90%] font-medium lg:text-xl text-secondary">
            We collaborate with top organizations to bring you the best job opportunities, connecting you with leading employers who value your skills and expertise.
        </p>
        <ul className="space-y-5">
          <li className="flex items-center gap-3.5">
            <span className="h-8 w-8 flex items-center justify-center bg-primary rounded-full">1</span>
            <span className="text-sm lg:text-lg font-medium text-secondary">Over 150,000 new job postings added every month</span>
          </li>
          <li className="flex items-center gap-3.5">
            <span className="h-8 w-8 flex items-center justify-center bg-primary rounded-full">2</span>
            <span className="text-sm lg:text-lg font-medium text-secondary">Access job listings from 1,200+ leading companies</span>
          </li>
          <li className="flex items-center gap-3.5">
            <span className="h-8 w-8 flex items-center justify-center bg-primary rounded-full">3</span>
            <span className="text-sm lg:text-lg font-medium text-secondary">Receive personalized job alerts for 100+ job categories.</span>
          </li>
        </ul>
      </div>
      <div className="bg-gray w-fit h-full rounded-2xl px-12 py-5 flex flex-col justify-around items-center">
        <h2 className="uppercase text-lg text-center font-bold">TOP COMPANIES</h2>
        <div className="my-3.5 grid items-center justify-center grid-cols-3 gap-16">
            <Image src={`/sponsors/01.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/02.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/03.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/04.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/05.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/06.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/07.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/08.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/09.png`} alt=""  width={100} height={100} />
            <Image src={`/sponsors/010.png`} alt="" width={100} height={100} />
            <Image src={`/sponsors/011.png`} alt="" width={100} height={100} />
            <Image src={`/sponsors/012.png`} alt="" width={100} height={100} />
        </div>
      </div>
    </div>
  )
}

export default Companies
