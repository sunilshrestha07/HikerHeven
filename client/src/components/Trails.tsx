import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";

export default function Trails() {

  return (
    <>
        <div className=" bg-gray-100">
            <div className={paddingSize}>
              <div className=" grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-0 sm:gap-14 py-5 sm:py-16">
                  <div className=" order-2 sm:order-1 row-span-1 sm:col-span-1 grid grid-cols-2 gap-5 sm:gap-8">
                      <Link to='/level/easy'>
                        <div className="relative">
                          <img className="w-full aspect-video object-cover object-center rounded-2xl " src="/crouselImage/easy.jpg" alt="" />
                          <p className=" text-sm absolute bottom-4 left-4 text-white sm:text-xl font-semibold font-Lora">Easy</p>
                        </div>
                      </Link>
                      <Link to='/level/moderate'>
                        <div className=" relative">
                          <img className="w-full aspect-video object-cover object-center rounded-2xl" src="/crouselImage/moderate.jpg" alt="" />
                          <p className="text-sm absolute bottom-4 left-4 text-white sm:text-xl font-semibold font-Lora">Moderate</p>
                        </div>
                      </Link>
                      <Link to='/level/challanging'>
                        <div className=" relative">
                          <img className="w-full aspect-video object-cover object-center rounded-2xl" src="/crouselImage/challanging.jpg" alt="" />
                          <p className="text-sm absolute bottom-4 left-4 text-white sm:text-xl font-semibold font-Lora">Challanging</p>
                        </div>
                      </Link>
                      <Link to='/level/hard'>
                        <div className=" relative">
                          <img className="w-full aspect-video object-cover object-center rounded-2xl" src="/crouselImage/hard.jpg" alt="" />
                          <p className="text-sm absolute bottom-4 left-4 text-white sm:text-xl font-semibold font-Lora">Hard</p>
                        </div>
                      </Link>
                  </div>
                  <div className=" row-span-1 order-1 sm:order-2 col-span-1 flex flex-col gap-2 sm:gap-3 xl:gap-6 justify-center items-start">
                    <p className="font-Lora text-xl lg:text-4xl font-semibold">Trails that fit your nature</p>
                    <p className="font-Quicksand text-sm lg:text-xl w-3/4">Whether you're pushing your limits or pushing a stroller, we've got you covered.</p>
                    <button className="bg-darkGreen px-2 sm:px-6 py-1 sm:py-2 font-Lora text-base lg:text-2xl text-white rounded-full hover:text-black hover:bg-lightGreen">Sign up</button>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}
