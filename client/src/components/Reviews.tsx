import React, { useEffect, useState } from "react";
import { reviewInterface, reviewProp, reviewdataInterface } from "../declareInterface";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import axios from "axios";
import { baseUrl } from "../config";
import { toast } from "react-toastify";
import moment from "moment";

const Reviews: React.FC<reviewProp> = ({ postId }) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [reviews, setReviews] = useState<reviewdataInterface[]>([]);
  const [starRating, setStarRating] = useState<number>(0);
  const [hoverStarRating, setHoverStarRating] = useState<number>(0);
  const [reviewFormData, setReviewFormData] = useState<reviewInterface>({
    rating: 0,
    userName: "",
    postId: "",
    userImage: "",
    comment: "",
  });
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewFormData({ ...reviewFormData, [e.target.id]: e.target.value });
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const updatedReview = {
      ...reviewFormData,
      rating: starRating,
      userName: currentUser?.name,
      postId: postId,
      userImage: currentUser?.avatar,
    };

    try {
      const res = await axios.post(`${baseUrl.baseUrl}/api/review/postreview`, updatedReview);
      if (res.status === 200) {
        toast.success("Review posted successfully!");
        setIsUploading(false);
        window.location.reload();
      }
    } catch (error: any) {
      setIsUploading(false);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred during review submission");
      } else {
        toast.error("An unknown error occurred during review submission");
      }
    }
  };

  const filledStarSrc = "/navImages/ystar.png";
  const emptyStarSrc = "/navImages/star.png";

  const generateStars = (rating: number) => {
    const starCount = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img key={i} src={i < starCount ? filledStarSrc : emptyStarSrc} alt="Star" className="h-5 " />
      );
    }
    return stars;
  };

  const handleReviewFetch = async () => {
    try {
      const res = await axios.get(`${baseUrl.baseUrl}/api/review/${postId}`);
      if (res.status === 200) {
        setReviews(res.data);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred during fetching reviews");
      } else {
        toast.error("An unknown error occurred during fetching reviews");
      }
    }
  };

  useEffect(() => {
    handleReviewFetch();
  }, [postId]);

  const handleDeleteReview = async (commentId: string) => {
    try {
      const res = await axios.delete(`${baseUrl.baseUrl}/api/review/deletespecific/${commentId}`);
      if (res.status === 200) {
        toast.success("Review deleted successfully");
        handleReviewFetch();
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred during deletion");
      } else {
        toast.error("An unknown error occurred during deletion");
      }
    }
  };

  const filteredReviews = reviews.filter((review) => review.postId === postId);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="border-b-2">
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
                <textarea
                  className="w-full sm:w-8/12 font-Quicksand border-2 border-gray-300 p-4 rounded-md outline-none"
                  id="comment"
                  placeholder="Write your review"
                  rows={4}
                  onChange={handleReviewChange}
                ></textarea>
              </div>
              <div className="">
                <button
                  type="submit"
                  className={`bg-darkGreen text-white font-Lora text-base sm:text-xl px-5 py-2 rounded-full ${isUploading ? "opacity-50" : ""}`}
                  disabled={isUploading}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="">
          {filteredReviews.length > 0 ? (
            <div className="flex flex-col gap-8 mt-10">
              {filteredReviews.map((review, index) => (
                <div className="flex flex-col gap-3 border-t-2 py-4" key={index}>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <img className="h-12 lg:h-14 aspect-square rounded-full object-cover" src={review.userImage} alt="" />
                    <div className="font-Lora">
                      <p className="font-medium text-base lg:text-xl">{review.userName}</p>
                      <p className="opacity-80 text-xs">{moment(review.createdAt).format("MMM Do YY")}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {generateStars(review.rating)}
                  </div>
                  <div className="">
                    <p className="font-Quicksand text-base">{review.comment}</p>
                    {currentUser?.name === review.userName && (
                      <button
                        onClick={() => handleDeleteReview(review._id)}
                        className="font-Quicksand font-medium text-red-500 text-sm sm:text-base"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No reviews!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
