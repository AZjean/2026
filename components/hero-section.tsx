import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            我是<span className="bg-[#ffcc32] text-white px-3 py-1 inline-block">朱艳</span>
            <br />
            来自宁波的专业
            <br />
            <span className="bg-[#006cad] text-white px-3 py-1 inline-block">摄像</span>&<span className="bg-[#f5673c] text-white px-3 py-1 inline-block">内容运营</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            7年从业经验，擅长从0到1做内容，具备扎实的短视频创作能力，比起画大饼我更喜欢落地，在实战中持续深耕成长。
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Link href="/contact">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <Mail className="w-5 h-5" />
                联系我
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              >
                <FolderOpen className="w-5 h-5" />
                查看作品集
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#006cad] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/avatar.png"
              alt="个人形象"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
