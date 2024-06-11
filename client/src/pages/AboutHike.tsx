import { paddingSize } from "../declareSize"

export default function AboutHike() {
  const aboutHike = {name:'ChampaDevi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowOne.jpg',level:'hard'}

  return (
    <>
      <div className="">
        <div className={`${paddingSize} mt-10`}>
          <div className=" rounded-lg overflow-hidden ">
              <div className=" relative w-full h-full">
                <div className="">
                  <img className=" w-full aspect-video sm:aspect-[5/2] object-cover object-center" src={aboutHike.image} alt="" />
                </div>
                {/* discrition about the hike */}
                <div className="font-Lora absolute bottom-0 left-0 text-white w-full h-full flex flex-col justify-end items-start py-5 px-10 bg-gradient-to-t from-black to-transparent gap-2"></div>

                <div className="font-Lora text-white flex flex-col justify-end items-start py-2 px-4 sm:gap-2 absolute bottom-2 sm:bottom-5 sm:left-5">
                    <div className=" flex flex-row gap-2 sm:gap-4 items-center">
                      <p className=" text-xl sm:text-5xl">{aboutHike.name}</p>
                        <div className=" bg-white p-1 sm:p-2 flex flex-col justify-center items-center rounded-full aspect-square">
                          <img className=" h-3 sm:h-4" src="/navImages/save.png" alt="" />
                        </div>
                    </div>
                    <div className=" opacity-95 flex flex-row items-center gap-2 ">
                      <p className="text-base sm:text-2xl">{aboutHike.level}</p>
                        <img className=" h-3 sm:h-5" src="/navImages/ystar.png" alt="" />
                          <p className="text-base sm:text-2xl">{aboutHike.rating}</p>
                    </div>
                    <p className="text-base sm:text-2xl">{aboutHike.location}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
