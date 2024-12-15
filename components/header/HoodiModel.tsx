'use client';
import {  Text, useGLTF, useProgress, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useThreeContext } from '@/lib/ThreeContext'; 
import React from 'react';
import useHoodieStore from '@/lib/hoodieStore';
import { useGSAP } from '@gsap/react';

interface ModelProps {
  color?: string;
  logoTexturePath?: string; 
}

export default function HoodiModel({ color, logoTexturePath }: ModelProps) {
  //  const { nodes, materials } = useGLTF('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;

 const { nodes, materials } = useGLTF('https://res.cloudinary.com/dqvacnmu8/image/upload/v1734187741/eyfsjnvauu5bqvnh4k6z.glb') as any;
 const { setCamera, setScene } = useThreeContext(); // استخدام context لتخزين camera و scene
 const { progress } = useProgress();

 const stop=false;
  const { camera, scene } = useThree();

  React.useEffect(() => {
    setCamera(camera);
    setScene(scene);
  }, [stop]);
  const { animateScene } = useHoodieStore();
  
  useGSAP(() => {
    animateScene(scene, camera); 
  }, [stop]);
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

