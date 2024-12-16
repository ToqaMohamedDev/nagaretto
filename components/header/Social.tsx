import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitch,FaKickstarterK,FaTiktok } from "react-icons/fa";

export default function Social() {
  return (
    <div className="absolute top-5 right-5 flex space-x-4 z-20">
    <a href="https://www.facebook.com/Nagaretto" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-blue-500 hover:scale-150 dark:hover:text-blue-500" />
    </a>
    <a href="https://www.youtube.com/channel/UCFyOsHRxAnTY3JW3FU5seUw" target="_blank" rel="noopener noreferrer">
      <FaYoutube className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-red-400 hover:scale-150 dark:hover:text-red-400" />
    </a>
    <a href="https://www.instagram.com/nagarettoo/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-pink-500 hover:scale-150 dark:hover:text-pink-500" />
    </a>
    <a href="https://www.twitch.tv/nagaretto" target="_blank" rel="noopener noreferrer">
      <FaTwitch className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-pink-400 hover:scale-150 dark:hover:text-pink-400" />
    </a>
    <a href="https://kick.com/nagaretto" target="_blank" rel="noopener noreferrer">
      <FaKickstarterK className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-green-500 hover:scale-150 dark:hover:text-green-500" />
    </a>
    <a href="https://www.tiktok.com/@nagaretto" target="_blank" rel="noopener noreferrer">
      <FaTiktok className="dark:text-white text-gray-600 lg:text-[22px] text-[18px] hover:text-gray-700 hover:scale-150 dark:hover:text-gray-300" />
    </a>
  </div>
  )
}
