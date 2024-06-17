import { app } from '../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { loginSuccess } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Oauth() {
  const navigate = useNavigate()
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
          toast.success('login with google success')
          navigate('/')
        }
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
            toast.error(error.response?.data?.message || 'An error occurred during sign up');
        } else {
            toast.error('An unknown error occurred during sign up');
        }
    }
  };

  return (
    <>
      <button
        className=' px-6 py-2 rounded-full flex gap-3 items-center font-Quicksand border-2 border-gray-300 hover:bg-gray-300 font-medium'
        onClick={handleGoogleClick}>
            <img className='h-4' src="./navImages/google.png" alt="" />
            <p>Sign in with google</p>
      </button>
    </>
  );
}