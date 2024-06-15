import React, {  useState } from "react"
import { profileInterface } from "../declareInterface"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Redux/store"
import { logout } from "../Redux/userSlice"
import { useNavigate } from "react-router-dom"

export default function DashProfile() {
    const dispath = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector((state:RootState)=>state.user.currentUser)

    const [profileFormData,setProfileFormData]=useState<profileInterface>({})

    const handelProfileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setProfileFormData({...profileFormData,[e.target.id]:e.target.value})
    }
    
    const handelProfileSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(profileFormData)
    }

    const handelLogout = () =>{
        dispath(logout())
        navigate('/')
    }
  return (
    <>
        <div className="">
            <div className=" flex justify-center items-center w-full ">
                <div className=" w-full flex flex-col justify-center items-center pt-10 gap-4">
                    <form className=" w-full sm:w-10/12 lg:w-1/2 flex flex-col  items-center gap-6" onSubmit={handelProfileSubmit}>
                        <div className=" w-1/2 aspect-square rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src={currentUser?.avatar} alt="" />
                        </div>
                        <div className=" font-Quicksand text-base flex flex-col gap-3 w-10/12 sm:w-9/12">
                            <input className=" p-3 rounded-xl"
                                    type="text" name="" id="name" 
                                    defaultValue={currentUser?.name} onChange={handelProfileChange}
                                    placeholder="Name"/>

                            <input className=" p-3 rounded-xl"
                                    type="text" name="" id="email" 
                                    defaultValue={currentUser?.email} onChange={handelProfileChange}
                                    placeholder="Email"/>
                                    
                            <input className=" p-3 rounded-xl"
                                    type="password" name="" id="password" placeholder="***********"
                                    onChange={handelProfileChange}
                                    />
                        </div>
                        <div className="">
                            <button  className="bg-darkGreen font-Quicksand font-bold text-base px-6 py-2 rounded-full text-white" type="submit">Save Change</button>
                        </div>
                    </form>
                    <div className="w-full flex flex-row justify-around font-Quicksand text-red-500 font-semibold text-base hover:cursor-pointer ">
                        <div className="">
                            Delete account
                        </div>
                        <div className="" onClick={handelLogout}>
                            logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
