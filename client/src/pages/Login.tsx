import { useState } from "react";
import Oauth from "../components/Oauth"
import { loginFormDataInterface } from "../declareInterface";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import { loginSuccess  } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const [loginFormData, setLoginFormData] = useState<loginFormDataInterface>({
        email:'',
        password:''
    });
    const handelLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({...loginFormData,[e.target.id]:e.target.value})
    }

    //handeling login submittion
    const handelLoginSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await axios.post(`${baseUrl.baseUrl}/api/user/login`,loginFormData)
            if(res.status === 200){
                dispatch(loginSuccess(res.data))
                toast.success('login success')
                navigate('/')
                setIsLoading(false)
            }
        } catch (error: any) {
            console.error('login failed', error);
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'An error occurred during login up');
            } else {
                toast.error('An unknown error occurred during login up');
            }
            setIsLoading(false)
        }
    }

  return (
    <>
        <div className="  w-full flex justify-center items-center mt-20">
            <div className=" bg-gray-100 w-10/12 sm:w-3/5 xl:w-2/6 px-5 py-16 mt-8 rounded-md border-2 border-gray-300 flex flex-col gap-6 relative">
                <div className="flex justify-center items-center">
                    <img className="h-20" src="/navImages/logo.svg" alt="" />
                </div>
                <div className="">
                    <form className=" flex flex-col justify-center items-center gap-4" onSubmit={handelLoginSubmit}>
                        <div className=" flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold" >Email</label>
                            <input 
                            className=" font-Quicksand p-3 rounded-md border-2 border-gray-400 " 
                            type="email" name="" id="email" placeholder="Email" required
                            onChange={handelLogin}/>
                        </div>

                        <div className=" flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold" >Password</label>
                            <input 
                            className=" font-Quicksand p-3 rounded-md border-2 border-gray-400 " 
                            type="password" name="" id="password" placeholder="Password" required
                            onChange={handelLogin}/>
                        </div>
                        <button type="submit" className={`font-Lora bg-darkGreen hover:bg-lightGreen text-white hover:text-black p-3 rounded-full font-medium w-8/12 sm:w-1/2 mt-4 ${isLoading ? "opacity-50":''}`} disabled={isLoading}>Login</button>
                    </form>
                </div>
                <div className=" flex flex-col justify-center items-center gap-5">
                    <div className=" font-Lora opacity-60">
                        <p>Or</p>
                    </div>
                    <Oauth/>
                    <div className=" font-Lora font-medium opacity-90 flex gap-2 ">
                        <p>Don't have an account?</p>
                        <Link to='/signup'><p className=" text-darkGreen ">Sign up</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
