"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full container bg-white shadow-md fixed top-0 left-0 z-50">
      <div className=" max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
    
        {/* Center: Nav Links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/assets/others/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full object-contain"
            />
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/login" className="flex items-center gap-1 hover:text-blue-600">
            <span>Login</span>
            <Image
              src="/assets/svg/login.svg"
              alt="login"
              height={16}
              width={16}
            />
          </Link>
          <Image
            src="/assets/svg/search.svg"
            alt="search"
            height={16}
            width={16}
            className="cursor-pointer"
          />
       
          <div className="relative cursor-pointer">
            <Image className=""
              src="/assets/svg/cart.svg"
              alt="cart"
              height={16}
              width={16}
            />
            <span className="absolute -top-2 -right-4 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-gray-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <nav className="flex flex-col gap-4 text-sm font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2" />
            <Link href="/login" className="flex items-center gap-2">
              <span>Login</span>
              <FaUser />
            </Link>

            <div className="flex items-center gap-5 pt-2">
              <FaSearch className="cursor-pointer" />
              
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
