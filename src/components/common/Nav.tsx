import Image from "next/image"
import Link from "next/link"



const Nav = ()=>{
    return (

        <div className="py-3.5 flex justify-between items-center">
            <Image src={'/logo.png'} alt="" width={150} height={120} />
            <ul className="hidden md:flex gap-3.5 justify-between text-secondary">
                <li>
                    <Link href={''}>Post job</Link>
                </li>
                <li>
                    <Link href={''}>Salaries</Link>
                </li>
                <li>
                    <Link href={''}>Blog</Link>
                </li>
                <li>
                    <Link href={''}>Employees</Link>
                </li>
                <li>
                    <Link href={''}>About us</Link>
                </li>
            </ul>
            <button className="text-lg text-white rounded-md border border-primary py-1.5 px-5">
                Sign In
            </button>
        </div>
    )
}

export default Nav