"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import {
  Video,
  Sunset,
  Briefcase,
} from "lucide-react"
import { useState } from "react"

const categories = [
  {
    id: "video",
    label: "短视频制作",
    icon: Video,
    color: "#f5673c",
    description:
      "从脚本策划到拍摄剪辑，打造爆款短视频内容，覆盖种草、带货等多种类型。",
  },
  {
    id: "content",
    label: "内容项目",
    icon: Briefcase,
    color: "#5B9BD5",
    description: "我的工作是主导内容运营与项目策划，用数据驱动增长，打造品牌影响力，很多内容账号起号后很容易不知道发什么，陷入灵感枯竭期，所以我在给DTMOON账号前期规划了三条线路为笔记铺路：\n\n1、IP壁纸等周边插画产出（配合矩阵扩大影响）\n2、种草笔记图文、视频交叉产出（Live图>静态图）\n3、如果有直播必须笔直群联动，直播新品开播前一天到开播当日必发3条新品笔记",
  },
  {
    id: "life",
    label: "工作之外",
    icon: Sunset,
    color: "#4CAF50",
    description:
      "手搓Blender的图和视频以及用AI做的图和视频。",
  },
]

const lifeImages = [
  { src: "/images/portfolio/life/1.png", alt: "工作之外 1", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/2.png", alt: "工作之外 2", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/3.png", alt: "工作之外 3", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/4.png", alt: "工作之外 4", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/7.png", alt: "工作之外 7", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/8.png", alt: "工作之外 8", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/6.png", alt: "工作之外 6", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/17.jpg", alt: "工作之外 17", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/5.png", alt: "工作之外 5", aspectRatio: "1/1", fullWidth: false },
  { src: "/images/portfolio/life/9.png", alt: "工作之外 9", aspectRatio: "3/2", fullWidth: true },
  { src: "/images/portfolio/life/10.png", alt: "工作之外 10", aspectRatio: "3/2", fullWidth: true },
]

const lifeVideos = [
  { src: "/images/portfolio/life/15.mp4", alt: "视频 5", aspectRatio: "3/4", fullWidth: false, poster: "/images/portfolio/life/15-poster.jpg" },
  { src: "/images/portfolio/life/16.mp4", alt: "视频 6", aspectRatio: "3/4", fullWidth: false, poster: "/images/portfolio/life/16-poster.jpg" },
  { src: "/images/portfolio/life/13.mp4", alt: "视频 3", aspectRatio: "3/4", fullWidth: false, poster: "/images/portfolio/life/13-poster.jpg" },
  { src: "/images/portfolio/life/14.mp4", alt: "视频 4", aspectRatio: "3/4", fullWidth: false, poster: "/images/portfolio/life/14-poster.jpg" },
  { src: "/images/portfolio/life/11.mp4", alt: "视频 1", aspectRatio: "16/9", fullWidth: true, poster: "/images/portfolio/life/11-poster.jpg" },
  { src: "/images/portfolio/life/12.mp4", alt: "视频 2", aspectRatio: "16/9", fullWidth: true, poster: "/images/portfolio/life/12-poster.jpg" },
]

const productVideos = [
  { src: "/images/portfolio/video/01.mp4", alt: "产品视频 1", poster: "/images/portfolio/video/01-poster.png" },
  { src: "/images/portfolio/video/02.mp4", alt: "产品视频 2", poster: "/images/portfolio/video/02-poster.png" },
  { src: "/images/portfolio/video/03.mp4", alt: "产品视频 3", poster: "/images/portfolio/video/03-poster.png" },
  { src: "/images/portfolio/video/04.mp4", alt: "产品视频 4", poster: "/images/portfolio/video/04-poster.png" },
  { src: "/images/portfolio/video/05.mp4", alt: "产品视频 5", poster: "/images/portfolio/video/05-poster.png" },
  { src: "/images/portfolio/video/06.mp4", alt: "产品视频 6", poster: "/images/portfolio/video/06-poster.png" },
  { src: "/images/portfolio/video/07.mp4", alt: "产品视频 7", poster: "/images/portfolio/video/07-poster.png", fullWidth: true },
  { src: "/images/portfolio/video/08.mp4", alt: "产品视频 8", poster: "/images/portfolio/video/08-poster.png", fullWidth: true },
  { src: "/images/portfolio/video/09.mp4", alt: "产品视频 9", poster: "/images/portfolio/video/09-poster.png", fullWidth: true },
]

