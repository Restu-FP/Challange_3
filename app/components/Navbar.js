"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if there's a theme stored in localStorage
    const storedTheme = localStorage.getItem("theme");

    // Check system preference if no stored theme
    if (!storedTheme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
    } else {
      setTheme(storedTheme);
    }

    // Apply the theme
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const tabs = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
        >
          My Kisah
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`capitalize px-3 py-2 transition-colors duration-300 ${
                pathname === tab.path
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              {tab.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.path}
                onClick={() => setIsOpen(false)}
                className={`capitalize py-2 transition-colors duration-300 ${
                  pathname === tab.path
                    ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
