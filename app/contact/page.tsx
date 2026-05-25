import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-5xl md:text-7xl font-bold mb-4">Get in Touch</p>
            <div className="inline-block bg-[#f5673c] text-white px-6 py-3 md:px-8 md:py-4 text-4xl md:text-6xl font-bold border-[3px] border-black shadow-[6px_6px_0px_0px_#f5673c]">
              与我联系
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className="w-16 h-16 bg-[#006cad] rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">邮箱</h3>
              <p className="text-gray-600 text-lg mb-4">有任何合作想法或工作机会，欢迎随时发邮件给我</p>
              <a
                href="mailto:719771162@qq.com"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg border-2 border-black font-bold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Send className="w-5 h-5" />
                发送邮件
              </a>
            </div>

            <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#ffcc32] hover:shadow-[4px_4px_0px_0px_#ffcc32] hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className="w-16 h-16 bg-[#ffcc32] rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">电话</h3>
              <p className="text-gray-600 text-lg mb-4">急事可以直接电话联系我</p>
              <p className="text-2xl font-bold">+86 130 5690 5688</p>
            </div>

            <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#4ADE80] hover:shadow-[4px_4px_0px_0px_#4ADE80] hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className="w-16 h-16 bg-[#4ADE80] rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">微信</h3>
              <p className="text-gray-600 text-lg mb-4">扫码或搜索微信号添加我</p>
              <p className="text-xl font-bold bg-[#F3F4F6] px-4 py-2 rounded-lg border-2 border-black inline-block">
                WeChat：AZoboq
              </p>
            </div>

            <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#A78BFA] hover:shadow-[4px_4px_0px_0px_#A78BFA] hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className="w-16 h-16 bg-[#A78BFA] rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">地点</h3>
              <p className="text-gray-600 text-lg mb-4">坐标浙江宁波，接受远程协作与线下拍摄</p>
              <p className="text-xl font-bold">📍 浙江 · 宁波</p>
            </div>
          </div>

          <div className="bg-[#ffcc32] border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#000] text-center">
            <h2 className="text-3xl font-bold mb-4">期待与你合作 🚀</h2>
            <p className="text-xl font-medium mb-8 max-w-2xl mx-auto">
              无论您是品牌方还是新媒体探索者或者同行，只要有内容创作需求，欢迎随时联系我沟通想法！
            </p>
            <div className="inline-block bg-white border-[3px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000]">
              <Image
                src="/images/qr/wechat-qr.jpg"
                alt="微信二维码"
                width={192}
                height={192}
                className="object-contain"
              />
              <p className="text-sm font-bold text-gray-500 mt-2">微信扫码联系</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
