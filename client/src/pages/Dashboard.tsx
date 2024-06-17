import { useEffect, useState } from "react";
import { paddingSize } from "../declareSize";
import SideDashboard from "../components/SideDashboard";
import DashProfile from "../components/DashProfile";
import { useLocation } from "react-router-dom";
import DashPost from "../components/DashPost";
import DashAllInfo from "../components/DashAllInfo";

export default function Dashboard() {
    const [isDashMenuOpen,setIsDashMenuOpen]=useState<boolean>(false)
    const location = useLocation()
    const [tab,setTab]=useState<string>('')
    const handelDashOpen = () =>{
        setIsDashMenuOpen(!isDashMenuOpen)
    }

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search)
        const tabFromUrl = urlParams.get('tab')
        if(tabFromUrl){
        setTab(tabFromUrl)
        }
    },[location.search])
    
  return (
    <>
        <div className={`${paddingSize} rounded-lg overflow-hidden h-full mt-16`}>
            <div className=" flex flex-col gap-3 h-full">
                <div className=" flex items-center gap-4 sm:gap-8">
                    <p className=" font-Lora text-2xl sm:text-3xl font-semibold">Dashboard</p>
                    <div className=" sm:hidden">
                        {isDashMenuOpen ? (
                            <img className=" h-7 sm:h-9 transition ease-out duration-150" src="./navImages/omenu.png" alt="" onClick={handelDashOpen} />
                        ):(
                            <img className="h-5 sm:h-7 transition ease-out duration-150" src="./navImages/menu.png" alt="" onClick={handelDashOpen} />
                        )}
                    </div>
                </div>
                {/* main board */}
                <div className=" h-screen ">
                    <div className=" grid grid-cols-8 transition ease-in-out duration-500 w-full h-4/5 relative bg-gray-200 rounded-xl">
                        {/* sidebar */}
                        <div className={`${isDashMenuOpen ? "":"hidden"} bg-gray-100 w-2/3 h-full pb-5 absolute top-0 left-0 sm:hidden `}>
                            <SideDashboard/>
                        </div>

                        {/* screen greater than sm */}
                        <div className="hidden sm:block sm:col-span-3 lg:col-span-2 bg-slate-100 pb-5 w-full h-full">
                            <SideDashboard/>
                        </div>

                        {/* rightdashboard */}
                        <div className="col-span-8 sm:col-span-5 lg:col-span-6 pt-10 sm:pt-0  h-full overflow-y-scroll ">
                           {tab === 'profile' && <DashProfile/>}
                           {tab === 'addpost' && <DashPost/>}
                           {tab === 'allinfo' && <DashAllInfo/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
