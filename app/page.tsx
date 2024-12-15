'use client';
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import PreLoader from "@/components/preloader/PreLoader";
import { useGLTF, useProgress } from '@react-three/drei';

const HeavyComponent = dynamic(() => import('@/components/header/Header'), {
  ssr: false,
  loading: () => <div></div>, 
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useGLTF.preload('/hoodie.glb');
  const {progress}= useProgress();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); // تنظيف المؤقت عند التفكيك
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader  progress={progress}/>
      ) : (
        <div >
          <HeavyComponent />
        </div>
      )}
    </>
  );
}
/*
git init
git add .
git commit -m "first29"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/nagaretto.git
git push -u origin main
*/