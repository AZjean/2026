import { ArrowRight, Video, Sunset, Briefcase, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "短视频制作",
    description:
      "从脚本策划到拍摄剪辑，打造爆款短视频内容，覆盖种草、带货等多种类型。",
    tag: "视频",
    icon: Video,
    color: "#f5673c",
    image: "/images/portfolio/portrait/slide-12-img-01.jpg",
  },
  {
    title: "内容项目",
    description:
      "主导内容运营与项目策划，用数据驱动增长，打造有影响力的品牌内容。",
    tag: "运营",
    icon: Briefcase,
    color: "#5B9BD5",
    image: "/images/portfolio/content/slide-27-img-00.webp",
  },
  {
    title: "工作之外",
    description:
      "手搓Blender的图和视频以及用AI做的图和视频。",
    tag: "生活",
    icon: Sunset,
    color: "#4CAF50",
    image: "/images/portfolio/life/4.webp",
  },
]

export function PortfolioSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            欢迎查看我的
            <br />
            <span className="bg-[#ffcc32] text-black px-3 py-1 inline-block">
              作品集
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mt-3">
            短视频制作、内容项目、工作之外
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 auto-rows-auto">
          {/* 左侧：短视频制作 */}
          <Link
            href="/portfolio"
            className="group grid grid-cols-[1fr_1fr] bg-white border-[3px] border-black rounded-[24px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center border-2 border-black"
                  style={{ backgroundColor: categories[0].color }}
                >
                  <Video className="w-4 h-4" />
                </div>
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {categories[0].tag}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#0B0B0B]">
                {categories[0].title}
              </h3>
              <p className="text-sm text-[#393939] mb-4 leading-relaxed line-clamp-2">
                {categories[0].description}
              </p>
              <span className="flex items-center gap-1.5 font-semibold text-[#0B0B0B] hover:gap-2.5 transition-all text-xs md:text-sm">
                查看详情
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div
              className="relative overflow-hidden min-h-[140px] md:min-h-[200px]"
              style={{ backgroundColor: categories[0].color }}
            >
              <Image
                src={categories[0].image}
                alt={categories[0].title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Link>

          {/* 右侧：工作之外（跨两行） */}
          <Link
            href="/portfolio"
            className="group grid grid-cols-[1fr_1fr] bg-white border-[3px] border-black rounded-[24px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all md:row-span-2"
          >
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center border-2 border-black"
                  style={{ backgroundColor: categories[2].color }}
                >
                  <Sunset className="w-4 h-4" />
                </div>
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {categories[2].tag}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#0B0B0B]">
                {categories[2].title}
              </h3>
              <p className="text-sm text-[#393939] mb-4 leading-relaxed line-clamp-2">
                {categories[2].description}
              </p>
              <span className="flex items-center gap-1.5 font-semibold text-[#0B0B0B] hover:gap-2.5 transition-all text-xs md:text-sm">
                查看详情
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div
              className="relative overflow-hidden min-h-[140px] md:min-h-full"
              style={{ backgroundColor: categories[2].color }}
            >
              <Image
                src={categories[2].image}
                alt={categories[2].title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Link>

          {/* 左侧下方：内容项目 */}
          <Link
            href="/portfolio"
            className="group grid grid-cols-[1fr_1fr] bg-white border-[3px] border-black rounded-[24px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center border-2 border-black"
                  style={{ backgroundColor: categories[1].color }}
                >
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {categories[1].tag}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#0B0B0B]">
                {categories[1].title}
              </h3>
              <p className="text-sm text-[#393939] mb-4 leading-relaxed line-clamp-2">
                {categories[1].description}
              </p>
              <span className="flex items-center gap-1.5 font-semibold text-[#0B0B0B] hover:gap-2.5 transition-all text-xs md:text-sm">
                查看详情
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div
              className="relative overflow-hidden min-h-[140px] md:min-h-[200px]"
              style={{ backgroundColor: categories[1].color }}
            >
              <Image
                src={categories[1].image}
                alt={categories[1].title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/portfolio"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base border-[3px] border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            浏览全部作品
          </Link>
          <Link
            href="/experience"
            className="bg-white text-black px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 w-full sm:min-w-[194px] text-sm md:text-base border-[3px] border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
          >
            <Search className="w-5 h-5" />
            工作经验
          </Link>
        </div>
      </div>
    </section>
  )
}
