"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, } from "react";
import { Center, Environment, Float, OrbitControls, } from "@react-three/drei";
import OpjectModel  from './OpjectModel'

interface ViewModelProps {
  color: string;
  image: string;
}


export default function ViewModel({color,image}:ViewModelProps) {
  return (
    <div className='h-screen w-full pointer-events-none'>
    <Canvas >
      <Suspense fallback={null}>
        <Center>
          <Float
            speed={1}
            rotationIntensity={0}
            floatIntensity={2}
          >
          <OpjectModel color={color}  logoTexturePath={image} />

          </Float>
          <OrbitControls  
        
          />
            <Environment files="/hdr/sunflowers_4k.hdr" />
            <ambientLight intensity={1} />
            </Center>
      </Suspense>
    </Canvas>
  </div>
  )
}
