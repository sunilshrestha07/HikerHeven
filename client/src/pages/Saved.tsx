import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { clearHike, deleteSpecificHike } from "../Redux/savedSlice";

export default function Saved() {
  const savedHikes = useSelector((state: RootState) => state.saved.savedhikes);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const noOfSavedHikes = savedHikes.length;
  const dispatch = useDispatch();

  const handleDeleteFromSaved = (hikeId: string) => {
    dispatch(deleteSpecificHike(hikeId));
  };

  const handelClear = () =>{
    dispatch(clearHike())
  }

  return (
    <>
      <div>
        <div className={`${paddingSize} flex flex-col gap-10 mt-20`}>
          {currentUser ? (
            <div>
              <div className="flex flex-col gap-3">
                <p className="font-Lora text-xl sm:text-4xl font-semibold">Saved Hikes</p>
                <div className=" flex justify-between">
                {noOfSavedHikes ? (
                  <div className=" flex justify-between w-full">
                    <p className="font-Lora text-base sm:text-xl font-medium opacity-70 capitalize">Total hikes: {noOfSavedHikes}</p>
                    <button className=" font-Lora sm:text-xl text-red-400" onClick={handelClear}>Clear All</button>
                  </div>
                ) : (
                  <p></p>
                )}
                </div>
              </div>
              <div>
                {savedHikes.length > 0 ? (
                  <div></div>
                ) : (
                  <div className="font-Lora text-xl sm:text-4xl font-semibold w-full text-center pt-16">
                    <p>You have no saved hikes!</p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8">
                  {savedHikes
                    // showing only 4 hikes
                    .map((hike, index) => (
                      <div className="col-span-1 cursor-pointer relative" key={index}>
                        <Link to={`/aboutHike/${hike._id}`}>
                          <div>
                            <div className="w-full aspect-video object-cover rounded-xl overflow-hidden">
                              <img
                                className="w-full h-full hover:scale-110 transition ease-in-out duration-200"
                                src={hike.image}
                                alt=""
                              />
                            </div>
                            <div className="mt-1 p-1">
                              <p className="text-xs sm:text-base font-Lora font-semibold">{hike.name}</p>
                              <p className="text-xs sm:text-base font-Lora opacity-90">{hike.district}</p>
                              <div className="flex gap-2 items-center">
                                <p className="text-xs sm:text-base font-Lora opacity-90">{hike.rating}</p>
                                <img src="/navImages/star.png" className="h-3" alt="" />
                                <p className="text-xs sm:text-base font-Lora opacity-90">{hike.level}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div
                          className="flex justify-center items-center bg-white rounded-full absolute top-2 right-2 p-1 hover:bg-lightGreen"
                          onClick={() => handleDeleteFromSaved(hike._id || "")}
                        >
                          <img className="h-3 sm:h-5" src="/navImages/close.png" alt="" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <p className="font-Lora text-xl sm:text-4xl font-semibold">Saved Hikes</p>
              </div>
              <div className="flex justify-center text-2xl text-darkGreen font-Lora font-semibold">
                Login to save hike!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
