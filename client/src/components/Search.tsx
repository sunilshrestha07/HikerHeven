import React from "react";
import { searchProps } from "../declareInterface";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Link } from "react-router-dom";

const Search: React.FC<searchProps> = ({ searchItem }) => {
  const allPost = useSelector((state: RootState) => state.post.hikes);

  const filteredHikes = searchItem
    ? allPost.filter(
        (hike) =>
          hike.name?.toLowerCase().startsWith(searchItem.toLowerCase()) &&
          hike.name.toLowerCase() !== searchItem.toLowerCase() ||
          hike.district?.toLowerCase().startsWith(searchItem.toLowerCase()) &&
          hike.district.toLowerCase() !== searchItem.toLowerCase()
      )
    : [];

  return (
    <div className="w-full ">
      <div className="">
        {searchItem ? (
            <div className="text-sm sm:text-xl font-Quicksand font-medium bg-white w-full flex  flex-col z-50">
                {filteredHikes.length > 0 ? (
                filteredHikes.map((hike) => (
                    <div key={hike._id} className=" px-10 pt-5 pb-2 hover:bg-gray-100 cursor-pointer z-50">
                        <Link to={`aboutHike/${hike._id}`}>
                            <div className="">
                                <p className=" font-semibold">{hike.name}</p>
                                <div className=" opacity-60 text-base flex gap-2">
                                    <p>{hike.district}</p>
                                    <p>{hike.level}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
                ) : (
                <div>No results found</div>
                )}
          </div>
        ):(
            <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default Search;
