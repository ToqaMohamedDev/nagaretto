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
          <Float
            speed={5}
            rotationIntensity={0.1}
            floatIntensity={1}
          >
            <Suspense fallback={null}>
            <HoodiModel color={color} logoTexturePath={image} />

            </Suspense>
            </Float>
            <OrbitControls
              enableZoom={false}    
              enablePan={false}     
            enableDamping={false}
            />
            <Environment files="/hdr/sunflowers_4k.hdr" />
            <ambientLight intensity={0.5} />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}
