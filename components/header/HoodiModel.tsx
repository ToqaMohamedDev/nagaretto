'use client';
import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ModelProps {
  color?: string;
  logoTexturePath?: string; // مسار التكستشر
}

export default function HoodiModel({ color, logoTexturePath }: ModelProps) {
    const { nodes, materials } = useGLTF('/hoodie.glb') as any;
    const {camera,scene}= useThree();
    const tl=gsap.timeline();

    
    useGSAP(()=>{
      gsap.set(scene.rotation,{
        x:0.35,
        y:-0.60,
      });
      gsap.set(camera.rotation,{
        z:-0.15,
      })
      tl.from(
            scene.position,
        {
          x:6.80,
          opacity:0,
          duration:2,
          ease:'power3.out',
        },
      ) .to(
        scene.rotation,
        {
          y:-6.80,
          duration:2,
          ease:'power3.out',
        },
      )
    
    },[]);

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
    <group  dispose={null}>
      <group scale={0.004} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.CORDON_FRONT_5197366}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.HOODIE_FRONT_5197361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.HOODIE_FRONT_5197361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.HOODIE_FRONT_5197361}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/hoodie.glb')
