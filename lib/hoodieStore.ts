'use client';
import { create } from 'zustand';
import gsap from 'gsap';
import { Scene, Camera } from 'three';

// تعريف الواجهة لاحتواء البيانات المشتركة
interface Hoodie {
  image: string;
  description: string;
  price: string;
}

interface Tshirt {
  image: string;
  colors: string[];
  description: string;
  price: string;
}

// تعريف الواجهة الخاصة بكل الـ Store
interface StoreState {
  // حالة الـ Model
  modelData: { nodes: any; materials: any } | null;
  setModel: (modelData: { nodes: any; materials: any }) => void;

  // حالة الـ Hoodie
  color: string;
  currentHoodie: number;
  isAtStart: boolean;
  isAtEnd: boolean;
  hoodieList: Hoodie[];
  tshirtList: Tshirt[];

  // progress للتحميل
  progress: number;
  setProgress: (value: number) => void;

  setColor: (color: string) => void;
  setCurrentHoodie: (index: number) => void;
  setIsAtStart: (value: boolean) => void;
  setIsAtEnd: (value: boolean) => void;
  animateScene: (scene: Scene, camera: Camera) => void;
}

const useStore = create<StoreState>((set) => ({
  // الحالة الخاصة بالـ Model
  modelData: null,
  setModel: (modelData) => set({ modelData }),

  // الحالة الخاصة بالـ Hoodie
  color: '#fff',
  currentHoodie: 0,
  isAtStart: true,
  isAtEnd: false,
  hoodieList: [
    {
      image: '/base (2) (1).webp',
      description: 'A cozy and stylish hoodie that keeps you warm and fashionable all day. Perfect for casual outings or lounging at home.',
      price: '$45.99',
    },
    {
      image: '/base (2) (2).webp',
      description: 'This lightweight hoodie combines premium comfort with a sleek look. Ideal for layering or wearing on its own.',
      price: '$49.99',
    },
    {
      image: '/base (2) (3).webp',
      description: 'Designed for an active lifestyle, this hoodie offers breathable fabric and a modern design for any adventure.',
      price: '$39.99',
    },
    {
      image: '/base (2) (4).webp',
      description: 'A versatile hoodie crafted for both style and functionality. The perfect companion for chilly mornings and relaxed evenings.',
      price: '$39.99',
    },
    {
      image: '/base (2) (5).webp',
      description: 'Stay comfortable and chic with this hoodie. Its soft material and minimalist design make it a wardrobe essential.',
      price: '$39.99',
    },
    {
      image: '/base (2) (6).webp',
      description: 'Elevate your casual wear with this trendy hoodie. Perfect for running errands or hanging out with friends.',
      price: '$39.99',
    },
  ],
  tshirtList: [
    {
      image: '/base (1).png',
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'تيشيرت خفيف ومريح مناسب لفصل الصيف. متوفر بمجموعة من الألوان العصرية.',
      price: '$19.99',
    },
    {
      image: '/tshirt2.png',
      colors: ['#ffffff', '#ff69b4', '#1e90ff', '#228b22'],
      description: 'تيشيرت رياضي بأقمشة تسمح بالتهوية. مثالي للتمارين اليومية.',
      price: '$25.99',
    },
    {
      image: '/tshirt3.png',
      colors: ['#d2691e', '#9400d3', '#ff4500', '#708090'],
      description: 'تيشيرت كلاسيكي بتصميم بسيط وأنيق. مناسب لجميع الأوقات.',
      price: '$22.99',
    },
  ],

  // progress
  progress: 0,
  setProgress: (value) => set({ progress: value }),

  setColor: (color: string) => set({ color }),
  setCurrentHoodie: (index: number) =>
    set((state: StoreState) => ({
      currentHoodie: index,
      isAtStart: index === 0,
      isAtEnd: index === state.hoodieList.length - 1,
    })),
  setIsAtStart: (value: boolean) => set({ isAtStart: value }),
  setIsAtEnd: (value: boolean) => set({ isAtEnd: value }),

  // الوظيفة الخاصة بالرسوم المتحركة
  animateScene: (scene: Scene, camera: Camera) => {
    const tl = gsap.timeline();
    gsap.set(scene.rotation, {
      x: 0.35,
      y: -0.60,
    });
    gsap.set(camera.rotation, {
      z: -0.15,
    });
    tl.fromTo(
      scene.position,
      { x: 6.80, opacity: 0, duration: 2, ease: 'power3.out' },
      { x: 0, opacity: 1, duration: 2, ease: 'power3.out' },
    ).to(scene.rotation, {
      y: -6.80,
      duration: 2,
      ease: 'power3.out',
    });
  },
}));

export default useStore;
