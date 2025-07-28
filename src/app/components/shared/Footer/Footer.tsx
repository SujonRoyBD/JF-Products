"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", { email, isSubscribed });
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
    setIsSubscribed(false);
  };

  return (
    <div className="px-5 py-7 rounded-md">
      <footer className="rounded-[24px] bg-[#002B55] text-white px-7">
        <div className=" px-6 py-12">
          <div className="px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Join Our JF Products
              </h3>
              <p className="text-slate-300 mb-6 text-sm">
                We&lsquo;ll tell you about store updates and discounts
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  required
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={isSubscribed}
                    onCheckedChange={(checked) =>
                      setIsSubscribed(checked as boolean)
                    }
                    className="border-slate-400"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-slate-300"
                  >
                    Yes, subscribe me to your newsletter.
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-slate-800 hover:bg-slate-100 font-medium"
                >
                  Join Now
                </Button>
              </form>
            </div>
            {/* Information Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Information</h3>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/our-story"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/blogs"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </nav>
              </div>
              <div>
              <h4 className="text-lg font-semibold mt-8 mb-4">Helpful</h4>
              <nav className="space-y-3">
                <Link
                  href="/faqs"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="/terms"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/shipping"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
                <Link
                  href="/account"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  My Account
                </Link>
              </nav>
            </div>
            {/* Contact Section */}
            
          </div>
          {/* Company Info and Logo */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <div className="flex">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="text-slate-800 font-bold text-xl">JF</div>
              </div>
              <div className="flex justify-between">
                <div>
                    <h4 className="font-semibold text-lg">JF Products</h4>
                <p className="text-slate-300 text-sm">
                  Quality products for your lifestyle
                </p>
                </div>
              
              </div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                Copyright © 2025 JF Products. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
