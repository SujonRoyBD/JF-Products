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
      <div className="max-w-screen-xl mx-auto flex items-center text-black px-4 py-2 md:py-2">
        {/* Left: Nav Links */}
        <nav className="hidden md:flex gap-[50px] text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center: Logo */}
        <div className="flex justify-center ml-[210px] items-center">
          <Link href="/">
            <Image
              src="/assets/others/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full object-contain"
            />
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center gap-5 ml-[311px] text-lg">
          <Link href="/login" className="flex items-center gap-1 text-sm">
            <span className="text-black">Login</span>
            <Image
              src="/assets/svg/login.svg"
              alt="login"
              height={15}
              width={15}
              className="inline-block align-middle"
            />
          </Link>
          <Image
            src="/assets/svg/search.svg"
            alt="search"
            height={15}
            width={15}
            className="inline-block align-middle"
          />
          <div className="relative cursor-pointer">
            <Image
              src="/assets/svg/cart.svg"
              alt="cart"
              height={15}
              width={15}
              className="inline-block align-middle"
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <nav className="flex flex-col text-black gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition"
              >
                {link.label}
              </Link>
            ))}

            <hr />

            <Link href="/login" className="flex items-center gap-1">
              <span>Login</span>
              <FaUser />
            </Link>

            <div className="flex items-center gap-4">
              <FaSearch className="cursor-pointer" />
              <div className="relative cursor-pointer">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
