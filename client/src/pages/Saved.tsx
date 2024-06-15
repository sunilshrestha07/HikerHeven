import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

export default function Saved() {
  const savedHikes =useSelector((state:RootState)=>state.saved.savedhikes)
  const noOfSavedHikes = savedHikes.length
  return (
    <>
      <div className="">
        <div className={`${paddingSize} flex flex-col gap-10`}>
          <div className=" flex flex-col gap-3">
            <p className="font-Lora text-xl sm:text-4xl font-semibold">Saved Hikes</p>
            {noOfSavedHikes ? (
              <p className="font-Lora text-base sm:text-xl font-medium opacity-70 capitalize">Total hikes : {noOfSavedHikes}</p>
            ):(
              <p></p>
            )}
          </div>
          <div className="">
            {savedHikes.length > 0 ? (
              <div className=""></div>
            ):(
              <div className=" font-Lora text-xl sm:text-4xl font-semibold w-full text-center">
                <p>You have no saved hikes !</p>
              </div>
            )}
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8  ">
                {savedHikes 
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
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
