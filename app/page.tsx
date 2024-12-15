'use client';
import { useState, useEffect } from 'react';
import PreLoader from "@/components/preloader/PreLoader";
import { useGLTF, useProgress } from '@react-three/drei';
import Header from '@/components/header/Header';

export default function Home() {
  useGLTF.preload('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;
  const { progress } = useProgress();
  return (
    <>
      <PreLoader progress={progress} />
      <div>
        {Math.round(progress) === 100 &&  (
          <Header />
        )}
      </div>
    </>
  );
}

/*
git init
git add .
git commit -m "first36"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/nagaretto.git
git push -u origin main
*/