import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2024.04 - 2026.05",
      title: "内容运营主管",
      company: "宁波月球超商贸易有限公司",
      color: "bg-[#006cad]",
      highlight: "小红书运营 | 直播搭建 | GMV突破50w | 粉丝2.6w→9w",
    },
    {
      period: "2021.07 - 2024.03",
      title: "摄影/摄像主管",
      company: "宁波牧怡森户外用品有限公司",
      color: "bg-[#ffcc32]",
      highlight: "影棚0→1搭建 | 播放率18%→71% | BSR榜产品",
    },
    {
      period: "2021.03 - 2021.07",
      title: "摄像师",
      company: "宁波博洋控股集团有限公司",
      color: "bg-[#f5673c]",
      highlight: "家纺产品宣传片 | 视频脚本策划",
    },
    {
      period: "2018.10 - 2021.03",
      title: "摄制组组长",
      company: "宁波半房文化发展有限公司",
      color: "bg-[#006cad]",
      highlight: "抖音冷启动涨粉38.9w | 团队管理 | 百万爆款视频",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              查看我的<span className="bg-[#006cad] text-white px-3 py-1 inline-block">工作经历</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              多年的实战经验让我积累了丰富的项目经历，从摄影摄像到内容运营，在不同领域都有所建树。
            </p>
            <Link href="/experience">
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <FileText className="w-5 h-5" />
                查看完整简历
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-[3px] border-black rounded-2xl p-5 md:p-6 min-h-auto hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] transition-all">
                {/* 时间 + 公司/职位 */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className={`inline-flex items-center ${exp.color} text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold border-2 border-black`}>
                    {exp.period}
                  </span>
                  <div className="text-right flex-1">
                    <p className="text-sm md:text-base font-bold text-[#0B0B0B] leading-tight">{exp.company}</p>
                    <p className="text-xs md:text-sm font-semibold text-[#393939]">{exp.title}</p>
                  </div>
                </div>

                {/* 高亮成就 */}
                <div className="bg-gray-50 border-2 border-black/10 rounded-xl p-3 mt-3">
                  <p className="text-xs md:text-sm text-[#555] leading-relaxed font-medium">
                    {exp.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
