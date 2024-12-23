import React, { useState } from "react";
import {
    FaFacebook,
    FaWhatsapp,
    FaTiktok,
} from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import code from '@/public/code.svg'
import Image from "next/image";
export default function Dev() {
    const [dev, setDev] = useState(false);

    return (
        <div className={`flex flex-col absolute bottom-[55px] items-center justify-center   h-[35px] rounded-3xl  px-2 z-30 transition-all duration-300 ease-in-out 
            ${dev ? "w-[140px] " : "w-[80px]"}`}>
            <div
                className="cursor-pointer text-white py-1 "
            >
                {!dev ? (<div
                    onClick={() => setDev(true)}
                       ><Image
                       src={code}
                       alt="Code"
                       className="h-6"
                       /></div>) : (
                    <div className="relative flex items-center justify-center">
                       
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
                                <FaWhatsapp className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-green-500 dark:hover:text-green-500" />
                            </a>
                            <GiCancel 
                          className="text-secondary dark:text-white lg:text-[22px] text-[18px]"
                          onClick={()=>setDev(false)}
                         />
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}
/*
    
*/