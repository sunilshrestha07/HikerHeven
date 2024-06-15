import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";
import Hamburger from "./Hamburger";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

export default function Navbar() {
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const savedHikes =useSelector((state:RootState)=>state.saved.savedhikes)
    const noOfSavedHikes = savedHikes.length

    return (
        <nav>
            <div className=" ">
                <div className={`${paddingSize} flex justify-between sm:grid sm:grid-cols-7 items-center`}>
                    {/* Logo section */}
                    <div className="col-span-2 lg:col-span-3 flex items-center">
                        <Link to="/">
                            <p className="text-xl font-Lora uppercase font-bold text-darkGreen ">HikerHeven</p>
                        </Link>
                    </div>

                    {/* Navigation links */}
                    <div className="col-span-5 lg:col-span-4 flex justify-between items-center font-Quicksand font-semibold lg:text-xl">
                        {/* Desktop navigation */}
                        <div className="hidden sm:flex justify-between items-center w-5/6">
                            <div className="hover:text-lightGreen">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="hover:text-lightGreen">
                                <Link to="/contact">Contact Us</Link>
                            </div>
                            <div className="hover:text-lightGreen">
                                <Link to="/about">About Us</Link>
                            </div>
                            <div className="hover:text-lightGreen relative">
                                <Link to="/saved">Saved</Link>
                                {noOfSavedHikes > 0 ? (
                                    <div className=" bg-darkGreen w-3 h-3 rounded-full absolute -top-1 -right-3">
                                    </div>
                                ):(
                                    ""
                                )}
                            </div>
                        </div>

                        {/* Profile and Hamburger menu */}
                        <div className="flex gap-8 items-center">
                            {/* if currentUser is available goto page dashboard else singup page */}
                            {currentUser ? (
                            <div className="">
                                <Link to='/dashboard?tab=profile'>
                                    <img className="h-10 w-10 rounded-full" src={currentUser.avatar} alt="avatar" />
                                </Link>
                            </div>
                            ):(
                                <Link to='/signup'>
                                    <img className="h-6 sm:h-5 lg:h-6 -mt-1" src="./navImages/profile.png" alt="" />
                                </Link>
                            )}


                            {/* Hamburger menu */}
                            <div className="sm:hidden">
                                <Hamburger />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
