// src/components/HoodiViewer.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Center, Environment, Float, OrbitControls } from '@react-three/drei';
import HoodiModel from './HoodiModel';

interface HoodiViewerProps {
  color: string;
  image: string;
}

export default function HoodiViewer({ color, image }: HoodiViewerProps) {
  return (
    <div className="h-screen w-full pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <Center>
            <HoodiModel color={color} logoTexturePath={image} />
            <OrbitControls enableZoom={false} />
            <Environment files="/hdr/sunflowers_4k.hdr" />
            <ambientLight intensity={1} />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}
