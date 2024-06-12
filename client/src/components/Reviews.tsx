import React, { useState } from "react";
import { reviewInterface } from "../declareInterface";

export default function Reviews() {
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
            <div className="">
              <textarea className="w-full sm:w-8/12 font-Quicksand border-2 border-gray-300 p-4 rounded-md outline-none" name="" id="review" placeholder="Write your review" rows={4} onChange={handleReviewChange}></textarea>
            </div>
            <div className="">
              <button type="submit" className="bg-darkGreen text-white font-Lora text-base sm:text-xl px-5 py-2 rounded-full">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
