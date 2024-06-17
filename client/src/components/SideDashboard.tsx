import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";

export default function SideDashboard() {
    const currentUser = useSelector((state:RootState)=>state.user.currentUser)
    
    return (
        <div className="h-full border-r-2">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <Link to="/dashboard?tab=profile">
                        <div className="flex justify-center font-semibold items-center gap-4 font-Quicksand  text-xl w-full aspect-[16/8] p-3 border-b-2">
                            <img className="h-4" src="./navImages/sprofile.png" alt="Profile" />
                            <p>Profile</p>
                        </div>
                    </Link>
                    {currentUser?.isAdmin && (
                        <div className="">
                        <Link to="/dashboard?tab=addpost">
                            <div className="flex justify-center font-semibold items-center gap-4 font-Quicksand  text-xl w-full aspect-[16/8] p-3 border-b-2">
                                <img className="h-4" src="/navImages/post.png" alt="Add Post" />
                                <p>Add Post</p>
                            </div>
                        </Link>

                        <Link to="/dashboard?tab=allinfo">
                            <div className="flex justify-center font-semibold items-center gap-4 font-Quicksand  text-xl w-full aspect-[16/8] p-3 border-b-2">
                                <img className="h-4" src="/navImages/info.png" alt="Add Post" />
                                <p>All Info</p>
                            </div>
                        </Link>
                        </div>
                    )}
                </div>
                <div className=" flex flex-col items-center ">
                    <img className=" w-7 sm:w-10 aspect-square rounded-full object-cover" src={currentUser?.avatar} alt="User" />
                        <p className=" opacity-85 font-Quicksand text-xs lg:text-sm">{currentUser?.name}</p>
                        <p className=" opacity-85 font-Quicksand text-xs lg:text-base">{currentUser?.email}</p>
                </div>
            </div>
        </div>
    );
}
