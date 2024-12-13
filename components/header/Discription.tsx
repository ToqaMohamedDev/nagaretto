import React from 'react';
import useHoodieStore from '@/lib/hoodieStore'; // Import the store

export default function Discription() {
  const {
    currentHoodie,
    hoodieList,
    setColor
  } = useHoodieStore(); // Destructure the required variables from the store

  return (
    <div className="absolute bottom-[100px] flex flex-col gap-1 right-5 text-white z-10">
      <div className="flex gap-3 items-center justify-end">
        {hoodieList[currentHoodie]?.colors.map((colorOption, index) => (
          <button
            key={index}
            onClick={() => setColor(colorOption)}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: colorOption }}
          />
        ))}
      </div>
      <p className="text-lg font-semibold text-right">{hoodieList[currentHoodie]?.description}</p>
      <p className="text-xl font-bold text-right">{hoodieList[currentHoodie]?.price}</p>
    </div>
  );
}
