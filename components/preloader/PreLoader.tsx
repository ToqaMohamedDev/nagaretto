'use client';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './PreLoader.css';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import TextSplit from '../TextSplit';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PreLoaderProps {
  progress: number;
}

export default function PreLoader({ progress }: PreLoaderProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0); // لتحديث progress بشكل سلس
  const [animationStarted, setAnimationStarted] = useState(false); // لتشغيل الأنيميشن مرة واحدة

  useEffect(() => {
    // استخدام gsap لتحديث progress بشكل تدريجي
    gsap.to({ value: animatedProgress }, {
      value: progress,
      duration: 0.5,
      onUpdate: function () {
        setAnimatedProgress(Math.round(this.targets()[0].value));
      },
    });

    // التأكد من تشغيل الأنيميشن بعد progress 100%
    if (animatedProgress === 100 && !animationStarted) {
      setAnimationStarted(true); // منع تشغيل الأنيميشن مرة أخرى
      const tl = gsap.timeline();

      // إعداد أنيميشن GSAP
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
        );
    }
  }, [progress, animatedProgress, animationStarted]);

  return (
    <div className="preloader">
      <Image src={Logo} alt="Logo" className="image" />
      <TextSplit classNameAll="text" classNameCarc="textcharc" text="NAGARETTO" />
      <div className="text-red-500 text-[30px]">{animatedProgress}%</div>
    </div>
  );
}
