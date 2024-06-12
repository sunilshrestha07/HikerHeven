import React, { useState } from "react";
import { reviewInterface } from "../declareInterface";

export default function Reviews() {
  const reviewsFromUser = [
    {name:'Suneel Shrestha',date:'2024/9/3',rating:4.6,comment:'Hiked from Mulkharka through chisapani in a loop. Takes about as long as this hike did and covers similar terrain so leaving review here. Amazing hike. The beginning is mostly uphill up steps for several hours so be aware of that. The second half is mostly downhill but only the last 20 minutes or so is down steps. Also a really nice restaurant in Nuwakot - called Sitaram restaurant I think just outside Chisapani, makes a great halfway house. Food made to order so takes a while to receive it but filling and traditional Nepalese cuisine. Great for restocking energy!',image:'/crouselImage/lowOne.jpg'},  

    {name:'Suneel Shrestha',date:'2024/9/3',rating:3.5,comment:'Hiked from Mulkharka through chisapani in a loop. Takes about as long as this hike did and covers simive it but filling and traditional Nepalese cuisine. Great for restocking energy!',image:'/crouselImage/lowOne.jpg'},
    
    {name:'Suneel Shrestha',date:'2024/9/3',rating:3.3,comment:'Hiked from Mulkharka through chisapani in a loop. Takes about as long as this hike did and covers similar terrain so leaving review here. Amazing hike. The beginning is mostly uphill up steps for several hours so be aware of that. Tve it but filling and traditional Nepalese cuisine. Great for restocking energy!',image:'/crouselImage/lowOne.jpg'},
  ]
  const [starRating, setStarRating] = useState<number>(0);
  const [hoverStarRating, setHoverStarRating] = useState<number>(0);
  const [reviewFormData, setReviewFormData] = useState<reviewInterface>({});

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewFormData({ ...reviewFormData, review: e.target.value });
  };

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", reviewFormData,'rating:',starRating);
  };

  const filledStarSrc = "/navImages/ystar.png";
  const emptyStarSrc = "/navImages/star.png";

  // Generate stars based on rating
const generateStars = (rating:number) => {
  const starCount = Math.floor(rating); // Get the integer part of the rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars.push(<img key={i} src={filledStarSrc} alt="Star" className="h-5 " />);
    } else{
      stars.push(<img key={i} src={emptyStarSrc} alt="Star" className="h-5 " />);
    }
  }
  return stars;
};


  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <div className=" border-b-2">
          <p className="font-Lora font-semibold text-xl sm:text-2xl">Reviews</p>
        </div>
        <div className="">
          <p className="font-Quicksand text-base sm:text-xl">4.5</p>
          <div className="flex flex-row gap-1">
            <img className="h-5" src={filledStarSrc} alt="Star" />
            <img className="h-5" src={filledStarSrc} alt="Star" />
            <img className="h-5" src={filledStarSrc} alt="Star" />
            <img className="h-5" src={filledStarSrc} alt="Star" />
            <img className="h-5" src={filledStarSrc} alt="Star" />
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <form onSubmit={handleReviewSubmit}>
            <div className="flex flex-row items-center gap-6">
              <p className="font-Lora text-xl sm:text-2xl">Give your reviews</p>
              <div className="">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <img
                        key={index}
                        src={ratingValue <= (hoverStarRating || starRating) ? filledStarSrc : emptyStarSrc}
                        alt={`${ratingValue} star`}
                        className="cursor-pointer h-5 "
                        onClick={() => setStarRating(ratingValue)}
                        onMouseEnter={() => setHoverStarRating(ratingValue)}
                        onMouseLeave={() => setHoverStarRating(0)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2 mt-2">
              <div className="">
                <textarea className="w-full sm:w-8/12 font-Quicksand border-2 border-gray-300 p-4 rounded-md outline-none" name="" id="review" placeholder="Write your review" rows={4} onChange={handleReviewChange}></textarea>
              </div>
              <div className="">
                <button type="submit" className="bg-darkGreen text-white font-Lora text-base sm:text-xl px-5 py-2 rounded-full">Submit Review</button>
              </div>
            </div>
          </form>
        </div>

        {/* display reviews */}
        <div className="">
          <div className=" flex flex-col gap-8 mt-10 ">
            {reviewsFromUser.map((review, index) => (
              <div className=" flex flex-col gap-3 border-t-2 py-4"key={index}>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <img className="h-12 lg:h-14 aspect-square rounded-full" src={review.image} alt="" />
                  <div className=" font-Lora">
                    <p className="font-semibold text-base lg:text-xl">{review.name}</p>
                    <p className="opacity-80 text-xs">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 ">
                  {generateStars(review.rating)}
                </div>
                <div className="">
                  <p className=" font-Quicksand text-sm lg:text-base">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
