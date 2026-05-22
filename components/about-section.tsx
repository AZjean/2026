import Image from "next/image"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#006cad] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-avatar.png" alt="关于我" fill className="object-cover scale-110" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              保持探索欲，无限进步！
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              影视飓风是我很喜欢的频道，无限进步是他们的Slogan也是我的，希望能探索到更大的世界！
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#006cad] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">7年以上拍摄经验</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  多年的摄影实践让我积累了丰富的经验，能够应对各种拍摄场景和挑战。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#f5673c] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">复合型项目</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  已完成多个内容运营项目孵化，爆文数据有迹可查。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
