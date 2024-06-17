import { paddingSize } from "../declareSize";

export default function About() {
  return (
    <>
      <div className={paddingSize}>
        <div className=" flex flex-col gap-10 mt-16">
          <div className=" flex flex-col justify-center items-center gap-6 mt-10">
            <p className="text-4xl font-Lora font-semibold ">About us</p>
            <p className="text-base sm:text-xl font-Quicksand ">Welcome to HikerHeaven, your ultimate guide to exploring the great outdoors. At HikerHeaven, we believe every trail has a story, and we're here to help you discover yours. Our mission is to inspire hikers of all levels with detailed trail guides, expert tips, and community insights. Whether you're a seasoned adventurer or a novice, HikerHeaven connects you with nature's most breathtaking landscapes, ensuring your hiking experience is safe, enjoyable, and enriching. Lace up your boots and let HikerHeaven be your guide to the wonders of the wilderness.</p>
          </div>
          <div className=" grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-10">
            <div className=" grid-rows-1 sm:col-span-1">
              <p className="font-Lora text-2xl font-semibold">Our Mission & Goals</p>
              <p className=" font-Quicksand text-base sm:text-xl">Learn more about why we exist and what we aim to achieve.</p>
            </div>
            <div className=" grid-rows-1 sm:col-span-1">
              <p className="font-Lora text-2xl font-semibold">Mission Statement</p>
              <p className=" font-Quicksand text-base sm:text-xl">To connect outdoor enthusiasts with the best hiking trails worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
