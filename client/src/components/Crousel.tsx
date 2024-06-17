import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Search from './Search';

export default function Crousel() {
  //not shoiwng the indicator of the crousel if the screen is smaller than 640 px
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640); 
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [searchedHike, setSearchedHike] = useState<string | null>(null);
  const handelSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setSearchedHike(e.target.value)
  }
  console.log(searchedHike)
  // Array of images to map and show in the carousel
  const crouselImages = [
    { lowImg: "/crouselImage/lowOne.jpg" },
    { lowImg: "/crouselImage/lowTwo.jpg" },
    { lowImg: "/crouselImage/lowThree.jpg" },
    { lowImg: "/crouselImage/lowFour.jpg" },
    { lowImg: "/crouselImage/lowFive.jpg" },
  ];

  return (
    <div className="">
      <div className=" ">
        <div className=" relative">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showIndicators={!isSmallScreen}
          >
            {crouselImages.map((item, index) => (
              <div className="h-full w-full overflow-hidden bg-no-repeat " key={index}>
                  <img className='w-full object-cover object-center aspect-[16/7] rounded-xl' src={item.lowImg} alt={`Low res slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className=" absolute top-[17%] sm:top-[20%] right-[50%] translate-x-[50%] flex-col flex justify-center items-center gap-8 w-full">
        <div className=" w-full flex justify-center items-center">
          <p className='text-3xl sm:text-5xl lg:text-7xl text-white font-Lora font-semibold text-stroke'>Find Your hikes</p>
        </div>
        <div className=" w-10/12 sm:w-2/4 bg-white rounded-full overflow-hidden border-2 sm:border-none ">
            <form className=' w-11/12 flex items-center justify-between' action="">
              <input className=' py-3 px-5 sm:px-8 sm:py-5 w-full text-sm sm:text-2xl font-Quicksand  outline-none ' type="search" name="" id="" placeholder='Search by city or hike name' onChange={handelSearch} />
              <button>
                <img className=' h-4 sm:h-7' src="./navImages/search.png" alt="" />
              </button>
            </form>
        </div>
            <div className=" absolute top-[100%] right-[50%] translate-x-[50%] mt-3 w-1/2  rounded-xl overflow-hidden">
              <Search searchItem={searchedHike} />
            </div>
      </div>
    </div>
  );
}
