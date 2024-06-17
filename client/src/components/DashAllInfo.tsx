import axios from "axios"
import { baseUrl } from "../config"
import { useEffect, useState } from "react"
import { allUsersInterface, postInterface, reviewdataInterface } from "../declareInterface"
import { toast } from "react-toastify"

export default function DashAllInfo() {
    const [allUsers,setAllUsers]=useState<allUsersInterface[]>([])
    const [allPost,setAllPost]=useState<postInterface[]>([])
    const [allReviews,setAllReviews]=useState<reviewdataInterface[]>([])

    //get all users
    const getallusers = async()=>{
        try {
            const res = await axios.get(`${baseUrl.baseUrl}/api/user/getusers`)
            if(res.status === 200){
                setAllUsers(res.data)
            }
        } catch (error) {
            toast.error("Error fetching allusers")
        }
    }

    //get all posts
    const getALlPost =async ()=>{
        try {
            const res = await axios.get(`${baseUrl.baseUrl}/api/post/getallpost`)
            if(res.status === 200){
                setAllPost(res.data)
            }
        } catch (error) {
            toast.error("Error fetching allpost")
        }
    }

    //get all reviews
    const getALlReviews =async ()=>{
        try {
            const res = await axios.get(`${baseUrl.baseUrl}/api/review/allreviews`)
            if(res.status === 200){
                setAllReviews(res.data)
            }
        } catch (error) {
            toast.error("Error fetching allpost")
        }
    }

    useEffect(()=>{
        getallusers()
        getALlPost()
        getALlReviews()
        console.log("sfdjfj")
    },[])

    const handelDeleteUser = async (userId : string | null) =>{
        try {
            const res = await axios.delete(`${baseUrl.baseUrl}/api/user/delete/${userId}`)
            if(res.status === 200){
                toast.success('user deleted successfully')
                window.location.reload()
            }
        } catch (error) {
           toast.error('Error deletring user') 
        }
    }

    const handelDeletePost = async(postId : string | null) =>{
        try {
            const res = await axios.delete(`${baseUrl.baseUrl}/api/post/deletepost/${postId}`)
            if(res.status === 200){
                toast.success('Post deleted successfully')
                window.location.reload()
            }
        } catch (error) {
           toast.error('Error deletring post') 
        }
    }

    const handelDeleteReview =async (reviewId : string | null) =>{
        try {
            const res = await axios.delete(`${baseUrl.baseUrl}/api/review/deletespecific/${reviewId}`)
            if(res.status === 200){
                toast.success('Review deleted successfully')
                window.location.reload()
            }
        } catch (error) {
           toast.error('Error deletring review') 
        }
    }

  return (
    <>
        <div className=" w-full">
            <div className=" px-3 flex flex-col gap-10 py-10">
                <div className=" flex flex-col gap-5  mt-5">
                <div className=" flex items-center">
                        <p className=" font-Lora text-2xl sm:text-3xl font-semibold">All Users : <span className=" opacity-50">({allUsers.length})</span></p>
                    </div>
                    <div className=" grid lg:grid-cols-2 xl:grid-cols-3 w-full gap-4">
                        {allUsers.map((user)=>(
                            <div className=" col-span-1 bg-white rounded-lg flex justify-between px-2 py-3 gap-2"key={user._id}>
                                <div className=" w-12 aspect-square rounded-md overflow-hidden object-cover co">
                                    <img className=" w-full h-full object-cover object-center" src={user.avatar} alt="" />
                                </div>
                                <div className="">
                                    <p className="font-Quicksand font-semibold text-sm sm:text-base">{user.name}</p>
                                    <p className=" font-Quicksand font-medium opacity-50 text-xs sm:text-sm">{user.email}</p>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-5 aspect-square flex justify-center items-center" onClick={()=>handelDeleteUser(user._id)}>
                                    <img className=" w-3 h-3 " src="./navImages/close.png" alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" flex flex-col gap-5  mt-5">
                <div className=" flex items-center">
                        <p className=" font-Lora text-2xl sm:text-3xl font-semibold">All Posts : <span className=" opacity-50">({allPost.length})</span></p>
                    </div>
                    <div className=" grid lg:grid-cols-2 xl:grid-cols-3 w-full gap-4">
                        {allPost.map((hike)=>(
                            <div className=" col-span-1 bg-white rounded-lg flex justify-between px-2 py-3 gap-2"key={hike._id}>
                                <div className=" w-12 aspect-square rounded-md overflow-hidden object-cover co">
                                    <img className=" w-full h-full object-cover object-center" src={hike.image} alt="" />
                                </div>
                                <div className="">
                                    <p className="font-Quicksand font-semibold text-sm sm:text-base">{hike.name}</p>
                                    <p className=" font-Quicksand font-medium opacity-50 text-xs sm:text-sm">{hike.district}</p>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-5 aspect-square flex justify-center items-center" onClick={()=>handelDeletePost(hike._id)}>
                                    <img className=" w-3 h-3 " src="./navImages/close.png" alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" flex flex-col gap-5  mt-5">
                    <div className=" flex items-center">
                        <p className=" font-Lora text-2xl sm:text-3xl font-semibold">All Reviews : <span className=" opacity-50">({allReviews.length})</span></p>
                    </div>
                    <div className=" grid lg:grid-cols-2 xl:grid-cols-3 w-full gap-4">
                        {allReviews.map((review)=>(
                            <div className=" col-span-1 bg-white rounded-lg flex justify-between px-2 py-3 gap-2"key={review._id}>
                                <div className=" w-12 aspect-square rounded-md overflow-hidden object-cover co">
                                    <img className=" w-full h-full object-cover object-center" src={review.userImage} alt="" />
                                </div>
                                <div className=" overflow-hidden w-3/5">
                                    <p className="font-Quicksand font-semibold text-sm sm:text-base">{review.userName}</p>
                                    <p className=" font-Quicksand font-medium opacity-50 text-xs sm:text-sm truncate ">{review.comment}</p>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-5 aspect-square flex justify-center items-center" onClick={()=>handelDeleteReview(review._id)}>
                                    <img className=" w-3 h-3 " src="./navImages/close.png" alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
