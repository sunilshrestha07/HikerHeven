import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideDashboard() {
    const [isAdmin, setIsAdmin] = useState<boolean>(true);
    const handelClick = () =>{
        setIsAdmin(!setIsAdmin)
    }
    
    return (
        <div className="h-full border-r-2">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <Link to="/dashboard?tab=profile">
                        <div className="flex justify-center font-semibold items-center gap-4 font-Quicksand  text-xl h-full p-3 border-b-2">
                            <img className="h-4" src="./navImages/sprofile.png" alt="Profile" />
                            <p>Profile</p>
                        </div>
                    </Link>
                    <Link to="/dashboard?tab=addpost">
                        <div className="flex justify-center font-semibold items-center gap-4 font-Quicksand  text-xl h-full p-3 border-b-2">
                            <img className="h-4" src="./navImages/post.png" alt="Add Post" />
                            <p>Add Post</p>
                        </div>
                    </Link>
                    {!isAdmin && (
                        <Link to="/dashboard?tab=all">
                            <div className="flex justify-center font-semibold items-center gap-4 font-Quicksand  text-xl h-full p-3 border-b-2 ">
                                <img className="h-4" src="./navImages/save.png" alt="Saved" />
                                <p>Saved</p>
                            </div>
                        </Link>
                    )}
                </div>
                <div className=" flex flex-col items-center ">
                    <img className=" w-7 sm:w-10 aspect-square rounded-full" src="./crouselImage/lowOne.jpg" alt="User" />
                        <p className=" opacity-85 font-Quicksand text-xs lg:text-base" onClick={handelClick}>suneel</p>
                        <p className=" opacity-85 font-Quicksand text-xs lg:text-base">suneelshrestha9@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
