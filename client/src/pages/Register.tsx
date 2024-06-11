import { Link } from "react-router-dom";
import { paddingSize } from "../declareSize";
import React, { useState } from "react";
import { registerFormDataInterface } from "../declareInterface";

export default function Register() {
  //stroring data in formData
  const [formData, setFormData] = useState<registerFormDataInterface>({});
  const handelRegister = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  
  //handling form submittion
  const handelRegisterSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log("Register success",formData)
  }
  return (
    <>
      <div className={paddingSize}>
            <div className="grid  sm:grid-rows-none sm:grid-cols-5 bg-gray-200 rounded-2xl  overflow-hidden">
                <div className="  sm:col-span-3 px-5 lg:px-16 py-5 lg:py-10 order-2 sm:order-1 ">
                    <div className=" flex flex-col gap-5 xl:gap-6 ">
                        <div className="flex flex-col gap-2">
                            <p className="font-Lora text-2xl xl:text-4xl font-semibold">Reserve your seat </p>
                        </div>
                        <div className=" flex flex-col justify-center items-start gap-5 xl:gap-10 xl:w-10/12">
                            <p className=" font-Quicksand text-sm xl:text-xl">Bring your essentials for the Kalinchwok hike. HikerHeven provides T-shirts, but pack water, snacks, suitable attire, sun protection, and a first aid kit.Arrive on time! Punctuality is key to a smooth departure and ensures everyone's safety.Our meeting point is Ratnapark</p>
                            <div className=" w-full ">
                              <form className="flex flex-col gap-4 sm:w-4/5 xl:w-4/6" onSubmit={handelRegisterSubmit}>
                                <input 
                                className="font-Quicksand p-2 xl:p-3 rounded-md"
                                type="text" name="" id="" 
                                placeholder="Name"  
                                onChange={handelRegister}
                                />

                                <input 
                                className="font-Quicksand p-2 xl:p-3 rounded-md"
                                type="number" name="" id="
                                " placeholder="Number"  
                                onChange={handelRegister}/>

                                <input 
                                className="font-Quicksand p-2 xl:p-3 rounded-md"
                                type="email" name="" id=""
                                 placeholder="Email" 
                                 onChange={handelRegister}/>

                                  <button type="submit" className=" bg-darkGreen font-Lora text-base xl:text-xl px-5 py-2 xl:py-3 rounded-full text-white hover:text-black  mt-4">Register today</button>
                              </form>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className=" col-span-2 order-1 sm:order-2 ">
                    <img className=" h-full aspect-video sm:w-full sm:aspect-[6/7] object-cover object-center" src="/crouselImage/announcement.jpg" alt="" />
                </div>

            </div>
        </div>  
    </>
  )
}
