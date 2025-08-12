"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { icon: "👤", label: "User & Wallets", href: "/profile" },
    { icon: "🔄", label: "Product Updates", href: "/updates" },
    { icon: "❓", label: "Help", href: "/help" },
    { icon: "📚", label: "Docs", href: "/docs" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">U</span>
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          User
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}

          <hr className="my-2 border-gray-200 dark:border-gray-700" />

          <button
            onClick={toggleTheme}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="mr-3 text-lg">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          <hr className="my-2 border-gray-200 dark:border-gray-700" />

          <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="mr-3 text-lg">🚪</span>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
