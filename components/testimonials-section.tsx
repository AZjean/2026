"use client"

import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            客户对我的
            <br />
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">工作评价</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            真实的客户反馈是对我工作最好的认可，感谢每一位信任我的客户。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-72 lg:pr-72">
              <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                  alt="引用"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div className="md:max-w-[65%]">
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                  与朱艳合作是一次非常愉快的体验。她不仅专业能力出色，而且沟通顺畅，能够准确理解我的需求并提供超出预期的拍摄效果。整个项目过程中，她始终保持高效和负责的态度，最终交付的作品让我非常满意。
                </p>

                <div>
                  <div className="font-bold text-base md:text-lg">王经理</div>
                  <div className="text-gray-600 text-sm md:text-base">某家居品牌市场总监</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full overflow-hidden hidden lg:block">
              <Image
                src="/images/633b277fc2e3697bb14c6a4f-frances.png"
                alt="客户评价"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
