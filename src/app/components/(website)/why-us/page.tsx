import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WhyUsSection() {
  return (
    <section className="w-full py-5 md:py-6 lg:py-9 bg-white">
      <div className=" px-4 md:px-6">
        <div className="flex py-[40px] flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in delivering durable and innovative fencing solutions built to last. With a focus on
              quality and trust, we help secure spaces across industries and communities.
            </p>
          </div>
        </div>
        <div className=" mx-auto md:w-[850px] xl:w-[1100px] grid  items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {/* Card 1: Unmatched Durability */}
          <Card className="flex flex-col p-6 rounded-xl shadow-lg bg-gradient-to-br  from-[#F0F4F8] to-[#E0E8F0]">
            <CardHeader className="p-0 pb-4">
              <Image src="/assets/whyUs/unmathed.png"alt="frame" width={40} height={40}/>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <CardTitle className="text-xl font-bold">Unmatched Durability with Corrosion-Free Technology</CardTitle>
              <p className="text-sm text-gray-700">
                Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust
                and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand
                harsh environmental conditions, offering longevity and reliability.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Customer-Centric Approach */}
          <Card className="flex flex-col  lg:-mt-9 items-start p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#0A2342] to-[#1A4A8A] text-white">
            <CardHeader className="p-0 pb-4">
              <Image src="/assets/whyUs/customer.png"alt="frame" width={40} height={40}/>
            </CardHeader>
            <CardContent className="p-0 space-y-2 ">
              <CardTitle className="text-xl font-bold">Customer-Centric <br /> Approach</CardTitle>
              <p className="text-sm text-gray-300">
                At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services,
                maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to
                excellence is reflected in the positive feedback from our valued clients.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Innovative and Diverse Product Range */}
          <Card className="flex flex-col items-start p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#F0F4F8] to-[#E0E8F0]">
            <CardHeader className="p-0 pb-4">
                <Image src="/assets/whyUs/innovite.png"alt="frame" width={40} height={40}/>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <CardTitle className="text-xl font-bold">Innovative and Diverse Product Range</CardTitle>
              <p className="text-sm text-gray-700">
                We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry
                Mesh, catering to various needs from agricultural to residential applications. Our products combine
                functionality with aesthetic appeal, ensuring both security and style.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center ">
          <Button className="bg-[#8BC34A] hover:bg-[#7CB342] text-white font-bold py-3 px-8 rounded-full text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
