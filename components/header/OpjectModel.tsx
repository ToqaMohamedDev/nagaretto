'use client';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useThreeContext } from '@/lib/ThreeContext'; // استيراد context
import React from 'react';
import useHoodieStore from '@/lib/hoodieStore';
import { useGSAP } from '@gsap/react';
interface ModelProps {
  color?: string;
  logoTexturePath?: string; // مسار التكستشر
}

export default function OpjectModel({ color, logoTexturePath }: ModelProps) {
  const { nodes, materials } = useGLTF('/tshirt.glb') as any;
  const { setCamera, setScene } = useThreeContext(); // استخدام context لتخزين camera و scene

  // استخدام useThree للحصول على الـ camera و الـ scene وتحديث الـ context
  const { camera, scene } = useThree();
  React.useEffect(() => {
    setCamera(camera);
    setScene(scene);
  }, [camera, scene, setCamera, setScene]);
  const { animateScene } = useHoodieStore();
  
  // تطبيق الرسوم المتحركة على المشهد والكاميرا عند تحميل المكون
  useGSAP(() => {
    animateScene(scene, camera); // تمرير المشهد والكاميرا لدالة الرسوم المتحركة
  }, [scene, camera, animateScene]);
  const texture = logoTexturePath ? useTexture(logoTexturePath) : null;

  if (texture) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.flipY = false;
    materials.Polo_Shirt.map = texture;
    materials.Polo_Shirt.needsUpdate = true;
  }

  if (color) {
    materials.Polo_Shirt.color.set(color);
    materials.Polo_Shirt.needsUpdate = true;
  }

  return (
    <group dispose={null}>
      <group scale={4} position={[0.006, 0.009, -0.024]}>
        <group position={[-0.012, 0.017, 0.005]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Polo_Shirt}
          >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Button}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/tshirt.glb');
