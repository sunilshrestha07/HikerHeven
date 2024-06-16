import React, { useRef, useState } from "react";
import { profileInterface } from "../declareInterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { deleteSuccess, logout, updateSuccess } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { clearHike } from "../Redux/savedSlice";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import { baseUrl } from "../config";
import { toast } from "react-toastify";

export default function DashProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const profileRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [profileFormData, setProfileFormData] = useState<profileInterface>({});

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileFormData({ ...profileFormData, [e.target.id]: e.target.value });
    };

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearHike());
        navigate('/');
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const handlePictureUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `profile/${image.name + v4()}`);
            await uploadBytes(imageRef, image);
            const firebaseUrl = await getDownloadURL(imageRef);
            return firebaseUrl;
        }
        return null;
    };

    const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUploading(true);
        try {
                if(image){ //if there is image change
                 const uploadedImageUrl = await handlePictureUpload();
                    const updatedProfileFormData = { ...profileFormData, avatar: uploadedImageUrl };
                    const res = await axios.put(`${baseUrl.baseUrl}/api/user/update/${currentUser?._id}`,updatedProfileFormData)
                    if(res.status === 200){
                        toast.success('Profile update success')
                        dispatch(updateSuccess(res.data))
                    }
                }else{  //if there is no image change
                    const res = await axios.put(`${baseUrl.baseUrl}/api/user/update/${currentUser?._id}`,profileFormData) 
                    if(res.status === 200){
                        toast.success('Profile update success')
                        dispatch(updateSuccess(res.data))
                    }
                }
                setIsUploading(false);
        } catch (error: any) {
            setIsUploading(false);
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'An error occurred during profile update');
            } else {
                toast.error('An unknown error occurred during profile update');
            }
        }
    };

    //handel user delete
    const handelDeleteUser =async () =>{
        try {
            const res = await axios.delete(`${baseUrl.baseUrl}/api/user/delete/${currentUser?._id}`)
            if(res.status === 200){
                console.log('User deleted successfully')
                dispatch(deleteSuccess())
                navigate('/login')
            }
        } catch (error: any) {
            setIsUploading(false);
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'An error occurred during profile deletion');
            } else {
                toast.error('An unknown error occurred during profile deletion');
            }
        }
    }

    return (
        <>
            <div className="">
                <div className="flex justify-center items-center w-full">
                    <div className="w-full flex flex-col justify-center items-center pt-10 gap-4">
                        <form className="w-full sm:w-10/12 lg:w-1/2 flex flex-col items-center gap-6" onSubmit={handleProfileSubmit}>
                            <div className="w-1/2 aspect-square rounded-full overflow-hidden" onClick={() => profileRef.current?.click()}>
                                {imageUrl ? (
                                    <img className="w-full h-full object-cover" src={imageUrl} alt="Profile" />
                                ) : (
                                    <img className="w-full h-full object-cover" src={currentUser?.avatar} alt="Profile" />
                                )}
                                <input type="file" accept="image/*" hidden ref={profileRef} onChange={handleProfilePictureChange} />
                            </div>
                            <div className="font-Quicksand text-base flex flex-col gap-3 w-10/12 sm:w-9/12">
                                <input
                                    className="p-3 rounded-xl"
                                    type="text"
                                    id="name"
                                    defaultValue={currentUser?.name}
                                    onChange={handleProfileChange}
                                    placeholder="Name"
                                />
                                <input
                                    className="p-3 rounded-xl"
                                    type="text"
                                    id="email"
                                    defaultValue={currentUser?.email}
                                    onChange={handleProfileChange}
                                    placeholder="Email"
                                />
                                <input
                                    className="p-3 rounded-xl"
                                    type="password"
                                    id="password"
                                    onChange={handleProfileChange}
                                    placeholder="***********"
                                />
                            </div>
                            <div>
                                <button
                                    className={`bg-darkGreen font-Quicksand font-bold text-base px-6 py-2 rounded-full text-white ${isUploading ? "opacity-50" : ""}`}
                                    type="submit"
                                    disabled={isUploading}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex flex-row justify-around font-Quicksand text-red-500 font-semibold text-base hover:cursor-pointer">
                            <div onClick={handelDeleteUser}>Delete account</div>
                            <div onClick={handleLogout}>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
