"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// Define the product type
type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

// Data
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

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto container">
      <h2 className="container text-2xl md:text-3xl font-semibold mb-6">Agricultural Products</h2>
      <div className="relative container">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronLeft size={24} />
        </button>

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
              <h3 className="text-sm font-semibold mt-4">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <button className="mt-3 px-4 py-2 bg-[#B0DD1D] rounded-full font-medium text-sm text-black w-fit">
                Shop Now
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductAgriculture;
