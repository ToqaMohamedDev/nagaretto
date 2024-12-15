'use client';

import React from 'react';
import gsap from 'gsap';
import './PreLoader.css';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import TextSplit from '../TextSplit';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGLTF, useProgress } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

export default function PreLoader() {
  useGLTF.preload('/hoodie2.glb');
 //useGLTF.preload('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;
 const {progress}= useProgress();
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.set('.preloader', {
      clipPath: 'circle(100% at 50% 50%)',
    });

    tl.to('.image', {
      y: 20,
      opacity: 1,
    })
      .to('.text h1', {
        duration: 1.5,
        opacity: 1,
        delay: 0.5,
        stagger: 0.4,
      })
      .to('.text', { opacity: 0 }, 2)
      .to('.image', { opacity: 0 }, 2)
      .to('body', {
        duration: 0.01,
        css: {
          overflowY: 'scroll',
        },
      })
      .to(
        '.preloader',
        {
          duration: 1.5,
          clipPath: 'circle(0% at 50% 50%)',
          onComplete: () => {
            const preload = document.querySelector('.preloader') as HTMLElement;
            preload.style.display = 'none'; // إخفاء البريلودر بعد الأنيميشن
          },
        },
        '-=1'
      );
  }, []);

  return (
    <div className="preloader">
      <Image src={Logo} alt="Logo" className="image" />
      <TextSplit classNameAll="text" classNameCarc="textcharc" text="NAGARETTO" />
      <div className='text-red-500'>{Math.round(progress)}%</div>
    </div>
  );
}
