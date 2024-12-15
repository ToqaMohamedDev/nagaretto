import { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import useStore from '@/lib/hoodieStore'; // استيراد useStore من الملف الثاني

export const useModelLoader = () => {
  const [isClient, setIsClient] = useState(false);
  const setModel = useStore((state) => state.setModel);

  useEffect(() => {
    setIsClient(true); // Only set to true when the component is mounted in the client
  }, []);

  if (!isClient) return null; // Prevent SSR

  const { nodes, materials } = useGLTF('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;

  useEffect(() => {
    if (nodes && materials) {
      setModel({ nodes, materials }); // تخزين النودز والماتيريا في Zustand
    }
  }, [nodes, materials, setModel]);

  return null; // لا حاجة لعرض أي شيء هنا
};