const seedVideos = [
  { src: "/images/portfolio/video/seed-01.mp4", alt: "种草视频 1", poster: "/images/portfolio/video/seed-01-poster.png" },
  { src: "/images/portfolio/video/seed-02.mp4", alt: "种草视频 2", poster: "/images/portfolio/video/seed-02-poster.png" },
  { src: "/images/portfolio/video/seed-03.mp4", alt: "种草视频 3", poster: "/images/portfolio/video/seed-03-poster.png" },
  { src: "/images/portfolio/video/seed-04.mp4", alt: "种草视频 4", poster: "/images/portfolio/video/seed-04-poster.jpg" },
  { src: "/images/portfolio/video/seed-05.mp4", alt: "种草视频 5", poster: "/images/portfolio/video/seed-05-poster.png" },
  { src: "/images/portfolio/video/seed-06.mp4", alt: "种草视频 6", poster: "/images/portfolio/video/seed-06-poster.png" },
]

// 产品拍摄 - 3:4竖版图片
const productImages = [
  { src: "/images/portfolio/product/1.png", alt: "产品拍摄 1" },
  { src: "/images/portfolio/product/2.png", alt: "产品拍摄 2" },
  { src: "/images/portfolio/product/3.png", alt: "产品拍摄 3" },
  { src: "/images/portfolio/product/4.jpg", alt: "产品拍摄 4" },
  { src: "/images/portfolio/product/5.jpg", alt: "产品拍摄 5" },
  { src: "/images/portfolio/product/6.png", alt: "产品拍摄 6" },
]

// 内容项目 - DTMOON运营数据
const dtmoonStats = [
  {
    title: "全平台涨粉 10w+",
    value: "10w+",
    subtitle: "粉丝增长",
    icon: "📈",
    color: "#5B9BD5",
  },
  {
    title: "单条笔记浏览量 60w+",
    value: "60w+",
    subtitle: "最高浏览",
    icon: "▶️",
    color: "#f5673c",
  },
  {
    title: "内容曝光 1000w+",
    value: "1000w+",
    subtitle: "总曝光量",
    icon: "👁️",
    color: "#FF6B35",
  },
  {
    title: "转化率提升 105%",
    value: "105%",
    subtitle: "转化效果",
    icon: "🎯",
    color: "#4CAF50",
  },
]

const dtmoonHighlights = [
  {
    title: "IP品牌账号笔记规划",
    description: "完成DTMOON品牌在小红书的矩阵布局以及商店号体系搭建",
    tags: ["账号运营", "品牌建设"],
    image: "/images/portfolio/content/slide-27-img-00.png",
    views: "11.7万",
    likes: "6820",
    link: "http://xhslink.com/o/SfvZC4pBq6",
  },
  {
    title: "种草口诀堆、叠、仓",
    description: "策划并执行多条爆款笔记，通过数据分析优化内容方向，建立可持续的爆款生产机制",
    tags: ["内容策划", "爆款打造"],
    image: "/images/portfolio/content/slide-27-img-01.png",
    views: "60万",
    likes: "1.2w",
    link: "http://xhslink.com/o/JxqplKsCww",
  },
  {
    title: "直播运营体系搭建",
    description: "搭建完整的直播运营SOP，包括主播话术、场控流程、投流策略，实现直播间GMV稳步增长。",
    tags: ["小红书", "SOP搭建"],
    image: "/images/portfolio/content/slide-27-img-02.png",
    views: "10.1万",
    likes: "4588",
    link: "http://xhslink.com/o/7B7oXHFgV3F",
  },
]

// ====== 内容项目 - 三大板块 ======

// 板块1：DTMOON内容项目
const dtmoonSection = {
  title: "DTMOON内容项目",
  description: "我的工作是主导内容运营与项目策划，用数据驱动增长，打造品牌影响力，很多内容账号起号后很容易不知道发什么，陷入灵感枯竭期，所以我在给DTMOON账号前期规划了三条线路为笔记铺路：\n\n1、IP壁纸等周边插画产出（配合矩阵扩大影响）\n2、种草笔记图文、视频交叉产出（Live图>静态图）\n3、如果有直播必须笔直群联动，直播新品开播前一天到开播当日必发3条新品笔记",
  stats: [
    { icon: "📈", value: "10w+", label: "全平台涨粉", sub: "粉丝增长", color: "#5B9BD5" },
    { icon: "▶️", value: "60w+", label: "单条笔记浏览量", sub: "最高浏览", color: "#f5673c" },
    { icon: "👁️", value: "1000w+", label: "内容曝光", sub: "总曝光量", color: "#FF6B35" },
    { icon: "🎯", value: "105%", label: "转化率提升", sub: "转化效果", color: "#4CAF50" },
  ],
  cards: dtmoonHighlights,
}

