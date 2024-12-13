import { create } from 'zustand'

interface Hoodie {
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
  setColor: (color: string) => void;
  setCurrentHoodie: (index: number) => void;
  setIsAtStart: (value: boolean) => void;
  setIsAtEnd: (value: boolean) => void;
}

const useHoodieStore = create<HoodieState>((set) => ({
  color: '#fff',
  currentHoodie: 0,
  isAtStart: true,
  isAtEnd: false,
  hoodieList: [
    {
      image: "/base (2) (1).png",
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],  // أسود، أزرق، برتقالي، رمادي داكن
      description: 'هودي مريح وعصري يوفر لك الراحة والأناقة في جميع الأوقات. تصميمه الفريد يتيح لك التنقل بحرية بينما تحتفظ بمظهر عصري وجذاب.',
      price: '$45.99',
    },
    {
      image: "/base (2) (1).png",
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],  // أسود، أزرق، برتقالي، رمادي داكن
      description: 'هودي بتصميم مميز يناسب كافة الأوقات والمناسبات. ستشعر بالراحة التامة بفضل خامته عالية الجودة وتصميمه العصري الذي يناسب ذوقك.',
      price: '$49.99',
    },
    {
      image: "/base (2) (1).png",
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],  // أسود، أزرق، برتقالي، رمادي داكن
      description: 'هودي جديد يجمع بين الراحة والجاذبية. يأتي بتصميم عصري يواكب أحدث صيحات الموضة مع لمسات من الألوان الجذابة.',
      price: '$49.99',
    },
    {
      image: "/base (2) (1).png",
      colors: ['#000000', '#0000ff', '#ff4500', '#808080'],  // أسود، أزرق، برتقالي، رمادي داكن
      description: 'هودي بتصميم أنيق وعصري يوفر لك الراحة التي تحتاجها في كل لحظة. تصميمه المميز يناسب أوقاتك المختلفة ويعطيك مظهراً مميزاً.',
      price: '$49.99',
    },
  ],
  
  setColor: (color: string) => set({ color }),
  setCurrentHoodie: (index: number) => set((state: HoodieState) => ({
    currentHoodie: index,
    isAtStart: index === 0,
    isAtEnd: index === state.hoodieList.length - 1,
  })),
  setIsAtStart: (value: boolean) => set({ isAtStart: value }),
  setIsAtEnd: (value: boolean) => set({ isAtEnd: value }),
}));

export default useHoodieStore;
