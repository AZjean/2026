import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/" className="text-[24px] font-bold leading-[30px] hover:opacity-70 transition-opacity cursor-pointer">
            首页
          </Link>
          <Link href="/about" className="text-[24px] font-bold leading-[30px] hover:opacity-70 transition-opacity cursor-pointer">
            关于我
          </Link>
          <Link href="/portfolio" className="text-[24px] font-bold leading-[30px] hover:opacity-70 transition-opacity cursor-pointer">
            作品集
          </Link>
          <Link href="/experience" className="text-[24px] font-bold leading-[30px] hover:opacity-70 transition-opacity cursor-pointer">
            工作经验
          </Link>
        </div>

        <Link href="/contact">
          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </Button>
        </Link>
      </nav>
    </div>
  )
}
