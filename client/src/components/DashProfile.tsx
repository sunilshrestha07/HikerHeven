import React, {  useState } from "react"
import { profileInterface } from "../declareInterface"

export default function DashProfile() {
    const user = { name:'suneel',image:'./crouselImage/lowOne.jpg',email:'shresthasunil9@gmail.com'}

    const [profileFormData,setProfileFormData]=useState<profileInterface>({})

    const handelProfileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setProfileFormData({...profileFormData,[e.target.id]:e.target.value})
    }
    
    const handelProfileSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(profileFormData)
    }
  return (
    <>
        <div className="">
            <div className=" flex justify-center items-center w-full ">
                <div className="  w-full sm:w-full md:w-2/3 lg:w-1/2 aspect-[3/4] flex items-center justify-center">
                    <div className=" flex flex-col  justify-center items-center w-full gap-10">
                        <form className=" flex flex-col items-center gap-4" onSubmit={handelProfileSubmit}>
                            <div className=" w-1/2 aspect-square rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src={user.image} alt="" />
                            </div>
                            <div className=" font-Quicksand text-base flex flex-col gap-3 w-10/12 sm:w-9/12">
                                <input className=" p-3 rounded-xl"
                                type="text" name="" id="name" 
                                defaultValue={user.name} onChange={handelProfileChange}
                                />

                                <input className=" p-3 rounded-xl"
                                type="text" name="" id="email" 
                                defaultValue={user.email} onChange={handelProfileChange}
                                />
                                
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
                            <div className="">
                                logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
