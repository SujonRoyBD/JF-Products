"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Product type
type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Antiqo Fence",
    price: "₹10,024.00 - ₹14,984.82",
    image: "/assets/products/land1.png",
  },
  {
    id: 2,
    title: "JF Australian Trellis",
    price: "₹6,962.00",
    image: "/assets/products/land2.png",
  },
  {
    id: 3,
    title: "JF Polyhex Mesh",
    price: "₹4,050.00 - ₹10,770.00",
    image: "/assets/products/land3.png",
  },
  {
    id: 4,
    title: "JF Privezy Grass Wall",
    price: "₹1,646.10 - ₹18,284.10",
    image: "/assets/products/land4.png",
  },
  {
    id: 5,
    title: "JF Spike Fence",
    price: "₹2,500.00",
    image: "/assets/products/land1.png",
  },
  {
    id: 6,
    title: "JF Vertical Green",
    price: "₹4,800.00",
    image: "/assets/products/land2.png",
  },
];

const LandscapeProducts = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToItem = useCallback((index: number) => {
    const targetItem = itemRefs.current[index];
    if (targetItem && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: targetItem.offsetLeft,
        behavior: "smooth",
      });
    }
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(nextIndex);
    scrollToItem(nextIndex);
  }, [currentIndex, scrollToItem]);

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(prevIndex);
    scrollToItem(prevIndex);
  };

  useEffect(() => {
    // Only autoplay on medium screens and up
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="md:px-4 lg:px-20 py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Landscape Products</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          aria-label="Previous"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-9 overflow-x-auto scroll-smooth scrollbar-hide pr-6"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="min-w-[90%] sm:min-w-[32%] lg:min-w-[23%] rounded-[17.44px] bg-[#F2F4F6] shadow-md p-4 flex flex-col justify-between"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={240}
                height={160}
                priority
                className="rounded-lg object-contain h-40 w-full"
              />
              <h3 className="text-base font-semibold mt-4">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <button className="mt-3 px-3 py-2 bg-[#C6F300] rounded-full font-medium text-sm text-black w-fit">
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          aria-label="Next"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default LandscapeProducts;
