import { useState } from "react";
import { Link } from "react-router-dom";

export default function FindMore() {
    const [isHighImageLoaded, setIsHighImageLoaded] = useState<boolean>(false);

    return (
        <div className="">
            <div className="sm:mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden">
                    <div className="row-span-1 sm:col-span-1">
                        {isHighImageLoaded ? (
                            <img 
                                className="w-full aspect-auto object-cover object-center" 
                                src="/crouselImage/findHigh.jpg" 
                                alt="High quality nature trail" 
                            />
                        ) : (
                            <img 
                                className="w-full aspect-auto object-cover object-center" 
                                src="/crouselImage/find.jpg" 
                                alt="Nature trail" 
                                onLoad={() => setIsHighImageLoaded(true)}
                            />
                        )}
                    </div>
                    <div className="row-span-1 sm:col-span-1 bg-darkGreen w-full h-full px-6 py-3 lg:px-16 lg:py-5 flex flex-col gap-4 sm:gap-6 justify-center items-start">
                        <div className="font-Lora text-2xl sm:text-xl lg:text-3xl font-bold text-white">
                            <p>Step into nature's embrace, one trail at a time</p>
                        </div>
                        <p className="font-Manrope text-sm sm:text-xs lg:text-base text-white">
                            Embark on a journey of discovery as you lace up your boots and venture into the great outdoors.
                        </p>
                        <Link to="/level/all">
                            <button className="bg-lightGreen px-5 py-2 rounded-full font-Lora text-sm lg:text-xl font-semibold hover:text-white">
                                Find More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
