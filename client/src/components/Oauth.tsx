import { app } from '../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export default function Oauth() {
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
      console.log(userData)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <button
        className=' px-6 py-2 rounded-full flex gap-3 items-center font-Quicksand border-2 border-gray-300 font-medium'
        onClick={handleGoogleClick}>
            <img className='h-4' src="./navImages/google.png" alt="" />
            <p>Sing in with google</p>
      </button>
    </>
  );
}