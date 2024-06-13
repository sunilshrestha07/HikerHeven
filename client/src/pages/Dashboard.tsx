import { useState } from "react";
import { paddingSize } from "../declareSize";
import SideDashboard from "../components/SideDashboard";

export default function Dashboard() {
    const [isDashMenuOpen,setIsDashMenuOpen]=useState<boolean>(false)
    const handelDashOpen = () =>{
        setIsDashMenuOpen(!isDashMenuOpen)
    }
    console.log(isDashMenuOpen)
  return (
    <>
        <div className={paddingSize}>
            <div className=" flex flex-col gap-3">
                <div className=" flex items-center gap-4 sm:gap-8">
                    <p className=" font-Lora text-2xl sm:text-3xl font-semibold">Dashboard</p>
                    {isDashMenuOpen ? (
                        <img className="h-5 sm:h-7 transition ease-out duration-150" src="./navImages/menu.png" alt="" onClick={handelDashOpen} />
                    ):(
                        <img className=" h-7 sm:h-9 transition ease-out duration-150" src="./navImages/omenu.png" alt="" onClick={handelDashOpen} />
                    )}
                </div>
                {/* main board */}
                <div className=" grid grid-cols-8 transition ease-in-out duration-500 w-full  aspect-[8/4]">
                    {/* sidebar */}
                    <div className={`${isDashMenuOpen ? "hidden" : "col-span-2"}  h-full`}>
                        <SideDashboard/>
                    </div>

                    {/* rightdashboard */}
                    <div className={`${isDashMenuOpen ? "col-span-8" : "col-span-6"} bg-green-500 h-full  text-5xl`}>
                        shrestha
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
