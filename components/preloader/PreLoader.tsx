'use client';

import React from 'react';
import gsap from 'gsap';
import './PreLoader.css';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import TextSplit from '../TextSplit';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PreLoader() {
  
  useGSAP(() => {
    const tl = gsap.timeline();

    // إعداد الأنيميشن للبريلودر
    gsap.set('.preloader', {
      clipPath: 'circle(100% at 50% 50%)',
    });

    // تشغيل الأنيميشن
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
    </div>
  );
}
