import Image from "next/image";


export default function Trusted() {
  return (
    <div className="w-full container mx-auto ">
      <div className="rounded-[24px] bg-[#002B55] rounded-2xl  py-12">
        <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-12">
          Trusted by over 6K+ customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Premium Products */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <Image src="/assets/svg/Frame (1).png"alt="fra" width={40} height={40}/>
            </div>
            <h3 className="text-white text-xl font-semibold mb-1">Premium</h3>
            <p className="text-blue-100 text-lg">Products</p>
          </div>

          {/* Google Reviews */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
         <Image src="/assets/svg/Frame (1).png"alt="fra" width={40} height={40}/>
            </div>
            <h3 className="text-white text-xl font-semibold mb-1">4000+</h3>
            <p className="text-blue-100 text-lg">Google Review</p>
          </div>

          {/* Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
           <Image src="/assets/svg/Frame (2).png"alt="fra" width={40} height={40}/>
            </div>
            <h3 className="text-white text-xl font-semibold mb-1">Delivery</h3>
            <p className="text-blue-100 text-lg">Across India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
