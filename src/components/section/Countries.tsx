import Image from "next/image"
import CountriesCard from "../Cards/CountriesCard"
import { countries } from "@/lib/const"


function Countries() {
  return (
    <div className="mt-24 rounded-3xl bg-gray py-12">
        <h1 className="text-4xl text-center font-bold">Countries for Job Seekers</h1>
        <div className="grid lg:grid-cols-3 gap-8 p-12 ">
            {
                countries.map((ele)=> (
                    <CountriesCard key={ele.name} name={ele.name} description={ele.description} status={ele.status} symbol={ele.symbol} img={ele.img} rate={ele.rate} />
                ))
            }
        </div>
    </div>
  )
}

export default Countries