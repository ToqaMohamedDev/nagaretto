'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

const ThreeContext = createContext<any>(null);

export const ThreeProvider = ({ children }: { children: ReactNode }) => {
  const [camera, setCamera] = useState(null);
  const [scene, setScene] = useState(null);

  return (
    <ThreeContext.Provider value={{ camera, scene, setCamera, setScene }}>
      {children}
    </ThreeContext.Provider>
  );
};

export const useThreeContext = () => {
  const context = useContext(ThreeContext);
  if (!context) {
    throw new Error('useThreeContext must be used within a ThreeProvider');
  }
  return context;
};
