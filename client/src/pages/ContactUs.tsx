import React, { useState } from "react";
import { paddingSize } from "../declareSize";
import { messageInterface } from "../declareInterface";

export default function ContactUs() {
  const [message,setMessage] = useState<messageInterface>({})
    const handelMessage = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setMessage({...message,[e.target.id]:e.target.value})
  }
  //handeling mail submittion
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted',message)
  };

  
  return (
    <>
      <div className={`${paddingSize}`}>
        <div className=" flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-10 pt-20 pb-28 mt-10">
          <div className=" font-Lora flex flex-col gap-3 justify-center items-center">
            <p className=" text-2xl sm:text-4xl font-semibold">Contact Us</p>
            <p className=" text-sm sm:text-xl font-semibold">Have questions or feedback? Reach out to us!</p>
          </div>
          <div className="sm:w-1/2">
            <form className="w-full flex flex-col gap-4 font-Quicksand" onSubmit={handelSubmit}>

                <div className=" flex flex-col ">
                  <label  className=" text-sm sm:text-base font-semibold">Email</label>
                  <input 
                  className=" py-2 rounded-md px-4"
                  type="email" name="" id="email"
                  placeholder="Enter your email" 
                  onChange={handelMessage} />
                </div>

                <div className=" flex flex-col">
                  <label  className=" text-sm sm:text-base font-semibold">Message</label>
                  <input 
                  className=" py-2 rounded-md px-4" 
                  type="text" name="" id="message" 
                  placeholder="Message" 
                  onChange={handelMessage} />
                </div>

                <div className=" flex justify-center mt-10">
                  <button className=" px-6 py-3 font-Lora font-semibold w-1/2 rounded-2xl bg-darkGreen text-white">Submit</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
