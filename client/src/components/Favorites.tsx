import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHikes } from "../Redux/postSlice";
import { savedHikes } from "../Redux/savedSlice";
import { RootState } from "../Redux/store";
import { Hike, postInterface } from "../declareInterface";
import { toast } from 'react-toastify';


export default function Favorites() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const [favoriteHikes, setFavoriteHikes] = useState<postInterface[]>([]);
    const hikes = useSelector((state: RootState) => state.post.hikes);

    useEffect(() => {
        getAllPost();
    }, []);

    const getAllPost = async () => {
        try {
            const res = await axios.get(`${baseUrl.baseUrl}/api/post/getallpost`);
            if (res.status === 200) {
                setFavoriteHikes(res.data);
                dispatch(getAllHikes(res.data));
                console.log(favoriteHikes)
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            
        }
    };

    const handleSaveHike = (hike: postInterface) => {
        const { _id, name, rating, district, description, image, map, level } = hike;
        const hikeToSave: Hike = { _id, name, rating, district, description, image, map, level };
        dispatch(savedHikes([hikeToSave])); 
    };

    return (
        <>
            <div className="">
                <div className="flex flex-col gap-4">
                    <div className="font-Lora text-xl sm:text-3xl font-semibold">
                        <p>Local Favorites</p>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
                            {hikes
                            .slice(0,4)
                            .map((hike, index) => (
                                <div className="col-span-1 cursor-pointer relative" key={index}>
                                    <Link to={`/aboutHike/${hike._id}`}>
                                        <div className="">
                                            <div className="w-full aspect-video object-cover rounded-xl overflow-hidden">
                                                <img className="w-full h-full hover:scale-110 transition ease-in-out duration-200" src={hike.image} alt="" />
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
                                    <div className="flex justify-center items-center bg-white rounded-full absolute top-2 right-2 p-1" onClick={currentUser ? () => handleSaveHike(hike) : () => toast.info("login first")}>
                                        <img className="h-3 sm:h-5" src="/navImages/save.png" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
