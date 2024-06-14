import { app } from '../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { loginSuccess } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Oauth() {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null);
  const [isErrorDisplayActive, setIsErrorDisplayActive] = useState(false);
  const timeout = 3000; // Timeout duration in milliseconds
  const dispatch = useDispatch()
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      const {email , displayName , photoURL}=resultFromGoogle.user;

      const userData = {
        email,
        name: displayName,
        avatar: photoURL
      }
      const res = await axios.post(`${baseUrl.baseUrl}/api/user/googlelogin`,userData)
        if(res.status === 200){
          dispatch(loginSuccess(res.data))
          console.log('login with google success')
          navigate('/')
        }
      } catch (error: any) {
        console.error('Sign up failed', error);
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.message || 'An error occurred during sign up');
        } else {
            setError('An unknown error occurred during sign up');
        }
        setIsErrorDisplayActive(true);
    }
  };

  useEffect(() => {
    if (isErrorDisplayActive) {
        const timer = setTimeout(() => {
            setIsErrorDisplayActive(false);
        }, timeout);

        return () => clearTimeout(timer);
    }
}, [isErrorDisplayActive, timeout]);

  return (
    <>
      <button
        className=' px-6 py-2 rounded-full flex gap-3 items-center font-Quicksand border-2 border-gray-300 font-medium'
        onClick={handleGoogleClick}>
            <img className='h-4' src="./navImages/google.png" alt="" />
            <p>Sing in with google</p>
      </button>
      <div className="">
        <div className=" flex items-center justify-center absolute -top-2 left-1/2 transform -translate-x-1/2 font-Quicksand text-xl w-full">
          {isErrorDisplayActive && <div className="text-red-500 mt-4 w-fulltext-center">{error}</div>}
        </div>
      </div>
    </>
  );
}