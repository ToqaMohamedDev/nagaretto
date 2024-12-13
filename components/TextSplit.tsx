'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface TextProps{
  text:string,
  classNameAll:string,
  classNameCarc:string,
}
export default function TextSplit({text,classNameAll,classNameCarc}:TextProps) {
   const controls=useAnimation();
    const {ref ,inView}=  useInView({
        threshold:0.1,
        triggerOnce:false,
     });
     useEffect(()=>{
      if(inView){
        controls.start('animate');
        }else{
            controls.start('initial');

        } 
     },[controls,inView])

  return (
    <motion.div
    className={classNameAll}
    >
      {text.split('').map((chrac,index)=>{
       return <motion.div
       key={index}
       ref={ref}
       initial='initial'
       animate={controls}
       variants={{
        initial:{
            opacity:0,
            y:`0.55em`,
            x:`0.55em`,
            
        },
        animate:{
            opacity:1,
            y:`0em`,
            x:`0em`,
            transition:{
                duration:1,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay:index*0.1
            }
        }
       }}
       className={classNameCarc}
       >
        {chrac + '\u00A0'}
       </motion.div>
      })}  
    </motion.div>
  )
}
