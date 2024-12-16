import { create } from 'zustand';
import { db } from "@/config"; // تأكد من تعريف الاتصال بـ Firebase هنا
import { collection, getDocs } from "firebase/firestore";
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

// تعريف الواجهة الخاصة بالـ Store
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

  // وظيفة لجلب البيانات من Firestore
  fetchHoodieList: () => Promise<void>;
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
  hoodieList: [],
  tshirtList: [
    {
      image: '/base (1).png',
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],
      description: 'تيشيرت خفيف ومريح مناسب لفصل الصيف. متوفر بمجموعة من الألوان العصرية.',
      price: '$19.99',
    },
    // باقي العناصر...
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
    gsap.set(scene.position, {
      y: 0.1,
    });
    gsap.set(scene.rotation, {
      x: 0.35,
      y: -0.6,
    });
    gsap.set(camera.rotation, {
      z: -0.15,
    });
    tl.fromTo(
      scene.position,
      { x: 6.8, opacity: 0, duration: 2, ease: 'power3.out' },
      { x: 0, opacity: 1, duration: 2, ease: 'power3.out' }
    ).to(scene.rotation, {
      y: -6.8,
      duration: 2,
      ease: 'power3.out',
    });
  },
  // وظيفة لجلب البيانات من Firestore
  fetchHoodieList: async () => {
    console.log('وظيفة لجلب البيانات من Firestore');
    try {
      const querySnapshot = await getDocs(collection(db, "hoodies"));
      console.log(querySnapshot);
      const fetchedHoodies: Hoodie[] = []; // تحديد النوع
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedHoodies.push({
          image: data.image,
          description: data.description,
          price: data.price,
        });
      });

      set({ hoodieList: fetchedHoodies });
      console.log("Fetched hoodies:", fetchedHoodies);
    } catch (error) {
      console.error("Error fetching hoodies:", error);
    }
  },
}));

export default useStore;
