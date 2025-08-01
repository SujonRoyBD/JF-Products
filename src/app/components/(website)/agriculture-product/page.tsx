"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "JF Barbed Wire – 270 GSM",
    price: "₹4,995.00",
    image: "/assets/products/agri1.png",
  },
  {
    id: 2,
    title: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: "/assets/products/agri2.png",
  },
  {
    id: 3,
    title: "GI Poultry Mesh",
    price: "₹1,260.00 – ₹10,750.00",
    image: "/assets/products/agri3.png",
  },
  {
    id: 4,
    title: "JF Bluelink Mesh",
    price: "₹3,067.50 – ₹6,362.50",
    image: "/assets/products/agri4.png",
  },
];

const ProductAgriculture = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

 
  const scrollAmount = 270;

  const scrollLeft = () => {
    if (carouselRef.current) {
      // scroll left by one card width
      const newScrollLeft = carouselRef.current.scrollLeft - scrollAmount;

      if (newScrollLeft <= 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth - carouselRef.current.clientWidth,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const newScrollLeft = carouselRef.current.scrollLeft + scrollAmount;

      if (newScrollLeft >= maxScroll) {

        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-3 md:px-4 lg:px-20 py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Agricultural Products
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          aria-label="Scroll Left"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="flex gap-12 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
        
          {[...products, ...products].map((product, idx) => (
            <div
              key={idx}
              className="min-w-[250px] max-w-[250px] rounded-[17.44px] bg-[#F2F4F6] shadow-md p-4 flex flex-col justify-between"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={240}
                height={160}
                className="rounded-lg object-contain h-40 w-full"
              />
              <h3 className="text-sm font-semibold mt-4">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <button className="mt-3 px-4 py-2 bg-[#B0DD1D] rounded-full font-medium text-sm text-black w-fit">
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          aria-label="Scroll Right"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductAgriculture;
