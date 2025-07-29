import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
export default function Component() {
  return (
    <footer className="bg-gradient-to-br from-[#0A2342]  to-[#1A4A8A] text-white text-jf-text-light">
      <div className="container mx-auto px-4 py-4 lg:py-20">
        {/* Top section: Newsletter, Information, Helpful */}
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Join Our JF Products</h3>
            <p className="text-sm mb-6">We`&apos;`ll tell you about store updates and discounts</p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-jf-dark-blue border border-gray-600 text-jf-text-light placeholder:text-gray-400 rounded-lg px-4 py-2"
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  className="border-gray-600 data-[state=checked]:bg-white data-[state=checked]:text-jf-dark-blue"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 rounded-lg py-2 font-semibold"
              >
                Join Now
              </Button>
            </form>
          </div>

          {/* Information & Helpful Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-1">
            {/* Information Section */}
            <div className="grid gap-2">
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <Link href="#" className="hover:underline text-sm">
                Home
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Shop
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Our Story
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Blogs
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Contact
              </Link>
            </div>

            {/* Helpful Section */}
            <div className="grid gap-2">
              <h3 className="text-xl font-bold mb-4">Helpful</h3>
              <Link href="#" className="hover:underline text-sm">
                FAQs
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline text-sm">
                Shipping Policy
              </Link>
              <Link href="#" className="hover:underline text-sm">
                My Account
              </Link>
            </div>
          </div>
        </div>

        {/* Middle section: Branches and Contact Us button */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center mb-12">
          
            <div>
              <div className="flex gap-3 py-5">
               <Image src="/assets/others/logo.png"alt="tt" width={60} height={60}/>
                <h3 className="text-xl font-bold mt-5">Our Branches</h3>
              </div>
              <p className="text-sm">Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
            </div>
          
          <div className="md:text-right">
            <Button className="bg-lime-400 rounded-lg px-8 py-3 font-semibold">
              Contact Us
            </Button>
          </div>
          </div>
        </div>
     
    
    </footer>
  )
}
