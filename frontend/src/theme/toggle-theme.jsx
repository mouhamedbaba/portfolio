"use client"


import React from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from 'next-themes'


const ToggleTheme = () => {
    const {setTheme, theme} = useTheme()

  return (
    <button 
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    className="rounded-full h-8 px-3 text-x inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
      <SunMedium
        size={20}
        className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={20}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ToggleTheme;
