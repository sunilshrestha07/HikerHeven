import { Link } from "react-router-dom";


export default function Announcement() {
  return (
    <>
        <div className="">
            <div className="grid  sm:grid-rows-none sm:grid-cols-3 bg-gray-100 rounded-2xl  overflow-hidden">
                <div className="  sm:col-span-2 px-5 lg:px-16 py-5 lg:py-10 order-2 sm:order-1 ">
                    <div className=" flex flex-col gap-5 xl:gap-10 ">
                        <div className="flex flex-col gap-2">
                            <p className="font-Lora text-2xl xl:text-4xl font-semibold">Join Us for an Unforgettable Hike to Bethanchowk</p>
                            <div className=" font-Quicksand text-sm lg:text-base flex gap-3 xl:gap-4 opacity-80 font-semibold text-darkGreen">
                                <p>August 10</p>
                                <p>Challanging</p>
                                <p>2.5km</p>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-start gap-5 xl:gap-10 xl:w-3/4">
                            <p className=" font-Quicksand text-sm sm:text-sm xl:text-xl">Experience the breathtaking beauty of Kalinchwok on an exciting hike with HIkerHeven . Immerse yourself in nature's majesty as we trek through picturesque trails, surrounded by stunning mountain vistas and lush forests.</p>
                            <Link to='/register'>
                                <button className=" bg-darkGreen font-Lora text-base xl:text-xl px-5 py-2 rounded-full text-white hover:text-black hover:bg-lightGreen ">Register today</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" col-span-1 order-1 sm:order-2 ">
                    <img className=" h-full aspect-video sm:w-full sm:aspect-[6/7] object-cover object-center" src="/crouselImage/announcement.jpg" alt="" />
                </div>

            </div>
        </div>  
    </>
  )
}
