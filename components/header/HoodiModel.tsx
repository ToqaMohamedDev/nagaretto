'use client';
import {  Text, useGLTF, useProgress, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useThreeContext } from '@/lib/ThreeContext'; 
import React, { useEffect } from 'react';
import useHoodieStore from '@/lib/hoodieStore';
import { useGSAP } from '@gsap/react';
import useStore from '@/lib/hoodieStore';

interface ModelProps {
  color?: string;
  logoTexturePath?: string; 
}

export default function HoodiModel({ color, logoTexturePath }: ModelProps) {
  //  const { nodes, materials } = useGLTF('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;

 const { nodes, materials } = useGLTF('/hoodie.glb') as any;
 const { setCamera, setScene } = useThreeContext(); // استخدام context لتخزين camera و scene
 const { progress } = useProgress();
 const setProgress = useStore((state) => state.setProgress);
 useEffect(() => {
  setProgress(progress);
}, [progress, setProgress]);

  const { camera, scene } = useThree();
  const { animateScene } = useHoodieStore();
  
  useGSAP(() => {
    setCamera(camera);
    setScene(scene);
    animateScene(scene, camera); 
  }, []);
  const texture = logoTexturePath ? useTexture(logoTexturePath) : null;

  if (texture) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.flipY = false;
    materials.HOODIE_FRONT_5197361.map = texture;
    materials.HOODIE_FRONT_5197361.needsUpdate = true;
  }

  if (color) {
    materials.HOODIE_FRONT_5197361.color.set(color);
    materials.HOODIE_FRONT_5197361.needsUpdate = true;
  }

  return (
    <group dispose={null}>
      <group scale={0.004} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.CORDON_FRONT_5197366} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.HOODIE_FRONT_5197361} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.HOODIE_FRONT_5197361} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.HOODIE_FRONT_5197361} />
      
      </group>
    </group>
  );
}
//useGLTF.preload('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;

useGLTF.preload('/hoodie.glb') as any;
