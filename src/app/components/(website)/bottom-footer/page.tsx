import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BottomFooter() {
  return (
    <footer className="container bg-white text-black py-6 px-4 md:px-6 flex items-center justify-between container">
      <p className="text-sm ">{"Copyright © 2025 JF Products. All rights reserved."}</p>
      <div className="flex items-center space-x-2">
        <Link href="#" aria-label="Facebook" className="hover:text-white">
          <Button variant="ghost" size="icon" className="rounded-full  text-black hover:bg-gray-200">
            <Facebook className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="#" aria-label="Instagram" className=" hover:text-white">
          <Button variant="ghost" size="icon" className="rounded-full  text-black hover:bg-gray-200">
            <Instagram className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="#" aria-label="YouTube" className=" hover:text-white">
          <Button variant="ghost" size="icon" className="rounded-full  text-black hover:bg-gray-200">
            <Youtube className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </footer>
  )
}
