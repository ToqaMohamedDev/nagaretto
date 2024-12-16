import React from 'react';
import useHoodieStore from '@/lib/hoodieStore'; // Import the store

export default function Discription() {
  const { currentHoodie, hoodieList } = useHoodieStore(); // Destructure the required variables from the store
  return (
    <div className="absolute bottom-[120px] flex flex-col gap-1 items-center justify-center text-white z-10">
      <p className="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] dark:text-gray-500 text-gray-700 font-semibold sm:w-[450px] w-[290px] text-center">
        {hoodieList[currentHoodie]?.description}
      </p>
      <p className="xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] dark:text-gray-500 text-gray-700 font-bold text-center">
        {hoodieList[currentHoodie]?.price}
      </p>
    </div>
  );
}