import { useState } from "react";
import Oauth from "../components/Oauth"
import { loginFormDataInterface } from "../declareInterface";
import { Link } from "react-router-dom";

export default function Signup() {
    const [loginFormData, setLoginFormData] = useState<loginFormDataInterface>({});
    const handelSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({...loginFormData,[e.target.id]:e.target.value})
    }

    //handeling signup submittion
    const handelSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted',loginFormData)
    }
  return (
    <>
        <div className="  w-full flex justify-center items-center">
            <div className=" bg-gray-100 w-10/12 sm:w-3/5 xl:w-2/6 px-5 py-10 mt-8 rounded-md border-2 border-gray-300 flex flex-col gap-6">
                <div className="flex justify-center items-center">
                    <img className="h-20" src="/navImages/logo.svg" alt="" />
                </div>
                <div className="">
                    <form className=" flex flex-col justify-center items-center gap-4" onSubmit={handelSignupSubmit}>
                        <div className=" flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold" >Name</label>
                            <input 
                            className=" font-Quicksand p-3 rounded-md border-2 border-gray-400 " 
                            type="text" name="" id="name" placeholder="Name" required
                            onChange={handelSignup}/>
                        </div>

                        <div className=" flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold" >Email</label>
                            <input 
                            className=" font-Quicksand p-3 rounded-md border-2 border-gray-400 " 
                            type="email" name="" id="email" placeholder="Email" required
                            onChange={handelSignup}/>
                        </div>

                        <div className=" flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold" >Password</label>
                            <input 
                            className=" font-Quicksand p-3 rounded-md border-2 border-gray-400 " 
                            type="password" name="" id="password" placeholder="Password" required
                            onChange={handelSignup}/>
                        </div>
                        <button type="submit" className="font-Lora bg-darkGreen text-white p-3 rounded-full font-medium w-8/12 sm:w-1/2 mt-4">Sign Up</button>
                    </form>
                </div>
                <div className=" flex flex-col justify-center items-center gap-5">
                    <div className=" font-Lora opacity-60">
                        <p>Or</p>
                    </div>
                    <Oauth/>
                    <div className=" font-Lora font-medium opacity-90 flex gap-2 ">
                        <p>Already have an account?</p>
                        <Link to='/login'><p className=" text-darkGreen ">Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
