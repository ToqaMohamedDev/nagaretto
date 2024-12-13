import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

export default function Social() {
  return (
    <div className="absolute top-5 right-5 flex space-x-4 z-20">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-white text-2xl hover:text-blue-500" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-white text-2xl hover:text-blue-400" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-white text-2xl hover:text-pink-500" />
    </a>
    <a href="https://www.twitch.com" target="_blank" rel="noopener noreferrer">
      <FaTwitch className="text-white text-2xl hover:text-pink-400" />
    </a>
  </div>
  )
}
