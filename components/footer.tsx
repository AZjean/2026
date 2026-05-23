import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                  src="/images/footer-logo.png"
                  alt="个人网站"
                  width={32}
                  height={32}
                  className="object-cover"
                />
                </div>
                <span className="text-lg md:text-xl font-bold">阿渣的作品集</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                保持探索欲，无限进步！
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">页面</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors cursor-pointer">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors cursor-pointer">
                    关于我
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors cursor-pointer">
                    作品集
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="hover:text-white transition-colors cursor-pointer">
                    工作经验
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">联系我</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:719771162@qq.com" className="hover:text-white transition-colors cursor-pointer">
                    719771162@qq.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:13056905688" className="hover:text-white transition-colors cursor-pointer">
                    +86-130-5690-5688
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>由AZ制作 - Infinite Progress</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
