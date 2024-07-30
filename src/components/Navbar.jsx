import { navLinks } from "../constants"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";




const Navbar = () => {
  return (
    <div className="flex justify-between">
    <div className="flex w-2/6 justify-between">
        <a href="/">
            <p className="text-white text-3xl font-bold">D</p>
        </a>
        <ul className="flex gap-8">
            {navLinks.map((item)=>(
                <li className="text-xl font-semibold" key={item.label}>
                    <a 
                    href={item.href}
                    className="text-white hover-line"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        
    </div>
    <div className="flex items-center text-2xl w-40 justify-between ">
        <a href="/">
            <FaInstagram className="hover:-translate-y-2 duration-300 ease-in-out cursor-pointer"/>
        </a>
        <a href="/">
            <FaXTwitter className="hover:-translate-y-2 duration-300 ease-in-out cursor-pointer"/>
        </a>
        <a href="/">
            <FaMedium className="hover:-translate-y-2 duration-300 ease-in-out cursor-pointer"/>
        </a>

    </div>
    </div>
  )
}

export default Navbar