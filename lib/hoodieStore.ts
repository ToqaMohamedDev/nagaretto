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
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'],
      description: 'هودي مريح وعصري مناسب لجميع الأوقات.',
      price: '$45.99',
    },
    {
      image: "/base (2) (1).png",
      colors: ['#ff4500', '#ff6347', '#ff8c00', '#ffd700'],
      description: 'هودي بتصميم مميز وعصري.',
      price: '$49.99',
    },
    {
      image: "/base (2) (1).png",
      colors: ['#ff4500', '#ff6347', '#ff8c00', '#ffd700'],
      description: 'هودي بتصميم مميز وعصري.',
      price: '$49.99',
    },
    {
      image: "/base (2) (1).png",
      colors: ['#ff4500', '#ff6347', '#ff8c00', '#ffd700'],
      description: 'هودي بتصميم مميز وعصري.',
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
