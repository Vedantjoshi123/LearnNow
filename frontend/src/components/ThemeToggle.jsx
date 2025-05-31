import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Initialize theme based on localStorage or default to light
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  // Update <html> attribute and localStorage when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Toggle theme handler
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-primary text-white hover:bg-green-700 transition"
      aria-label="Toggle dark/light theme"
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
