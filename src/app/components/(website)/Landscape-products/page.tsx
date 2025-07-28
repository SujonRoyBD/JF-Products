"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// Product type
type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

// Product data
const products: Product[] = [
  {
    id: 1,
    title: "Antiqo Fence",
    price: "₹10,024.00 – ₹14,984.82",
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
    price: "₹4,050.00 – ₹10,770.00",
    image: "/assets/products/land3.png",
  },
  {
    id: 4,
    title: "JF Privezy Grass Wall",
    price: "₹1,646.10 – ₹18,284.10",
    image: "/assets/products/land4.png",
  },
];

const LandscapeProducts = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 container">Landscape Products</h2>
      <div className="relative container">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Scrollable Product List */}
        <div
          ref={carouselRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto scroll-smooth scrollbar-hide pr-6"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px]rounded-[17.44px] bg-[#F2F4F6] shadow-md p-4 flex flex-col justify-between"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={240}
                height={160}
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

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default LandscapeProducts;
