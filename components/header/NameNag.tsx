import React from 'react';

export default function NameNag() {
  return (
    <h1
      className="background-text absolute inset-0 md:mb-[10px] mb-[120px] text-gray-800 dark:text-gray-300 md:text-[105px] sm:text-[85px] text-[50px] font-extrabold flex items-center justify-center"
      style={{
        textShadow: `
          0 0 0px #e12222, 
          0 0 1px #e12222, 
          0 0 2px #e12222, 
          0 0 3px #e12222, 
          0 0 4px #e12222
        `,
      }}
    >
      NAGARETTO
    </h1>
  );
}
