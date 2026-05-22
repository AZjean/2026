"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Briefcase, Rocket, Camera, Clapperboard, Video, Trophy } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      period: "2024.04 - 2026.05",
      company: "宁波月球超商贸易有限公司",
      title: "内容运营主管",
      iconBg: "#006cad",
      Icon: Rocket,
      level: "主线",
      workContent: "负责小红书DTMOON文创IP类精细化运营，制定直播策略、内容策划、产品拍摄，建立SOP，带领团队落地达成销售目标，组织召开数据复盘并分析，详见作品集。",
      platforms: [
        { label: "小红书", bg: "#FF2442", text: "#ffffff", border: "#000", href: "https://xhslink.com/m/9zbo7XIeSak" },
        { label: "淘宝", bg: "#f5673c", text: "#ffffff", border: "#000", href: "https://m.tb.cn/h.Rd2aC1sSJe1QLRw" },
      ],
      achievements: [
        "运营小红店铺：业绩稳步提升并同比上一年增长56%，账号粉丝从2.6w 精准增长至9w，打造多篇平台爆款笔记。",
        "独立从0搭建公司直播间：场景布置、设备调试、直播流程搭建，带队落地全流程，单月直播销售额突破50w。",
        "牵头制定直播玩法：定价及活动方案，针对公司大量滞销库存，独创直播开盲盒清仓模式，累计清仓库存货值超80w成功缓解公司经营压力。",
      ],
    },
    {
      period: "2021.07 - 2024.03",
      company: "宁波牧怡森户外用品有限公司",
      title: "摄影/摄像主管",
      iconBg: "#f5673c",
      Icon: Camera,
      level: "主线",
      workContent: "负责亚马逊Hikenture户外用品类跨境电商全域视觉内容创作，独立完成公司影棚从0~1搭建、产品拍摄、视频剪辑、兼新人带教，详见作品集。",
      platforms: [
        { label: "亚马逊", bg: "#ffffff", text: "#000000", border: "#000", href: "https://www.amazon.com/stores/page/FD816071-A35B-4FB6-BD0B-6EDB312CF094?ingress=2&lp_context_asin=B07R8ZG8WT&visitId=ebd24934-2e3b-4e15-a657-9610b42bb4e9&store_ref=bl_ast_dp_brandlogo_sto&ref_=ast_bln" },
        { label: "乐天", bg: "#ffffff", text: "#FF2442", border: "#FF2442", href: "https://item.rakuten.co.jp/hikenture/038/?iasid=07rpp_10095___3r-mpghrb7k-19-733ecc3e-c666-4a57-aa3e-f693f534495b" },
      ],
      achievements: [
        "提高交互效率：从零搭建专业电商影棚，提供多部门交互的群晖方案，完善拍摄SOP更好的适配跨境运营需求。",
        "视觉内容提升：协助运营部门拍摄剪辑，将原先视频播放率从18%提升到71%，产出过多款BSR榜产品。",
      ],
    },
    {
      period: "2021.03 - 2021.07",
      company: "宁波博洋控股集团有限公司",
      title: "摄像师",
      iconBg: "#ffcc32",
      Icon: Clapperboard,
      level: "主线",
      workContent: "负责博洋家纺旗舰店摄像、剪辑工作，协助策划书写视频脚本，完成家纺类产品宣传片制作，适配品牌电商内容宣传、店铺运营需求。",
      platforms: [
        { label: "天猫", bg: "#FF2442", text: "#000000", border: "#000", href: "https://m.tb.cn/h.Rd2tZdz2PPMv04G" },
      ],
      achievements: [],
    },
    {
      period: "2018.10 - 2021.03",
      company: "宁波半房文化发展有限公司",
      title: "摄制组组长",
      iconBg: "#006cad",
      Icon: Video,
      level: "主线",
      workContent: "负责半房旗舰店等店铺家居杂货类产品拍摄、剪辑，负责抖音家居类、宠物类账号的内容创作，负责人员工作管理及新人工作培训，详见作品集",
      platforms: [
        { label: "抖音1", bg: "#000000", text: "#ffffff", border: "#000", href: "https://v.douyin.com/MRQ2Sgs1LnM/" },
        { label: "抖音2", bg: "#000000", text: "#ffffff", border: "#000", href: "https://v.douyin.com/FU8RlGtbTs4/" },
        { label: "天猫", bg: "#FF2442", text: "#000000", border: "#000", href: "https://m.tb.cn/h.RdEmfrkgyWoxWTX" },
      ],
      achievements: [
        "冷启动抖音账号：主要负责煤球球mua账号的拍摄剪辑，协助内容策划产出脚本、选题，从0粉累计涨粉38.9w，打造多个百万播放爆款视频，成为宠物行业TOP级垂类账号。",
        "统筹团队日常工作：协调各部门需求，分配日常拍摄剪辑任务，制定系统流程带教新人，规范团队内容产出标准。",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* 标题区 - 参考关于我 Welcome to 排版 */}
          <div className="text-center mb-16">
            <p className="text-5xl md:text-7xl font-bold mb-4 leading-none">Experience</p>
            <div className="inline-block bg-[#006cad] text-white px-6 py-3 md:px-8 md:py-4 text-3xl md:text-5xl font-bold border-[3px] border-black shadow-[6px_6px_0px_0px_#006cad]">
              工作经历
            </div>
          </div>

          {/* 地球Online 风格时间线 */}
          <div className="relative max-w-6xl mx-auto">
            {/* 中央竖线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-black -translate-x-1/2 hidden md:block" />

            {/* 桌面端左侧提示：主线任务跳转查看 */}

            {/* 移动端提示 */}

            <div className="space-y-10 md:space-y-14">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* ========== 桌面端：三列 Grid（左 | 中 | 右）========== */}
                  <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] items-start">

                    {/* ---- 左侧：工作信息卡片（长条形）---- */}
                    <div className="pr-8 flex justify-end">
                      <div className="relative w-full group cursor-pointer">
                        {/* 彩色阴影层 */}
                        <div
                          className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black transition-transform duration-[250ms]"
                          style={{ backgroundColor: exp.iconBg }}
                        />
                        {/* 卡片主体 - 长条横向布局 */}
                        <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 md:p-7 shadow-[6px_6px_0px_0px_#000] transition-all duration-[250ms] ease-[cubic-bezier(0.3,0,0,1.3)] group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-[3px_3px_0px_0px_#000]">
                          {/* 头部第一行：图标 | 时间 | 职位 | 主线标签 */}
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <div
                              className="w-11 h-11 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: exp.iconBg }}
                            >
                              <exp.Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-gray-500 text-sm font-medium">{exp.period}</span>
                            <span className="text-gray-300">|</span>
                            <h3 className="text-lg font-bold">{exp.title}</h3>
                            <span className="inline-block bg-black text-white px-2 py-0.5 rounded text-xs font-bold ml-auto">主线</span>
                          </div>

                          {/* 头部第二行：公司名称 */}
                          <p className="text-sm font-semibold text-gray-600 pl-[52px] mb-3">{exp.company}</p>

                          {/* 工作内容（紧凑） */}
                          <p className="text-base font-semibold text-[#222] leading-relaxed pl-[52px]">{exp.workContent}</p>

                          {/* 平台标签 */}
                          {exp.platforms && exp.platforms.length > 0 && (
                            <div className="flex items-center gap-2 mt-4 pl-[52px] flex-wrap">
                              {exp.platforms.map((plat, pi) => (
                                <a
                                  key={pi}
                                  href={plat.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-1.5 rounded-[8px] font-bold text-sm border-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all cursor-pointer inline-block"
                                  style={{
                                    backgroundColor: plat.bg,
                                    color: plat.text,
                                    borderColor: plat.border,
                                  }}
                                >
                                  {plat.label}
                                </a>
                              ))}
                              <span className="flex items-center gap-1 text-sm font-bold text-[#666] cursor-pointer hover:text-[#000] transition-colors ml-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                点击查看店铺
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* ---- 中间：圆点节点 ---- */}
                    <div className="relative flex justify-center pt-8">
                      <div
                        className="w-4 h-4 bg-black rounded-full relative z-10"
                        style={{ boxShadow: "0 0 0 6px white, 0 0 0 10px black" }}
                      />
                    </div>

                    {/* ---- 右侧：工作成果卡片（长条形）---- */}
                    <div className="pl-8">
                      {exp.achievements.length > 0 ? (
                        <div className="relative w-full group cursor-pointer">
                          {/* 彩色阴影层 */}
                          <div
                            className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black transition-transform duration-[250ms]"
                            style={{ backgroundColor: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }}
                          />
                          {/* 卡片主体 */}
                          <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 md:p-7 shadow-[6px_6px_0px_0px_#000] transition-all duration-[250ms] ease-[cubic-bezier(0.3,0,0,1.3)] group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-[3px_3px_0px_0px_#000]">
                            {/* 头部一行：奖杯图标 + 标题 */}
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className="w-11 h-11 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }}
                              >
                                <Trophy className="w-5 h-5 text-white" strokeWidth={2.5} />
                              </div>
                              <span className="text-lg font-bold" style={{ color: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }}>工作成果</span>
                            </div>
                            {/* 成果列表 */}
                            <ol className="space-y-3 mt-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex gap-3">
                                  <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-black mt-0.5"
                                    style={{ backgroundColor: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }}
                                  >{i + 1}</span>
                                  <span className="text-base font-bold text-[#222] leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      ) : null}
                    </div>

                  </div>{/* END 桌面端 Grid */}

                  {/* ========== 移动端：单栏 ========== */}
                  <div className="md:hidden">
                    <div className="absolute left-[14px] top-0 bottom-0 w-[3px] bg-black" />
                    <div className="pl-10 space-y-4">
                      {/* 移动端：工作信息卡片（长条形） */}
                      <div className="relative">
                        <div className="absolute -left-[34px] top-4 w-3 h-3 bg-black rounded-full" style={{ boxShadow: "0 0 0 4px #F5F5F0, 0 0 0 7px black" }} />
                        <div className="relative">
                          <div className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black" style={{ backgroundColor: exp.iconBg }} />
                          <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <div className="w-9 h-9 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: exp.iconBg }}>
                                <exp.Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                              </div>
                              <span className="text-xs font-medium text-gray-500">{exp.period}</span>
                              <span className="font-bold text-sm">{exp.title}</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-1">{exp.company}</p>
                            <p className="text-sm font-semibold text-[#222] leading-relaxed">{exp.workContent}</p>
                            {/* 平台标签 */}
                            {exp.platforms && exp.platforms.length > 0 && (
                              <div className="flex items-center gap-2 mt-3 flex-wrap">
                                {exp.platforms.map((plat, pi) => (
                                  <a
                                    key={pi}
                                    href={plat.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 rounded-[6px] font-bold text-xs border-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer inline-block"
                                    style={{
                                      backgroundColor: plat.bg,
                                      color: plat.text,
                                      borderColor: plat.border,
                                    }}
                                  >
                                    {plat.label}
                                  </a>
                                ))}
                                <span className="flex items-center gap-1 text-xs font-bold text-[#666] cursor-pointer hover:text-[#000] transition-colors ml-1">
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                  </svg>
                                  点击查看店铺
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* 移动端：成果卡片 */}
                      {exp.achievements.length > 0 && (
                        <div className="relative">
                          <div className="absolute -left-[34px] top-4 w-3 h-3 bg-black rounded-full" style={{ boxShadow: "0 0 0 4px #F5F5F0, 0 0 0 7px black" }} />
                          <div className="relative">
                            <div className="absolute -right-[3px] -bottom-[3px] w-full h-full rounded-2xl border-2 border-black" style={{ backgroundColor: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }} />
                            <div className="relative z-[1] bg-white border-[3px] border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000]">
                              <div className="flex items-center gap-2 mb-2">
                                <Trophy className="w-4 h-4" style={{ color: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }} strokeWidth={2.5} />
                                <span className="text-sm font-bold" style={{ color: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }}>工作成果</span>
                              </div>
                              <ol className="space-y-2 mt-1">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-black mt-0.5" style={{ backgroundColor: exp.iconBg === "#ffcc32" ? "#f5673c" : exp.iconBg }}>{i + 1}</span>
                                    <span className="text-sm font-semibold text-[#222] leading-relaxed">{achievement}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
