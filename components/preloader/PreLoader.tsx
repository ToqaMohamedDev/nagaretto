'use client';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './PreLoader.css';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import TextSplit from '../TextSplit';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useStore from '@/lib/hoodieStore';

gsap.registerPlugin(ScrollTrigger);

export default function PreLoader() {
  const [animatedProgress, setAnimatedProgress] = useState(0); // لتحديث progress بشكل سلس
  const [animationStarted, setAnimationStarted] = useState(false); // لتشغيل الأنيميشن مرة واحدة

  const { progress } = useStore();

  useEffect(() => {
    gsap.to({ value: animatedProgress }, {
      value: progress,
      duration: 0.5,
      onUpdate: function () {
        setAnimatedProgress(Math.round(this.targets()[0].value));
      },
    });

    if (animatedProgress === 100 && !animationStarted) {
      setAnimationStarted(true); // منع تشغيل الأنيميشن مرة أخرى
      const tl = gsap.timeline();

      gsap.set('.preloader', {
        clipPath: 'circle(100% at 50% 50%)',
      });

      tl.to(
        '.image',
        {
          y: 10,
          opacity: 1,
        },
        0.5
      )
        .to(
          '.text',
          {
            opacity: 1,
          },
          0.5
        )
        .to(
          '.textcharc',
          {
            y: 10,
            stagger: 0.1,
          },
          0.5
        )
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
        )
        ;
    }
  }, [progress, animatedProgress, animationStarted]);

  return (
<div className="preloader">
  {animatedProgress < 100 ? (
    <>
      <div className="w-[200px] h-[20px] bg-gray-700 rounded-full overflow-hidden mt-6 relative">
        <div
          className="h-full bg-red-700 transition-all duration-300"
          style={{ width: `${animatedProgress}%` }}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center text-white font-medium">
          {animatedProgress}%
        </div>
      </div>
    </>
  ) : (
    <>
      <Image src={Logo} alt="Logo" className="image" />
      <TextSplit classNameAll="text" classNameCarc="textcharc" text="NAGARETTO" />
    </>
  )}
</div>

  );
}
