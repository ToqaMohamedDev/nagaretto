'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // تأكد من تحميل الثيم قبل العرض

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=' absolute top-3 left-5'>
      <div className="flex items-center justify-center">
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        id="darkmode-toggle"
        onChange={handleToggle}
      />
      <label className="btn" htmlFor="darkmode-toggle">
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
    </div>
  );
};

export default ThemeSwitcher;
