import { Link } from "react-router-dom"
import { paddingSize } from "../declareSize"
import Hamburger from "./Hamburger"
export default function Navbar() {
  return (
    <>
        <nav>
            <div className="">
                <div className={` ${paddingSize} flex justify-between sm:grid sm:grid-cols-7 items-center`}>
                    <div className="col-span-2 lg:col-span-3 flex items-center">
                        <Link to='/'><img className=" h-10 lg:h-12" src="./navImages/logo.svg" alt="" /></Link>
                    </div>
                    <div className=" col-span-5 lg:col-span-4 flex justify-between items-center font-Quicksand font-semibold lg:text-xl">
                        <div className=" hidden sm:flex justify-between items-center w-5/6 ">
                            <div className="hover:text-lightGreen">
                                <Link to="">Home</Link>
                            </div>
                            <div className="hover:text-lightGreen">
                                <Link to="/contact">Contact Us</Link>
                            </div>
                            <div className="hover:text-lightGreen">
                                <Link to="/about">About Us</Link>
                            </div>
                            <div className="hover:text-lightGreen">
                                <Link to="/saved">Saved</Link>
                            </div>
                        </div>
                        <div className=" flex gap-8 items-center">
                            <div className="">
                                <Link to='/dashboard'><img className="h-6 sm:h-5 lg:h-6 -mt-1" src="./navImages/profile.png" alt="" /></Link>
                            </div>
                            <div className=" sm:hidden">
                                <Hamburger/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
