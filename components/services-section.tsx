import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "商业摄影",
      description: "为企业提供专业的商业摄影服务，打造品牌形象，提升产品价值。",
      image: "/images/web-design.svg",
    },
    {
      title: "产品摄影",
      description: "精细的产品拍摄，展现产品细节与质感，助力电商销售转化。",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "人像摄影",
      description: "专业的人像拍摄，捕捉人物神韵，展现独特魅力与个性。",
      image: "/images/product-design.svg",
    },
    {
      title: "视频制作",
      description: "从策划到后期，提供一站式视频制作服务，讲述品牌故事。",
      image: "/images/user-research.svg",
    },
    {
      title: "后期修图",
      description: "专业的后期处理服务，让每一张照片都达到完美效果。",
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              我的<span className="bg-[#f5673c] text-white px-3 py-1 inline-block">内容化探索</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              7年实战经验，从半房文化摄制组组长到月球超商内容运营主管，擅长产品摄影、视频制作、账号运营，专注从0到1打造视觉内容。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#ffcc32] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="联系我们"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">联系我们</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                需要其他服务？请联系我，我很乐意为您提供帮助！
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                <Mail className="w-5 h-5 mr-2" />
                联系我
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
