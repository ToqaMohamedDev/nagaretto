'use client';
import { useState, useEffect } from 'react';
import PreLoader from "@/components/preloader/PreLoader";
import { useGLTF, useProgress } from '@react-three/drei';
import Header from '@/components/header/Header';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useGLTF.preload('/hoodie.glb') as any;
  const { progress } = useProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // تنظيف المؤقت عند التفكيك
  }, []);

  return (
    <>
      <PreLoader progress={progress} />
      <div>
        {Math.round(progress) === 100 && !isLoading && (
          <Header />
        )}
      </div>
    </>
  );
}

/*
git init
git add .
git commit -m "first30"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/nagaretto.git
git push -u origin main
*/