import { BarChart3, Play } from "lucide-react"

export default function AllProduct() {
  return (
    <div className="relative w-full h-48 overflow-hidden bg-white">
      {/* Diagonal repeating band */}
      <div
        className="absolute top-1/3 left-0 w-[200vw] h-12 bg-blue-100 border border-dashed border-gray-300 flex items-center -rotate-3 origin-top-left"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="flex flex-nowrap gap-8 text-blue-800 text-sm font-medium px-8">
          {/* Repeat the pattern multiple times to ensure it covers the width */}
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                <BarChart3 className="w-4 h-4" />
                <span>Quality Product</span>
                <BarChart3 className="w-4 h-4" />
                <span>Shipping Across India</span>
              </div>
            ))}
        </div>
      </div>

    </div>
  )
}
