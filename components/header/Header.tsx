// src/components/Header.tsx
'use client';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import useHoodieStore from '@/lib/hoodieStore'; // استدعاء Zustand store
import NameNag from './NameNag';
import Social from './Social';
import Discription from './Discription';
import { useThreeContext } from '@/lib/ThreeContext'; // استيراد context
import ThemeSwitcher from "../ThemeSwitcher";
import ViewModel from "./ViewModel";
import HoodiViewer from "./HoodiViewer";

export default function Header() {
  const { color, currentHoodie, isAtStart, isAtEnd, hoodieList,tshirtList, setCurrentHoodie, animateScene } = useHoodieStore();
  const { camera, scene } = useThreeContext(); // استخدام الـ context

  const handlePrevClick = () => {
    if (!isAtStart) {
      setCurrentHoodie(currentHoodie - 1);
      animateScene(scene, camera); 

    }
  };

  const handleNextClick = () => {
    if (!isAtEnd) {
      setCurrentHoodie(currentHoodie + 1);
      animateScene(scene, camera); 

    }
  };

  return (
    <div className="container mx-auto h-screen w-screen flex items-center justify-center relative">
      <ThemeSwitcher/>
      <button
        className={`absolute left-5 bottom-[50px] z-10 dark:text-white text-black px-4 py-2 rounded transition-opacity duration-300 ${isAtStart ? 'opacity-50' : 'opacity-100'}`}
        id="prev-button"
        onClick={handlePrevClick}
        disabled={isAtStart}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className={`absolute right-5 bottom-[50px] z-10 dark:text-white text-black px-4 py-2 rounded transition-opacity duration-300 ${isAtEnd ? 'opacity-50' : 'opacity-100'}`}
        id="next-button"
        onClick={handleNextClick}
        disabled={isAtEnd}
      >
        <FaArrowRightLong />
      </button>
      <NameNag />
      <div className="w-full flex justify-center items-center">
       {/* // <ViewModel color={color} image={tshirtList[currentHoodie].image} /> */}
        <HoodiViewer color={color} image={hoodieList[currentHoodie].image} />

      </div>
      <Discription />
      <Social />
    </div>
  );
}
