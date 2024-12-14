import { create } from 'zustand';
import gsap from 'gsap';
import { Scene, Camera } from 'three';

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

interface HoodieState {
  color: string;
  currentHoodie: number;
  isAtStart: boolean;
  isAtEnd: boolean;
  hoodieList: Hoodie[];
  tshirtList:Tshirt[];
  setColor: (color: string) => void;
  setCurrentHoodie: (index: number) => void;
  setIsAtStart: (value: boolean) => void;
  setIsAtEnd: (value: boolean) => void;
  animateScene: (scene: Scene, camera: Camera) => void; // وظيفة الرسوم المتحركة
}

const useHoodieStore = create<HoodieState>((set) => ({
  color: '#fff',
  currentHoodie: 0,
  isAtStart: true,
  isAtEnd: false,
  hoodieList: [
    {
      image: '/base (2) (1).png',
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'هودي مريح وعصري يوفر لك الراحة والأناقة في جميع الأوقات. تصميمه الفريد يتيح لك التنقل بحرية بينما تحتفظ بمظهر عصري وجذاب.',
      price: '$45.99',
    },
    {
      image: '/base (2) (1).png',
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'هودي بتصميم مميز يناسب كافة الأوقات والمناسبات. ستشعر بالراحة التامة بفضل خامته عالية الجودة وتصميمه العصري الذي يناسب ذوقك.',
      price: '$49.99',
    },
  ],
  tshirtList: [
    {
      image: '/base (1).png',
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'هودي مريح وعصري يوفر لك الراحة والأناقة في جميع الأوقات. تصميمه الفريد يتيح لك التنقل بحرية بينما تحتفظ بمظهر عصري وجذاب.',
      price: '$45.99',
    },
    {
      image: '/base (1).png',
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'هودي بتصميم مميز يناسب كافة الأوقات والمناسبات. ستشعر بالراحة التامة بفضل خامته عالية الجودة وتصميمه العصري الذي يناسب ذوقك.',
      price: '$49.99',
    },
  ],
  setColor: (color: string) => set({ color }),
  setCurrentHoodie: (index: number) =>
    set((state: HoodieState) => ({
      currentHoodie: index,
      isAtStart: index === 0,
      isAtEnd: index === state.hoodieList.length - 1,
    })),
  setIsAtStart: (value: boolean) => set({ isAtStart: value }),
  setIsAtEnd: (value: boolean) => set({ isAtEnd: value }),
  animateScene: (scene: Scene, camera: Camera) => {
    const tl = gsap.timeline();
    gsap.set(scene.rotation, {
      x: 0.35,
      y: -0.60,
    });
    gsap.set(camera.rotation, {
      z: -0.15,
    });
    tl.from(scene.position, {
      x: 6.80,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    }).to(scene.rotation, {
      y: -6.80,
      duration: 2,
      ease: 'power3.out',
    });
  },
}));

export default useHoodieStore;
