import { useParams } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import Recommendation from "../components/Recommendation";
import Reviews from "../components/Reviews";
import { paddingSize } from "../declareSize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Hike, postInterface } from "../declareInterface";
import { savedHikes } from "../Redux/savedSlice";
import { useEffect } from "react";

export default function AboutHike() {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>();
  const allHikes = useSelector((state: RootState) => state.post.hikes);
  const specificHike = allHikes.find(hike => hike._id === id);

  const currentUser = useSelector((state:RootState)=>state.user.currentUser)

  const handleSaveHike = (hike: postInterface) => {
    const { _id, name, rating, district, description, image, map, level } = hike;
    const hikeToSave: Hike = { _id, name, rating, district, description, image, map, level };
    dispatch(savedHikes([hikeToSave])); 
  }

  if (!specificHike) {
    return <div>Hike not found</div>;
  }

  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
    useEffect(() => {
      ScrollToTop();
    }, [specificHike]);

  return (
    <>
      <div className="">
        <div className={`${paddingSize} mt-16 sm:mt-24`}>
          <div className="rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              <div className="">
                <img
                  className="w-full aspect-video sm:aspect-[5/2] object-cover object-center"
                  src={specificHike.image ?? ""}
                  alt={specificHike.name ?? "Hike Image"}
                />
              </div>
              {/* Description about the hike */}
              <div className="font-Lora absolute bottom-0 left-0 text-white w-full h-full flex flex-col justify-end items-start py-5 px-4 sm:px-10 bg-gradient-to-t from-black to-transparent gap-2">
                <div className="font-Lora text-white flex flex-col justify-end items-start py-2 px-1 sm:px-4 sm:gap-2 absolute bottom-2 sm:bottom-5 sm:left-5">
                  <div className="flex flex-row gap-2 sm:gap-4 items-center">
                    <p className="text-xl sm:text-5xl">{specificHike.name}</p>
                    <div className="bg-white p-1 sm:p-2 flex flex-col justify-center items-center rounded-full aspect-square"
                    onClick={currentUser ? ()=>handleSaveHike(specificHike): ()=>alert('You need to login')}>
                      <img className="h-3 sm:h-4" src="/navImages/save.png" alt="Save" />
                    </div>
                  </div>
                  <div className="opacity-95 flex flex-row items-center gap-2">
                    <p className="text-base sm:text-2xl">{specificHike.level}</p>
                    <img className="h-3 sm:h-5" src="/navImages/ystar.png" alt="Rating" />
                    <p className="text-base sm:text-2xl">{specificHike.rating}</p>
                  </div>
                  <p className="text-base sm:text-2xl">{specificHike.district}</p>
                </div>
              </div>
            </div>
            {/* Lower part */}
            <div className="">
              <div className="grid sm:grid-rows-none sm:grid-cols-6 gap-10">
                {/* Description */}
                <div className="row-span-1 sm:col-span-4 py-6 flex flex-col gap-14">
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <p className="font-Lora font-semibold text-xl sm:text-2xl">Description</p>
                    <p className="font-Quicksand text-sm sm:text-base">{specificHike.description}</p>
                  </div>
                  {/* Reviews */}
                  <div className="">
                    <Reviews  postId={specificHike._id} />
                  </div>
                </div>
                {/* Map and Recommendation part */}
                <div className="row-span-1 sm:col-span-2 border-t-4 sm:border-t-0 sm:border-l-2 px-2 flex flex-col gap-6 mt-5 ">
                  <div className="w-full">
                    <MapComponent iframe={specificHike.map ?? ""} />
                  </div>
                  <div className="">
                    <Recommendation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