// 板块2：AI设计宠物用品项目
const aiPetSection = {
  title: "AI设计宠物用品项目",
  description: "我的工作是寻找市场上适合IP呈现的宠物用品载体，然后用滚滚长江东逝水Ai画出平面图，再转去AI软件做效果图，这样比起传统打样较大的缩短了时间成本，还可以探索出更多可能",
  stats: [
    { icon: "🎨", value: "20+", label: "AI设计方案", sub: "产出数量", color: "#9B59B6" },
    { icon: "⏱️", value: "-50%", label: "缩短打样周期", sub: "效率提升", color: "#f5673c" },
    { icon: "💡", value: "20+", label: "创意方向探索", sub: "更多可能", color: "#5B9BD5" },
    { icon: "🐾", value: "3 类", label: "宠物用品载体", sub: "覆盖品类", color: "#4CAF50" },
  ],
  cards: [
    {
      title: "IP衍生品设计",
      description: "将原创IP形象应用到各类宠物用品载体上，通过AI快速迭代出多种视觉方案。",
      tags: ["AI平面设计", "IP衍生"],
      image: "/images/portfolio/product/2-1.png",
      views: "12万",
      likes: "5298",
      link: "http://xhslink.com/o/8Xu409oZFRJ",
    },
    {
      title: "产品效果图制作",
      description: "从AI平面图出发，使用Agent完成高匹配的效果图",
      tags: ["3D建模", "效果渲染"],
      image: "/images/portfolio/product/2-2.png",
      views: "3.8万",
      likes: "156",
      link: "http://xhslink.com/o/9ZuiuXAFoHY",
    },
    {
      title: "多方案快速打样",
      description: "传统打样需要一周以上，AI流程压缩到1-2天，支持同时探索多个创意方向。",
      tags: ["效率优化", "成本控制"],
      image: "/images/portfolio/product/2-3.png",
      views: "4.2万",
      likes: "95",
      link: "http://xhslink.com/o/5jwWbnZckkg",
    },
  ],
}

// 板块3：煤球球mua宠物账号项目
const meiqiuqiuSection = {
  title: "煤球球mua宠物账号项目",
  description: "我的工作是共创脚本策划，独立拍摄视频、视频剪辑，我定位是提问者，站在观众视角向策划发起提问，比如月薪4000如何高性价比养猫等?出租房如何给猫咪制造更好的条件？等，然后策划产出文案我补充拍摄脚本，为了给账号增强记忆点我做了以下操作：统一视频封面、BGM、音效、配音（用来增强记忆捆绑）",
  stats: [
    { icon: "📱", value: "38.9w", label: "累计涨粉", sub: "抖音平台", color: "#000000" },
    { icon: "▶️", value: "100w+", label: "单条最高播放", sub: "爆款视频", color: "#FF2442" },
    { icon: "🏆", value: "TOP级", label: "垂类账号排名", sub: "宠物行业", color: "#f5673c" },
    { icon: "🎬", value: "100+", label: "产出短视频", sub: "总发布量", color: "#5B9BD5" },
  ],
  cards: [
    {
      title: "冷启动0→38.9万粉",
      description: "从零开始打造煤球球mua宠物账号，通过提问式内容定位切入，实现快速涨粉。",
      tags: ["冷启动", "账号运营"],
      image: "/images/portfolio/life/3-1.png",
      views: "38.9万",
      likes: "1.2万",
      link: "https://www.douyin.com/user/MS4wLjABAAAAF8mWVF-0U9mI55HEJ3uiGYSoHgxtSr8DCpIy7Cle7tQ?from_tab_name=main",
    },
    {
      title: "提问式内容策略",
      description: "以观众视角发起问题：月薪4000养猫？租房养猫条件？引发共鸣和讨论。",
      tags: ["内容策划", "用户视角"],
      image: "/images/portfolio/life/3-2.png",
      views: "22.3万",
      likes: "8600",
    },
    {
      title: "记忆点体系搭建",
      description: "统一封面风格、BGM旋律、音效设计和配音腔调，形成强记忆捆绑。",
      tags: ["视觉规范", "听觉识别"],
      image: "/images/portfolio/life/3-3.png",
      views: "15.7万",
      likes: "6200",
    },
  ],
}

