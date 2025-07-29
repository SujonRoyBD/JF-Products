"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OurBranch() {
  const [activeBranch, setActiveBranch] = useState("Coimbatore")

  const branches = [
    { name: "Coimbatore", img: "/assets/branch/combatori.png" },
    { name: "Chennai", img: "/assets/branch/chenai.png" },
    { name: "Hyderabad", img: "/assets/branch/haydarabadh.png" },
    { name: "Goa", img: "/assets/branch/goa.png" },
    { name: "Kochi", img: "/assets/branch/kocci.png" },
    { name: "Mumbai", img: "/assets/branch/mumbai.png" },
  ]

  return (
    <div className="container w-full flex p-4 sm:p-6">
      <div className="w-full container">
        <Card className="w-full lg:max-w-6xl rounded-xl shadow-lg mx-auto">
          <CardContent className="w-full p-4 sm:p-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#8BC34A] text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                OUR BRANCHES
              </div>

              {/* Branch Buttons */}
              <div className="flex gap-6 flex-wrap justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {branches.map((branch) => {
                  const isActive = activeBranch === branch.name
                  return (
                    <button
                      key={branch.name}
                      className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? "bg-[#E8F5E9] text-[#8BC34A]"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveBranch(branch.name)}
                    >
                      <Image
                        src={branch.img}
                        alt={branch.name}
                        width={32}
                        height={51}
                        className={`w-[32px] h-[51px] ${
                          isActive ? "saturate-150" : "opacity-70"
                        }`}
                      />
                      <span className="text-xs mt-1">{branch.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Contact Form */}
                <div className="bg-[#0A2342] p-6 sm:p-8 rounded-xl text-white">
                  <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                  <form className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-[#1A3A5F] border-none text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-[#1A3A5F] border-none text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone *"
                      required
                      className="bg-[#1A3A5F] border-none text-white placeholder:text-gray-400"
                    />
                    <Textarea
                      placeholder="Write message"
                      rows={5}
                      className="bg-[#1A3A5F] border-none text-white placeholder:text-gray-400 resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#8BC34A] text-[#0A2342] font-semibold py-3 rounded-lg hover:bg-[#7CB342]"
                    >
                      Submit
                    </Button>
                  </form>
                </div>

                {/* Map Section */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.8135948222657!2d77.57608327320897!3d12.93827261561189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1593fdbd8ee5%3A0x8221196efddca1f1!2sJRR%20TOWERS!5e1!3m2!1sen!2sbd!4v1753804518962!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <Card className="p-4 rounded-xl shadow-sm">
                    <CardContent className="flex items-start gap-3 p-0">
                      <div className="flex-shrink-0 p-2 rounded-full bg-[#E8F5E9] text-[#8BC34A]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold">
                          JRR Towers (2nd Floor), Pattalamma Temple Rd,
                        </p>
                        <p>Basavangudi, Bangalore, 560004</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
