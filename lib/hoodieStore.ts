'use client';
import { create } from 'zustand';
import gsap from 'gsap';
import { Scene, Camera } from 'three';

// تعريف الواجهة لاحتواء البيانات المشتركة
interface Hoodie {
  image: string;
  colors: string[];
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
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'هودي مريح وعصري يوفر لك الراحة والأناقة في جميع الأوقات. تصميمه الفريد يتيح لك التنقل بحرية بينما تحتفظ بمظهر عصري وجذاب.',
      price: '$45.99',
    },
    {
      image: '/base (2) (2).webp',
      colors: ['#ffffff', '#ff6347', '#32cd32', '#8a2be2'],
      description: 'هودي أنيق ومناسب لجميع الفصول. مصنوع من قماش عالي الجودة لتوفير أقصى درجات الراحة.',
      price: '$49.99',
    },
    {
      image: '/base (2) (3).webp',
      colors: ['#ffa500', '#4682b4', '#ff1493', '#2e8b57'],
      description: 'هودي رياضي بتصميم عصري. مثالي للأنشطة الخارجية والمغامرات.',
      price: '$39.99',
    },
    {
      image: '/base (2) (4).webp',
      colors: ['#ffa500', '#4682b4', '#ff1493', '#2e8b57'],
      description: 'هودي رياضي بتصميم عصري. مثالي للأنشطة الخارجية والمغامرات.',
      price: '$39.99',
    },
    {
      image: '/base (2) (5).webp',
      colors: ['#ffa500', '#4682b4', '#ff1493', '#2e8b57'],
      description: 'هودي رياضي بتصميم عصري. مثالي للأنشطة الخارجية والمغامرات.',
      price: '$39.99',
    },
    {
      image: '/base (2) (6).webp',
      colors: ['#ffa500', '#4682b4', '#ff1493', '#2e8b57'],
      description: 'هودي رياضي بتصميم عصري. مثالي للأنشطة الخارجية والمغامرات.',
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
