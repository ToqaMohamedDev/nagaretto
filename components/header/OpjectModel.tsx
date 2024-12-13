'use client';
import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  color?: string;
  logoTexturePath?: string; // مسار التكستشر
}

export default function OpjectModel({ color, logoTexturePath }: ModelProps) {
  const { nodes, materials } = useGLTF('/tshirt.glb') as any;

  // تحميل التكستشر إذا تم توفير مسار
  const texture = logoTexturePath ? useTexture(logoTexturePath) : null;

  // تأكد من تطبيق التكستشر فقط إذا كان موجودًا
  if (texture) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.flipY = false;
    materials.Polo_Shirt.map = texture;
    materials.Polo_Shirt.needsUpdate = true;
  }
  console.log(nodes.Object_5.geometry.attributes.uv);
  if (!nodes.Object_5.geometry.attributes.uv) {
    console.error('UV mapping is missing!');
  }

  return (
    <group dispose={null}>
      <group position={[0.006, 0.009, -0.024]}>
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
