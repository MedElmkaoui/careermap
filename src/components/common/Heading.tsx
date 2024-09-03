import { subtle } from "crypto"

interface Props {
    subTitle : string
    title: string
    category : string
}

function Heading({subTitle, title, category} : Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3.5">
         <div className="py-2.5 px-5 text-sm lg:text-xl bg-gray rounded-lg text-primary">
            {category}
         </div>
         <span className="lg:text-xl text-sm ">{subTitle}</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold w-[90%]">
        {title}
      </h1>
    </div>
  )
}

export default Heading
