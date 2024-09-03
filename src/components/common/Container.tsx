import { ReactNode } from "react"

interface Props {
    children : ReactNode
}

function Container({children} : Props) {
  return (
    <div className="pt-8 w-[90%] mx-auto lg:w-[80%]">
        {children}
    </div>
  )
}

export default Container