import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";

export default function HikesPage() {
  const favorite =[
    {name:'ChampaDevi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowOne.jpg',level:'hard'},
    {name:'Pia Park',location:'Ekantakuna',rating:'4.5',image:'/crouselImage/lowTwo.jpg',level:'moderate'},
    {name:'Gomba Devi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowThree.jpg',level:'easy'},      
    {name:'Godawari',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowFour.jpg',level:'hard'},
    {name:'ChampaDevi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowFive.jpg',level:'hard'},
    {name:'Pia Park',location:'Ekantakuna',rating:'4.5',image:'/crouselImage/lowTwo.jpg',level:'moderate'},
    {name:'Gomba Devi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowThree.jpg',level:'easy'},      
    {name:'Godawari',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowFour.jpg',level:'hard'},
    {name:'ChampaDevi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowFive.jpg',level:'hard'},
    {name:'ChampaDevi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowOne.jpg',level:'hard'},
    {name:'Pia Park',location:'Ekantakuna',rating:'4.5',image:'/crouselImage/lowTwo.jpg',level:'moderate'},
    {name:'Gomba Devi',location:'Laltipur',rating:'4.5',image:'/crouselImage/lowThree.jpg',level:'easy'}, 
]
  return (
    <>
      <div className="">
        <div className={paddingSize}>
          <div className="">
            <p className="font-Lora text-4xl font-semibold">Find your best hike</p>
          </div>
          <div className="">
          <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-8  ">
                            {favorite
                            //showing only 4 hikes
                            .map((hike,index)=>(
                                <div className=" col-span-1 cursor-pointer relative" key={index}>
                                    <Link to='/aboutHike'>
                                        <div className="">
                                            <div className="w-full aspect-video object-cover rounded-xl overflow-hidden">
                                                <img className=" w-full h-full hover:scale-110 transition ease-in-out duration-200" src={hike.image} alt="" />
                                            </div>
                                            <div className=" mt-1 p-1">
                                                <p className="text-xs sm:text-base font-Lora font-semibold">{hike.name}</p>
                                                <p className="text-xs sm:text-base font-Lora opacity-90">{hike.location}</p>
                                                <div className=" flex gap-2  items-center">
                                                    <p className="text-xs sm:text-base  font-Lora opacity-90">{hike.rating}</p>
                                                    <img src="/navImages/star.png" className="h-3 " alt="" />
                                                    <p className="text-xs sm:text-base  font-Lora opacity-90">{hike.level}</p>
                                                </div>
                                            </div>
                                        </div>  
                                    </Link>
                                    {/* for adding to saved */}
                                    <div className="flex justify-center items-center bg-white rounded-full absolute top-2 right-2 p-1">
                                        <img className=" h-3 sm:h-5" src="/navImages/save.png" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
          </div>
        </div>
      </div>
    </>
  )
}
