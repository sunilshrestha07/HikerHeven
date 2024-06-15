import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";
import { useEffect, useState } from "react";

export default function Recommendation() {
    const RecommendationHike = useSelector((state: RootState) => state.post.hikes);
    const [randomIndices, setRandomIndices] = useState<number[]>([]);

    // Function to generate three unique random indices
    const generateRandomIndices = (): number[] => {
        const lengthOfHike = RecommendationHike.length;
        const indices: number[] = [];
        while (indices.length < 3) {
            const randomIndex = Math.floor(Math.random() * lengthOfHike);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        return indices;
    };

    useEffect(() => {
        // Generate random indices on component mount or whenever RecommendationHike changes
        const indices = generateRandomIndices();
        setRandomIndices(indices);
    }, [RecommendationHike]); // Dependency array to watch for changes in RecommendationHike

    return (
        <>
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <div className="font-Lora text-xl sm:text-2xl font-semibold">
                        <p>Recommendation</p>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="grid grid-rows-1 gap-8">
                                {randomIndices.map((index, idx) => {
                                    const hike = RecommendationHike[index];
                                    if (!hike) return null; // Handle cases where hike is undefined

                                    return (
                                        <div className="cursor-pointer relative" key={idx}>
                                            <Link to={`/aboutHike/${hike._id}`}>
                                                <div className="">
                                                    <div className="w-full aspect-video object-cover rounded-xl overflow-hidden">
                                                        <img className="w-full h-full hover:scale-110 transition ease-in-out duration-200" src={hike.image} alt="" />
                                                    </div>
                                                    <div className="mt-1 p-1 px-0">
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
                                            {/* For adding to saved */}
                                            <div className="flex justify-center items-center bg-white rounded-full absolute top-2 right-2 p-1">
                                                <img className="h-3 sm:h-5" src="/navImages/save.png" alt="" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
