import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Briefcase, Calendar, GraduationCap, Award, Rocket, Camera, Clapperboard, Video, Package, Gamepad2, MapPin, Zap, Dog } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-5xl md:text-7xl font-bold mb-4">Welcome to</p>
            <div className="inline-block bg-[#006cad] text-white px-6 py-3 md:px-8 md:py-4 text-4xl md:text-6xl font-bold border-[3px] border-black shadow-[6px_6px_0px_0px_#006cad]">
              欢迎来到AZ的宇宙
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="bg-white border-[3px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_#000] relative transition-all duration-300 hover:rotate-0 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000]"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="absolute -top-4 -right-4 w-[72px] h-[72px] rounded-full border-[3px] border-[#F472B6] flex items-center justify-center bg-white z-20 rotate-12 hover:rotate-0 transition-transform duration-300 shadow-[3px_3px_0px_0px_#000]">
                <div className="w-[52px] h-[52px] rounded-full border-[3px] border-[#4ADE80] flex items-center justify-center">
                  <span className="text-[7px] font-black text-center leading-[1.15]">OFFICIAL<br />VIBE</span>
                </div>
              </div>

              <div className="bg-[#4ADE80] px-6 py-4 border-b-[3px] border-black flex items-center justify-between">
                <div>
                  <span className="inline-block bg-black text-white text-[10px] font-black px-2 py-0.5 rounded mb-1">PLAYER CARD</span>
                  <p className="text-black font-black text-lg leading-tight">ZHU YAN&apos;S UNIVERSE</p>
                </div>
                <span className="bg-white border-[2px] border-black text-[11px] font-black px-2 py-1 rounded text-right leading-tight">
                  ID: ZY<br />199603NB
                </span>
              </div>

              <div className="p-6">
                <div className="rounded-xl border-2 border-black overflow-hidden bg-white shadow-[4px_4px_0px_0px_#000] mb-3 max-w-[220px] mx-auto">
                  <img
                    src="/images/about-photo.png"
                    alt="朱艳"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-[#DBEAFE] rounded-xl border-2 border-black p-3 shadow-[4px_4px_0px_0px_#000]">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#2563EB] mb-1">
                      <Briefcase className="w-3 h-3" /> JOB
                    </span>
                    <p className="text-lg font-black">摄像&内容运营</p>
                  </div>
                  <div className="bg-[#DCFCE7] rounded-xl border-2 border-black p-3 shadow-[4px_4px_0px_0px_#000]">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#4ADE80] mb-1">
                      <Calendar className="w-3 h-3" /> BORN
                    </span>
                    <p className="text-lg font-black">1996.03</p>
                  </div>
                  <div className="bg-[#FFEDD5] rounded-xl border-2 border-black p-3 shadow-[4px_4px_0px_0px_#000]">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#EA580C] mb-1">
                      <GraduationCap className="w-3 h-3" /> MAJOR
                    </span>
                    <p className="text-lg font-black">市场营销</p>
                  </div>
                </div>

                <div className="bg-[#FEF08A] rounded-xl border-2 border-black p-3 shadow-[4px_4px_0px_0px_#000] mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#FACC15] mb-1">
                    <Award className="w-3 h-3" /> EXPERIENCE
                  </span>
                  <p className="text-lg font-black">7年+ 实战经验</p>
                </div>

                <div className="bg-white border-2 border-black rounded-xl p-3 mb-0 overflow-hidden">
                  <span className="text-[10px] font-black text-gray-400 mb-1 block">BARCODE</span>
                  <div className="flex items-end justify-center gap-[2px] h-8">
                    {[2,3,2,1,3,2,1,3,1,2,2,3,1,2,1,1,3,2,1,3,2,1,2,3,1].map((w, i) => (
                      <div key={i} className="bg-black rounded-[1px]" style={{ width: `${w * 2.5}px`, height: `${20 + (w * 6)}px` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] px-6 py-3 border-t-[3px] border-black flex items-center gap-3">
                <span className="inline-block bg-[#FACC15] text-black text-[10px] font-black px-2 py-0.5 rounded">STATUS</span>
                <p className="text-white text-[20px] font-bold">正在寻找新的冒险副本...</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Gamepad2 className="w-8 h-8 text-[#A78BFA]" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold">玩家档案</h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                  我出生于1996年3月，浙江宁波人，虽然是市场营销毕业的（大专）但那时候的我更喜欢摄影，实习期去了家平面设计公司学会了拍摄和基础设计。
                  <br /><br />
                  开始从事短视频行业是在2019年夏天，当时在淘宝TOP前3的家居杂货公司上班，负责短视频拍摄和人员统筹，因为喜欢宠物加入了一个新项目组，熬了两周和策划共创完成10条视频，没想到无心插柳做出了40w粉丝账号。
                  <br /><br />
                  后续的工作不是在拍摄就是在孵化账号，也练就了些从0到1做事情的能力，世界是巨大的游乐场，我一直本着玩家心态尝试各种事项，有些可能与我的本职工作好无关系，比如木刻、攀岩、blender、AI编程。。。但AI时代下，人人平权，我相信只有创意才会给创作带来更多奇迹！
                </p>

              <div className="bg-white border-[3px] border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_#006cad]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF08A] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-xl font-bold">性格与标签</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 pl-14">
                  我是INFJ，慢热，性格比较大大咧咧，不爱磨叽，喜欢按计划进行工作，目前正常深入探索AIGC工作流程中，希望可以更好的运用在工作里。
                </p>
                <div className="flex flex-wrap gap-2 pl-14">
                  <span className="bg-[#006cad] text-white px-4 py-2 rounded-full border-2 border-black font-bold">INFJ</span>
                  <span className="bg-[#f5673c] text-white px-4 py-2 rounded-full border-2 border-black font-bold">拓荒者</span>
                  <span className="bg-[#A78BFA] text-white px-4 py-2 rounded-full border-2 border-black font-bold">网感敏锐</span>
                  <span className="bg-[#4ADE80] text-black px-4 py-2 rounded-full border-2 border-black font-bold">数据思维</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">当前装备栏</h2>
            <div className="bg-white border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000]">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: "Lr", file: "Lr.png" },
                  { name: "Ps", file: "Ps.png" },
                  { name: "Pr", file: "Pr.png" },
                  { name: "Ae", file: "Ae.png" },
                  { name: "Ai", file: "Ai.png" },
                  { name: "Blender", file: "Blender.png" },
                  { name: "剪映", file: "剪映.png" },
                  { name: "ChatGPT", file: "ChatGPT Image.png" },
                  { name: "Gemini", file: "Gemini.png" },
                  { name: "Lovart", file: "lovart.png" },
                  { name: "LibTV", file: "LibTV.png" },
                  { name: "即梦", file: "即梦.png" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white border-2 border-black rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-[4px_4px_0px_0px_#000] transition-shadow"
                  >
                    <img
                      src={`/images/skills/${skill.file}`}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <span className="text-sm font-bold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col items-center justify-center mb-8">
                <h2 className="text-[70px] font-bold">地球Online</h2>
                <span className="bg-[#f5673c] text-white px-4 py-2 text-[50px] font-bold border-[3px] border-black">开放游戏进度</span>
              </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-black -translate-x-1/2 hidden md:block" />
              <div className="space-y-10 md:space-y-14">
                {(() => {
                  const tl = [
                      { left: null, right: { type: "side", title: "用AI制作了一款宠物用品，跑通最小MVP", date: "支线任务", iconBg: "#4ADE80", Icon: Package } },
                      { left: { type: "main", title: "内容运营主管", company: "宁波月球超商贸易有限公司", date: "2024.04", level: "主线", iconBg: "#2563EB", Icon: Rocket }, right: { type: "side", title: "喜欢Ai编程做了款小游戏自娱自乐，上网学习了下个人网站，这也是我第一个个人网站！", date: "支线任务", iconBg: "#FACC15", Icon: Package } },
                      { left: { type: "main", title: "摄影/摄像主管", company: "宁波牧怡森户外用品有限公司", date: "2021.07", level: "主线", iconBg: "#F472B6", Icon: Camera }, right: { type: "side", title: "开始玩Blender，深度爱好者！梦想玩上拓竹的3D打印机！", date: "支线任务", iconBg: "#EA580C", Icon: Package } },
                      { left: { type: "main", title: "摄像师", company: "宁波博洋控股集团有限公司", date: "2021.03", level: "主线", iconBg: "#2563EB", Icon: Clapperboard }, right: { type: "side", title: "这一年我养了小狗，做了一个小红书自制宠物零食账号：爱因斯碳开小灶  3300粉丝", date: "支线任务", iconBg: "#A78BFA", Icon: Dog } },
                      { left: { type: "main", title: "摄制组组长", company: "宁波半房文化发展有限公司", date: "2018.10", level: "主线", iconBg: "#2563EB", Icon: Video }, right: { type: "side", title: "在还没有剪映的年代，我努力学习着AE", date: "支线任务", iconBg: "#A78BFA", Icon: Video } },
                    ];
                  return tl.map((row, i) => (
                      <div key={i} className="relative">
                      {/* 桌面端：三列 Grid */}
                      <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] items-start">
                        {/* 左侧卡片（长条形） */}
                        <div className="pr-8 flex justify-end">
                          {row.left && (
                            <Link href="/experience" className="relative w-full group cursor-pointer block">
                              <div className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black transition-transform duration-[250ms]" style={{ backgroundColor: row.left.iconBg }} />
                              <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 md:p-7 shadow-[6px_6px_0px_0px_#000] transition-all duration-[250ms] ease-[cubic-bezier(0.3,0,0,1.3)] group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-[3px_3px_0px_0px_#000]">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                  <div className="w-11 h-11 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: row.left.iconBg }}>
                                    <row.left.Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                  </div>
                                  <span className="text-gray-500 text-sm font-medium">{row.left.date}</span>
                                  <span className="text-gray-300">|</span>
                                  <h3 className="text-lg font-bold">{row.left.title}</h3>
                                </div>
                                {row.left.company && <p className="text-sm font-semibold text-gray-600 pl-[52px] -mt-1 mb-1">{row.left.company}</p>}
                                {row.left.level && (
                                  <span className="inline-block bg-black text-white px-2 py-0.5 rounded text-xs font-bold ml-[52px]">{row.left.level}</span>
                                )}
                              </div>
                            </Link>
                          )}
                        </div>
                        {/* 中央圆点 */}
                        <div className="relative flex justify-center pt-8">
                          <div className="w-4 h-4 bg-black rounded-full relative z-10" style={{ boxShadow: "0 0 0 6px white, 0 0 0 10px black" }} />
                        </div>
                        {/* 右侧卡片（长条形） */}
                        <div className="pl-8">
                          {row.right && (
                            <div className="relative w-full group cursor-pointer">
                              <div className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black transition-transform duration-[250ms]" style={{ backgroundColor: row.right.iconBg }} />
                              <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 md:p-7 shadow-[6px_6px_0px_0px_#000] transition-all duration-[250ms] ease-[cubic-bezier(0.3,0,0,1.3)] group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-[3px_3px_0px_0px_#000]">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                  <div className="w-11 h-11 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: row.right.iconBg }}>
                                    <row.right.Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                  </div>
                                  <span className="text-lg font-bold" style={{ color: row.right.iconBg }}>{row.right.date}</span>
                                </div>
                                <p className="text-base font-semibold text-[#222] leading-relaxed pl-[52px]">{row.right.title}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 移动端：单栏 */}
                      <div className="md:hidden">
                        <div className="absolute left-[14px] top-0 bottom-0 w-[3px] bg-black" />
                        <div className="pl-10 space-y-4">
                          {row.left && (
                            <Link href="/experience" className="relative block">
                              <div className="absolute -left-[34px] top-4 w-3 h-3 bg-black rounded-full" style={{ boxShadow: "0 0 0 4px #F5F5F0, 0 0 0 7px black" }} />
                              <div className="relative">
                                <div className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black" style={{ backgroundColor: row.left.iconBg }} />
                                <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000]">
                                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <div className="w-9 h-9 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: row.left.iconBg }}>
                                      <row.left.Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">{row.left.date}</span>
                                    <span className="font-bold text-sm">{row.left.title}</span>
                                  </div>
                                  {row.left.company && <p className="text-xs text-gray-600 pl-[44px]">{row.left.company}</p>}
                                  {row.left.level && (
                                    <span className="inline-block bg-black text-white px-2 py-0.5 rounded text-xs font-bold mt-1">{row.left.level}</span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          )}
                          {row.right && (
                            <div className="relative">
                              <div className="absolute -left-[34px] top-4 w-3 h-3 bg-black rounded-full" style={{ boxShadow: "0 0 0 4px #F5F5F0, 0 0 0 7px black" }} />
                              <div className="relative">
                                <div className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black" style={{ backgroundColor: row.right.iconBg }} />
                                <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000]">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="w-9 h-9 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: row.right.iconBg }}>
                                      <row.right.Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                                    </div>
                                    <span className="font-bold text-sm" style={{ color: row.right.iconBg }}>{row.right.date}</span>
                                  </div>
                                  <p className="text-sm font-semibold text-[#222] leading-relaxed pl-[44px] mt-1">{row.right.title}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
