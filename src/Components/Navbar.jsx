import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/imgi_1_logo-GdqARQRt.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/blog", label: "المدونة" },
  { to: "/about", label: "من نحن" },
];

const linkClass = ({ isActive }) =>
  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
    isActive
      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
      : "text-neutral-400 hover:text-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* اللوجو */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          {/* اللينكات */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/blog"
              aria-label="بحث"
              className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <Link
              to="/blog"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
