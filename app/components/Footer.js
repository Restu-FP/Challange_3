"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:your.email@example.com",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/yourusername",
    },
  ];

  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full mt-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section - Made wider */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
            >
              My Kisah
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-base max-w-lg">
              Ingin Menjadi Programmer Handal, Namun Enggan Ngoding!!! 
            </p>
            {/* Social Links moved to brand section */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Contact Info
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                Email: restufajarpratama69@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: +62 857 0064 8159
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Location: Bandung, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section / Copyright - Made fuller width */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
              © {currentYear} My Kisah. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
