import Image from 'next/image'
import React from 'react'

interface Props {
    img        : string,
    name       : string,
    symbol     : string,
    rate       : string,
    status     : string,
    description: string,
}
function CountriesCard( {img, name, symbol, rate, status, description} : Props) {
  return (
    <div className="bg-lightgray p-8 space-y-12">
        <div className="space-y-8">
            <Image src={img} alt="" width={50} height={50} />
            <div className="space-y-2">
                <h1 className="text-xl font-bold ">{name} <span className="text-xs font-medium">{symbol}</span></h1>
                <p className="font-semibold text-secondary">{description}</p>
            </div>
        </div>
        <div className="flex gap-6">
            <div className="flex items-center gap-2.5">
                <Image src={'/icons/briefcase.png'} alt="" width={25} height={6} />
                <span>{rate}</span>
            </div>
            <div className="flex items-center gap-2.5">
                <Image src={'/icons/chart.png'} alt="" width={30} height={6} />
                <span>{status}</span>
            </div>
        </div>
    </div>
  )
}

export default CountriesCard