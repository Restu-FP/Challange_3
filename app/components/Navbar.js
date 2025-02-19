// app/components/Navbar.js
'use client'; // Menandakan bahwa ini adalah komponen klien

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // Pastikan untuk mengimpor ikon Sun dan Moon

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Effect to check localStorage for dark mode preference
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark"); // Add dark class to html element
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark"); // Add dark class to html element
      } else {
        document.documentElement.classList.remove("dark"); // Remove dark class from html element
      }
      return newMode;
    });
  };

  const tabs = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50 dark:bg-gray-800`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-xl font-bold text-blue-600 dark:text-white">My Kisah</span>
        <div className="hidden md:flex space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`capitalize px-3 py-2 transition-colors ${
                pathname === tab.path
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 hover:dark:text-blue-400"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        {/* Dark Mode Toggle Button */}
        <button
          className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md dark:bg-gray-800">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.path}
                className={`capitalize py-2 transition-colors ${
                  pathname === tab.path
                    ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 hover:dark:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)} // Close menu on link click
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