// 所有板块汇总（用于渲染）
const allContentSections = [dtmoonSection, aiPetSection, meiqiuqiuSection]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("video")

  const currentCategory = categories.find((c) => c.id === activeTab)

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              欢迎查看我的
              <span className="bg-[#ffcc32] text-black px-3 py-1 inline-block ml-2">
                作品集
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              短视频制作、内容项目与工作之外，用镜头讲述故事
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`
                    flex items-center gap-2 px-5 py-3 rounded-[12px] font-semibold text-sm md:text-base
                    border-[3px] transition-all cursor-pointer
                    ${
                      isActive
                        ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-white text-[#0B0B0B] border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          {activeTab === "video" ? (
            /* 短视频制作 - 产品视频 + 种草视频 */
            <div>
              {/* 产品视频 */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-7 bg-[#f5673c] rounded-full inline-block"></span>
                  产品视频
                </h3>
                {/* 竖版视频网格 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  {productVideos.filter(v => !v.fullWidth).map((vid, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <div className="relative aspect-[3/4]">
                        <video
                          src={vid.src}
                          poster={vid.poster}
                          controls
                          preload="none"
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 横版全宽视频 */}
                {productVideos.filter(v => v.fullWidth).map((vid, index) => (
                  <div
                    key={`fw-${index}`}
                    className="mt-6 group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <div className="relative aspect-[16/9]">
                      <video
                        src={vid.src}
                        poster={vid.poster}
                        controls
                        preload="none"
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* 种草视频 */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-7 bg-[#f5673c] rounded-full inline-block"></span>
                  种草视频
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  {seedVideos.map((vid, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <div className="relative aspect-[3/4]">
                        <video
                          src={vid.src}
                          poster={vid.poster}
                          controls
                          preload="none"
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 产品拍摄 - 3:4竖版图片 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-7 bg-[#f5673c] rounded-full inline-block"></span>
                  产品拍摄
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-[17px]"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : activeTab === "content" ? (
            /* 内容项目 - 三大板块 */
            <div className="space-y-16 md:space-y-20">
              {allContentSections.map((section, sIndex) => (
                <div key={sIndex}>
                  {/* 板块标题 + 描述 */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* 数据卡片 */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {section.stats.map((stat, si) => (
                      <div
                        key={si}
                        className="bg-white border-[3px] border-black rounded-[20px] p-4 md:p-5 text-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                      >
                        <div className="text-2xl md:text-3xl mb-1.5">{stat.icon}</div>
                        <div className="text-xl md:text-2xl font-bold mb-0.5" style={{ color: stat.color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-[#0B0B0B]">{stat.label}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{stat.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* 子卡片 - 竖屏3:4 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                    {section.cards.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white border-[3px] border-black rounded-[20px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col"
                      >
                        {/* 顶部竖屏图片 3:4 */}
                        <div className="relative aspect-[3/4] w-full">
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </a>
                          ) : (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          )}
                        </div>

                        {/* 播放量/点赞数 行 */}
                        <div className="flex items-center gap-4 px-4 md:px-5 pt-3 pb-2">
                          <span className="flex items-center gap-1.5 text-sm font-bold" style={{ color: "#5B9BD5" }}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                              <circle cx="12" cy="12" r="3"/>
                            </svg>
                            {item.views}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm font-bold" style={{ color: "#FF6B9D" }}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            {item.likes}
                          </span>
                        </div>

                        {/* 虚线分隔 */}
                        <div className="mx-4 md:mx-5 border-t border-dashed border-gray-200"></div>

                        {/* 文字区域 */}
                        <div className="p-4 md:p-5 flex flex-col flex-1">
                          <h3 className="text-base md:text-lg font-bold text-[#0B0B0B] mb-2 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3 flex-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 工作之外 - Life adaptive layout */
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-3">
                  {currentCategory?.label}
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                  {currentCategory?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
                {lifeImages.map((img, index) => (
                  <div
                    key={`life-${index}`}
                    className={`group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${img.fullWidth ? "sm:col-span-2 lg:col-span-3" : ""}`}
                    style={{ aspectRatio: img.aspectRatio }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes={img.fullWidth ? "100vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    />
                  </div>
                ))}
                {/* Full-width videos (11, 12) */}
                {lifeVideos.filter(v => v.fullWidth).map((vid, index) => (
                  <div
                    key={`video-fw-${index}`}
                    className="group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all sm:col-span-2 lg:col-span-3"
                    style={{ aspectRatio: vid.aspectRatio }}
                  >
                    <video
                      src={vid.src}
                      poster={vid.poster}
                      controls
                      preload="none"
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                    />
                  </div>
                ))}
                {/* Portrait videos (13-16) in 2-up rows */}
                {(() => {
                  const portraitVids = lifeVideos.filter(v => !v.fullWidth)
                  const rows = []
                  for (let i = 0; i < portraitVids.length; i += 2) {
                    rows.push(portraitVids.slice(i, i + 2))
                  }
                  return rows.map((row, rowIndex) => (
                    <div key={`video-row-${rowIndex}`} className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {row.map((vid, vidIndex) => (
                        <div
                          key={`video-portrait-${rowIndex}-${vidIndex}`}
                          className="group relative overflow-hidden border-[3px] border-black rounded-[20px] bg-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                          style={{ aspectRatio: vid.aspectRatio }}
                        >
                          <video
                            src={vid.src}
                            poster={vid.poster}
                            controls
                            preload="none"
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                          />
                        </div>
                      ))}
                    </div>
                  ))
                })()}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
