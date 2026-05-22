export function LogoMarquee() {
  const items = [
    { text: "商业摄影" },
    { text: "产品拍摄" },
    { text: "视频制作" },
    { text: "内容运营" },
    { text: "后期剪辑" },
    { text: "品牌策划" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="text-white text-5xl font-bold">{item.text}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
