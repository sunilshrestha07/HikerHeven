import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Hike, postInterface } from "../declareInterface";
import { savedHikes } from "../Redux/savedSlice";
import { toast } from "react-toastify";

export default function AllHikesPage() {
  const dispatch = useDispatch()
  const allHikes = useSelector((state:RootState)=>state.post.hikes)
  const currentUser = useSelector((state:RootState)=>state.user.currentUser)

  const handleSaveHike = (hike: postInterface) => {
    const { _id, name, rating, district, description, image, map, level } = hike;
    const hikeToSave: Hike = { _id, name, rating, district, description, image, map, level };
    dispatch(savedHikes([hikeToSave])); 
  };
  return (
    <>
      <div className="">
        <div className={`${paddingSize} flex flex-col gap-10`}>
          <div className=" flex flex-col gap-3">
            <p className="font-Lora text-xl sm:text-4xl font-semibold">Find your best hike</p>
          </div>
          <div className="">
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8  ">
                {allHikes 
                //showing only 4 hikes
                .map((hike,index)=>(
                    <div className=" col-span-1 cursor-pointer relative" key={index}>
                        <Link to={`/aboutHike/${hike._id}`}>
                            <div className="">
                                <div className="w-full aspect-video object-cover rounded-xl overflow-hidden">
                                    <img className=" w-full h-full hover:scale-110 transition ease-in-out duration-200" src={hike.image} alt="" />
                                </div>
                                <div className=" mt-1 p-1">
                                    <p className="text-xs sm:text-base font-Lora font-semibold">{hike.name}</p>
                                    <p className="text-xs sm:text-base font-Lora opacity-90">{hike.district}</p>
                                    <div className=" flex gap-2  items-center">
                                        <p className="text-xs sm:text-base  font-Lora opacity-90">{hike.rating}</p>
                                        <img src="/navImages/star.png" className="h-3 " alt="" />
                                        <p className="text-xs sm:text-base  font-Lora opacity-90">{hike.level}</p>
                                    </div>
                                </div>
                            </div>  
                        </Link>
                        {/* for adding to saved */}
                        <div className="flex justify-center items-center bg-white rounded-full absolute top-2 right-2 p-1"onClick={currentUser ? () => handleSaveHike(hike) : () => toast.info("Login first")}>
                            <img className=" h-3 sm:h-5" src="/navImages/save.png" alt="" />
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
