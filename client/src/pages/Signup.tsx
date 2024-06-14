import { useState, useEffect } from "react";
import Oauth from "../components/Oauth";
import { SingupFormDataInterface } from "../declareInterface";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";

export default function Signup() {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState<SingupFormDataInterface>({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);
    const [isErrorDisplayActive, setIsErrorDisplayActive] = useState(false);
    const timeout = 3000; // Timeout duration in milliseconds

    const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({ ...loginFormData, [e.target.id]: e.target.value });
    };

    const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // Reset error state before submitting
        try {
            const res = await axios.post(`${baseUrl.baseUrl}/api/user/signup`, loginFormData);
            if (res.status === 200) {
                console.log('Sign up success');
                navigate('/login');
            }
        } catch (error: any) {
            console.error('Sign up failed', error);
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || 'An error occurred during sign up');
            } else {
                setError('An unknown error occurred during sign up');
            }
            setIsErrorDisplayActive(true);
        }
    };

    useEffect(() => {
        if (isErrorDisplayActive) {
            const timer = setTimeout(() => {
                setIsErrorDisplayActive(false);
            }, timeout);

            return () => clearTimeout(timer);
        }
    }, [isErrorDisplayActive, timeout]);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="bg-gray-100 w-10/12 sm:w-3/5 xl:w-2/6 px-5 py-10 mt-5 rounded-md border-2 border-gray-300 flex flex-col gap-6 relative">
                <div className="flex justify-center items-center">
                    <img className="h-20" src="/navImages/logo.svg" alt="Logo" />
                </div>
                <div>
                    <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSignupSubmit}>
                        <div className="flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold">Name</label>
                            <input
                                className="font-Quicksand p-3 rounded-md border-2 border-gray-400"
                                type="text"
                                id="name"
                                placeholder="Name"
                                required
                                onChange={handleSignup}
                            />
                        </div>
                        <div className="flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold">Email</label>
                            <input
                                className="font-Quicksand p-3 rounded-md border-2 border-gray-400"
                                type="email"
                                id="email"
                                placeholder="Email"
                                required
                                onChange={handleSignup}
                            />
                        </div>
                        <div className="flex flex-col w-11/12 sm:w-4/5">
                            <label className="font-Quicksand font-bold">Password</label>
                            <input
                                className="font-Quicksand p-3 rounded-md border-2 border-gray-400"
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                                onChange={handleSignup}
                            />
                        </div>
                        <button type="submit" className="font-Lora bg-darkGreen text-white p-3 rounded-full font-medium w-8/12 sm:w-1/2 mt-4">Sign Up</button>
                    </form>
                    <div className=" flex items-center justify-center absolute -top-2 left-1/2 transform -translate-x-1/2 font-Quicksand text-xl">
                        {isErrorDisplayActive && <div className="text-red-500 mt-4">{error}</div>}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="font-Lora opacity-60">
                        <p>Or</p>
                    </div>
                    <Oauth />
                    <div className="font-Lora font-medium opacity-90 flex gap-2">
                        <p>Already have an account?</p>
                        <Link to='/login'>
                            <p className="text-darkGreen">Login</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
