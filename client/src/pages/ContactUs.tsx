import React, { useState } from "react";
import { paddingSize } from "../declareSize";
import { messageInterface } from "../declareInterface";
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from "../config";

export default function ContactUs() {
  const [message, setMessage] = useState<messageInterface>({ email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.id]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl.baseUrl}/api/message/postmessage`,message)
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setMessage({ email: "", message: "" });
      } else {
        toast.error("Failed to send the message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className={`${paddingSize}`}>
      <div className="flex flex-col justify-center items-center bg-gray-200 rounded-lg gap-10 pt-20 pb-28 mt-20">
        <div className="font-Lora flex flex-col gap-3 justify-center items-center">
          <p className="text-2xl sm:text-4xl font-semibold">Contact Us</p>
          <p className="text-sm sm:text-xl font-semibold">Have questions or feedback? Reach out to us!</p>
        </div>
        <div className="sm:w-1/2">
          <form className="w-full flex flex-col gap-4 font-Quicksand" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-sm sm:text-base font-semibold">Email</label>
              <input
                className="py-2 rounded-md px-4"
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm sm:text-base font-semibold">Message</label>
              <input
                className="py-2 rounded-md px-4"
                type="text"
                id="message"
                placeholder="Message"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-center mt-10">
              <button className="px-6 py-3 font-Lora font-semibold w-1/2 rounded-2xl bg-darkGreen text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
