'use client';

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import useHoodieStore from '@/lib/hoodieStore'; // استدعاء Zustand store
import NameNag from './NameNag';
import Social from './Social';
import Discription from './Discription';
import { useThreeContext } from '@/lib/ThreeContext'; // استيراد context
import ThemeSwitcher from "../ThemeSwitcher";
import HoodiViewer from "./HoodiViewer";
import { useGLTF, useProgress } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const {
    color,
    currentHoodie,
    isAtStart,
    isAtEnd,
    hoodieList,
    setCurrentHoodie,
    animateScene,
  } = useHoodieStore();

  useGLTF('/hoodie.glb');
  const { progress } = useProgress();
  const { camera, scene } = useThreeContext(); // استخدام الـ context
  const [displayProgress, setDisplayProgress] = useState(0); // لحفظ القيمة المتحركة
  const progressRef = useRef<HTMLDivElement>(null); // مرجع للـ progress

  useEffect(() => {
    // حركة GSAP لتحريك الرقم تدريجيًا
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        innerText: progress.toFixed(0),
        duration: 1, // مدة الحركة
        snap: { innerText: 1 }, // تقريب الرقم لأقرب عدد صحيح
        ease: "power2.out", // تسهيل الحركة
        onUpdate: () => {
          setDisplayProgress(Number(progressRef.current?.innerText || 0));
        },
      });
    }
  }, [progress]); // تشغيل الحركة عند تحديث progress

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
      <ThemeSwitcher />
      <button
        className={`absolute left-5 bottom-[50px] z-10 dark:text-white text-black px-4 py-2 rounded transition-opacity duration-300 ${
          isAtStart ? 'opacity-50' : 'opacity-100'
        }`}
        id="prev-button"
        onClick={handlePrevClick}
        disabled={isAtStart}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className={`absolute right-5 bottom-[50px] z-10 dark:text-white text-black px-4 py-2 rounded transition-opacity duration-300 ${
          isAtEnd ? 'opacity-50' : 'opacity-100'
        }`}
        id="next-button"
        onClick={handleNextClick}
        disabled={isAtEnd}
      >
        <FaArrowRightLong />
      </button>
      <NameNag />
      <div className="w-full flex justify-center items-center">
        {Math.round(progress) === 100 ? (
          <HoodiViewer color={color} image={hoodieList[currentHoodie].image} />
        ) : (
          <div className="absolute top-[35px] text-red-500 text-[50px]">
            <div ref={progressRef}>{displayProgress}%</div>
          </div>
        )}
      </div>
      <Discription />
      <Social />
    </div>
  );
}
