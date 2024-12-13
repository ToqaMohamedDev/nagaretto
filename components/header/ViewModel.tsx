"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, } from "react";
import { Center, Environment, Float, OrbitControls, } from "@react-three/drei";
import OpjectModel  from './OpjectModel'

export default function ViewModel() {
    const color = '#aa2727'; 
    const image = "/base (1).png"; 
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
          <Environment files="/hdr/field.hdr" />
        </Center>
      </Suspense>
    </Canvas>
  </div>
  )
}
