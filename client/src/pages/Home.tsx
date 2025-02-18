import {useDispatch} from 'react-redux';
import Announcement from '../components/Announcement';
import Crousel from '../components/Crousel';
import Favorites from '../components/Favorites';
import FindMore from '../components/FindMore';
import Trails from '../components/Trails';
import {paddingSize} from '../declareSize';
import ScrollToTop from '../function/ScrollToTop';
import {postInterface} from '../declareInterface';
import {useEffect, useState} from 'react';
import {baseUrl} from '../config';
import axios from 'axios';
import {getAllHikes} from '../Redux/postSlice';

export default function Home() {
  const dispatch = useDispatch();
  const [favoriteHikes, setFavoriteHikes] = useState<postInterface[]>([]);
  const getAllPost = async () => {
    try {
      const res = await axios.get(`${baseUrl.baseUrl}/api/post/getallpost`);
      if (res.status === 200) {
        setFavoriteHikes(res.data);
        dispatch(getAllHikes(res.data));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getAllPost();
    console.log(favoriteHikes);
  }, []);
  ScrollToTop();
  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-10 mt-20">
          <div className={`${paddingSize} z-10`}>
            <Crousel />
          </div>
          <div className={paddingSize}>
            <Favorites />
          </div>
          <div className="">
            <Trails />
          </div>
          <div className={paddingSize}>
            <FindMore />
          </div>
          <div className={paddingSize}>
            <Announcement />
          </div>
        </div>
      </div>
    </div>
  );
}
