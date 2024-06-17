import { useDispatch, useSelector } from "react-redux"
import Announcement from "../components/Announcement"
import Crousel from "../components/Crousel"
import Favorites from "../components/Favorites"
import FindMore from "../components/FindMore"
import Trails from "../components/Trails"
import { paddingSize } from "../declareSize"
import ScrollToTop from "../function/ScrollToTop"
import { RootState } from "../Redux/store"
import Loader from "../components/Loader"
import { postInterface } from "../declareInterface"
import { useEffect, useState } from "react"
import { baseUrl } from "../config"
import axios from "axios"
import { getAllHikes } from "../Redux/postSlice"

export default function Home() {
  const dispatch = useDispatch()
  const isLoaded = useSelector((state:RootState)=>state.post.isloaded)

  const [favoriteHikes, setFavoriteHikes] = useState<postInterface[]>([]);
  const getAllPost = async () => {
        try {
            const res = await axios.get(`${baseUrl.baseUrl}/api/post/getallpost`);
            if (res.status === 200) {
                setFavoriteHikes(res.data);
                dispatch(getAllHikes(res.data));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            
        }
    };
    useEffect(() => {
      getAllPost();
      console.log(favoriteHikes)
  }, []);
  ScrollToTop()
  return (
    <div>
      <div className="">
        {isLoaded ? (
          <div className="flex flex-col gap-10">
            <div className={paddingSize}>
              <Crousel/>
            </div>
            <div className={paddingSize}>
              <Favorites/>
            </div>
            <div className="">
              <Trails/>
            </div>
            <div className={paddingSize}>
              <FindMore/>
            </div>
            <div className={paddingSize}>
              <Announcement/>
            </div>
        </div>
        ):(
          <div className=" flex justify-center items-center font-Lora font-semibold w-full aspect-[16/7]">
          <div className=" w-1/2 flex flex-col gap-3">
            <div className=" sm:mt-28">
              <Loader/>
            </div>
            <p className=" text-2xl text-center">Loading...</p>
            <p className=" text-sm opacity-80 text-center">Our website is starting up. Please bear with us as we prepare everything for you. Please note that we are using a free hosting service, which may cause a slight delay in loading.
            Please reload onlce after a minute
            </p>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}
