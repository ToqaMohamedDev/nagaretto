import React, { useState } from "react";
import {
    FaFacebook,
    FaWhatsapp,
    FaTiktok,
} from "react-icons/fa";

export default function Dev() {
    const [dev, setDev] = useState(false);

    return (
        <div className="flex flex-col absolute bottom-0 items-center justify-center w-[130px] bg-secondary rounded-t-3xl px-5">
            <div
                onClick={() => setDev(!dev)}
                className="bg-secondary cursor-pointer text-white py-1"
            >
                المبرمج
            </div>
            <div
                className={`flex flex-col items-center justify-center overflow-hidden bg-secondary transition-all duration-300 ease-in-out ${dev ? "h-[45px] opacity-100" : "h-0 opacity-0"
                    }`}
            >
                <div className="flex space-x-3 px-5 py-3">
                    <a
                        href="https://www.facebook.com/alaa.taha.71271466?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-blue-500 dark:hover:text-blue-500" />
                    </a>
                    <a href="https://www.tiktok.com/@alaa_taha_dev" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-gray-700 dark:hover:text-gray-300" />
                    </a>
                    <a
                        href='whatsapp://send?phone=+201507948882&text=السلام عليكم'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-pink-500 dark:hover:text-pink-500" />
                    </a>
                </div>
            </div>
        </div>
    );
}
