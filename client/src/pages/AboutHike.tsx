import MapComponent from "../components/MapComponent"
import Recommendation from "../components/Recommendation"
import Reviews from "../components/Reviews"
import { paddingSize } from "../declareSize"
import ScrollToTop from "../function/ScrollToTop"

export default function AboutHike() {
  const aboutHike = 
  {name:'ChampaDevi',
    location:'Laltipur',
    rating:'4.5',
    image:'/crouselImage/lowOne.jpg',
    level:'hard',
    description:'One of the best places to hike around Kathmandu Valley. Your hike begins from North side of Kathmandu valley Sundarjal, and on the trail you will be able to witness sources of fresh water, beautiful villages and their culture, variation on vegetation, and the majestic Himalayan range. There are places to buy water and food throughout the trip especially in the 1st half of the trek.',
    iframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.510276911561!2d85.30713717553922!3d27.670619476203676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19062bbc2a01%3A0xf5a732c7d6747814!2z4KSJ4KSa4KWN4KSaIOCktuCkv-CkleCljeCkt-CkvuCkueCksOClguCkleCliyDgpI_gpLjgpL_gpK_gpL7gpLLgpYAg4KS14KS_4KSm4KWN4KSv4KS-4KSq4KWA4KSg!5e0!3m2!1sne!2snp!4v1718182165116!5m2!1sne!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}

  return (
    <>
      <div className="">
        <ScrollToTop/>
        <div className={`${paddingSize} mt-2 sm:mt-6`}>
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
              {/* lower part  */}
              <div className="">
                <div className=" grid sm:grid-rows-none sm:grid-cols-6 gap-10">
                  {/* Description */}
                  <div className=" row-span-1 sm:col-span-4 py-6 flex flex-col gap-14">
                    <div className=" flex flex-col gap-1 sm:gap-2">
                      <p className=" font-Lora font-semibold text-xl sm:text-2xl">Description</p>
                      <p className=" font-Quicksand text-sm sm:text-base ">{aboutHike.description}</p>
                    </div>
                    {/* Reviews */}
                    <div className="">
                      <Reviews/>
                    </div>
                  </div>
                  {/* map and recommendation part */}
                  <div className="row-span-1 sm:col-span-2 border-t-4 sm:border-l-2 px-2 flex flex-col gap-6">
                    <div className=" w-full">
                      <MapComponent iframe={aboutHike.iframe} />
                    </div>
                    <div className="">
                      <Recommendation/>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
