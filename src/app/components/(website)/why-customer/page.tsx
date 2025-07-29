"use client"
import Image from "next/image"
import { ArrowLeft, ArrowRight,  } from "lucide-react"
import { FaQuoteLeft } from "react-icons/fa6";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WhyCustomer() {
  return (
    <section className="container w-full py-6 md:py-5  bg-white">
      <div className="container md:px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:gap-9 text-center mb-12">
          Why Customers Love Us?
        </h2>
        <div className="grid md:grid-cols-2 md:gap-[400px] lg:gap-[400px] items-center">
          {/* Testimonial Card */}
          <Card className="p-8 lg:w-[700px] md:w-[530px] shadow-lg rounded-xl bg-gray-50 flex flex-col justify-between h-[408px] ">
            <div>
              <FaQuoteLeft className="w-12 h-12 text-lime-500 mb-6" />
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                I had initial issue with stock availability and delivery. Once the product arrived on site the work has
                completed very fast(400ft.) Value for money and easy to install. Happy with the product
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-800">- Samuel Varughese</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-transparent">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </Card>

          {/* Video Thumbnail */}
          <div className="relative w-full lg:w-[339px] md:w-[340px] h-[408px]  max-w-sm mx-auto  rounded-xl overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/assets/others/man.png"
              alt="Customer testimonial video"
              height={300}
              width={369}
              className="object-cover"
            />
           
           
            
          </div>
        </div>
      </div>
    </section>
  )
}
