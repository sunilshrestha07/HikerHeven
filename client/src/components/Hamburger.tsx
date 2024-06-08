import { useState } from "react"
import { Link } from "react-router-dom"

export default function Hamburger() {
    const menu = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Contact", link: "/contact"},
        {name: "Saved", link: "/saved"},    
    ]
    const handelToggle = () => {
        setIsMenuActive(!isMenuActive)
    }
    const [isMenuActive, setIsMenuActive] = useState<Boolean>(false)
  return (
    <>
        <div className=" ">
            <div className="">
                <img className=" h-7" src="./navImages/menu.png" alt="" onClick={handelToggle} />
            </div>
            <div className={isMenuActive ? "": "hidden"}>
                <div className=" absolute top-14 right-0 flex flex-col h-screen  w-screen items-center font-Quicksand text-2xl font-semibold gap-16 pt-16 transition ease-in-out duration-500" onClick={handelToggle}>
                    {menu.map((item, index) => (
                        <Link key={index} to={item.link} className="hover:text-lightGreen">{item.name}</Link >
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
