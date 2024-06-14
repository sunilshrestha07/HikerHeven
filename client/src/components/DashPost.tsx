import React, { useRef, useState } from "react";
import { postInterface } from "../declareInterface";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function DashPost() {
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [postFormData, setPostFormData] = useState<postInterface>({});

    // Handle image change
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image")) {
            setImage(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    // Handle other input changes
    const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPostFormData({ ...postFormData, [e.target.id]: e.target.value });
    };

    // Handle description change
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostFormData({ ...postFormData, [e.target.id]: e.target.value });
    };

    // Handle image upload to Firebase
    const handleImageUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `/hike/${image.name + v4()}`);
            await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(imageRef);
            return imageUrl;
        }
        return null;
    };

    // Handle form submission
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uploadedImageUrl = await handleImageUpload();
        if (uploadedImageUrl) {
            setPostFormData({ ...postFormData, image: uploadedImageUrl });
            console.log({ ...postFormData, imageUrl: uploadedImageUrl });
            // Perform additional form submission actions here
        } else {
            console.error("Image upload failed");
        }
    };

    return (
        <>
            <div className="py-10">
                <div className="font-Lora font-semibold text-2xl sm:text-4xl flex justify-center pb-5">Add Post</div>
                <div className="w-full flex flex-row justify-center">
                    <div className="w-1/2">
                        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="name">Name of the hike</label>
                                <input
                                    className="font-Quicksand text-base p-3 rounded-md border-2 border-gray-500"
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    required
                                    onChange={handlePostChange}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="district">District</label>
                                <input
                                    className="font-Quicksand text-base p-3 rounded-md border-2 border-gray-500"
                                    type="text"
                                    id="district"
                                    placeholder="District"
                                    required
                                    onChange={handlePostChange}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="rating">Rating</label>
                                <input
                                    className="font-Quicksand text-base p-3 rounded-md border-2 border-gray-500"
                                    type="number"
                                    id="rating"
                                    placeholder="Rating"
                                    required
                                    min="1"
                                    max="5"
                                    onChange={handlePostChange}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="level">Level</label>
                                <select
                                    className="font-Quicksand text-base p-3 rounded-md border-2 border-gray-500"
                                    id="level"
                                    required
                                    onChange={handlePostChange}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="hard">Hard</option>
                                    <option value="challenging">Challenging</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="font-Quicksand text-base p-3 rounded-md border-2 border-gray-500 w-full aspect-[5/2]"
                                    id="description"
                                    placeholder="Description about the hike"
                                    required
                                    onChange={handleDescriptionChange}
                                ></textarea>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="image">Image</label>
                                <input
                                    ref={imageRef}
                                    className="hidden"
                                    type="file"
                                    accept="image/*"
                                    id="image"
                                    onChange={handleImageChange}
                                />
                                <div
                                    className="w-full rounded-md border-2 border-gray-500 aspect-[6/2] bg-white cursor-pointer flex items-center justify-center overflow-hidden"
                                    onClick={() => imageRef.current?.click()}
                                >
                                    {imageUrl ? (
                                        <img src={imageUrl} alt="Selected" className="object-cover w-full h-full" />
                                    ) : (
                                        <p>Click to upload image</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="map">Map link</label>
                                <input
                                    className="font-Quicksand text-base p-3 rounded-md border-2 border-gray-500"
                                    type="text"
                                    id="map"
                                    placeholder="Map Link"
                                    required
                                    onChange={handlePostChange}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="font-Lora font-medium text-white text-base px-8 py-3 rounded-full bg-darkGreen mt-5"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
