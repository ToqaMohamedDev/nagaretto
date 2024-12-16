import React from 'react';
import useHoodieStore from '@/lib/hoodieStore'; // Import the store

export default function Discription() {
  const { currentHoodie, hoodieList } = useHoodieStore(); // Destructure the required variables from the store
  return (
    <div className="absolute bottom-[120px] left-5 flex flex-col gap-1  text-white z-10">
      <p className="md:text-[14px] text-[12px] dark:text-white text-gray-700 font-semibold sm:w-[450px] w-[290px] text-left">
        {hoodieList[currentHoodie]?.description}
      </p>
      <p className="xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] dark:text-white text-gray-700 font-bold text-left">
        {hoodieList[currentHoodie]?.price}
      </p>
    </div>
  );
}