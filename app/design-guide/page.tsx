import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const mdContent = `# Neo-Brutalist 设计规范 & 参考站分析

> 基于 [xmmxovo.online/about](https://xmmxovo.online/about) 参考站代码分析，结合朱艳个人作品站需求，整理的完整设计规范。

---

## 一、参考站技术栈

| 项目 | 详情 |
|------|------|
| 框架 | React 19 + React Router 7 |
| 样式 | Tailwind CSS 3.4（CDN） |
| 字体 | Space Grotesk（Google Fonts） |
| 图标 | Lucide React |
| 构建 | Vite |

> 我们采用纯 HTML/CSS/JS 方案，引入 Lucide Icons CDN，不使用 React。核心设计模式完全可移植。

---

## 二、Neo-Brutalist 核心设计语言

### 2.1 四大视觉特征

\`\`\`
┌─────────────────────────────────────────────────┐
│  ① 粗黑实边框    border: 3px solid black        │
│  ② 纯黑硬阴影    box-shadow: 6px 6px 0 black    │
│  ③ 按压式交互    hover → translate + 缩小阴影   │
│  ④ 彩色偏移层    绝对定位彩色背景层，制造拼贴感   │
└─────────────────────────────────────────────────┘
\`\`\`

**本质**：拒绝圆滑、拒绝模糊。所有阴影都是实色无 blur 的偏移阴影，所有边框都是粗实线，所有交互都有明确的物理反馈。

### 2.2 核心工具类

\`\`\`css
/* ===== 基础边框 ===== */
.neo-border {
  border: 3px solid var(--black);
}

/* ===== 硬阴影（两种尺寸） ===== */
.neo-shadow {
  box-shadow: 6px 6px 0 var(--black);
}
.neo-shadow-lg {
  box-shadow: 10px 10px 0 var(--black);
}

/* ===== 按压交互 ===== */
.neo-hover {
  transition: transform 0.2s cubic-bezier(0.3,0,0,1.3),
              box-shadow 0.2s cubic-bezier(0.3,0,0,1.3);
}
.neo-hover:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--black);
}
.neo-hover-lg {
  transition: transform 0.25s cubic-bezier(0.3,0,0,1.3),
              box-shadow 0.25s cubic-bezier(0.3,0,0,1.3);
}
.neo-hover-lg:hover {
  transform: translate(5px, 5px);
  box-shadow: 5px 5px 0 var(--black);
}
\`\`\`

**交互原理**：默认状态下卡片有一个向右下偏移的阴影，hover 时卡片向左上移动（\`translate(3px, 3px)\`）同时阴影缩小。视觉上就像卡片被"按下去"了。\`cubic-bezier(0.3,0,0,1.3)\` 产生轻微的弹性回弹感。

### 2.3 彩色偏移层（Card Offset Layer）

这是参考站最精妙的细节之一。每张卡片背后有一层彩色背景：

\`\`\`html
<div class="timeline-content" style="position: relative;">
  <!-- 彩色偏移层：绝对定位，右下方偏移 -->
  <div style="position: absolute;
              right: -3px; bottom: -3px;
              width: 100%; height: 100%;
              background: #2563EB;           ← 彩色背景
              border: 2px solid black;
              border-radius: 16px;
              transition: transform 0.25s;">
  </div>

  <!-- 主卡片 -->
  <div style="position: relative; z-index: 1;
              background: white;
              border: 3px solid black;
              border-radius: 16px;
              box-shadow: 6px 6px 0 black;
              padding: 20px;">
    卡片内容...
  </div>
</div>
\`\`\`

**Hover 效果**：偏移层往右下移 2px，主卡片往左上移 2px，制造出"揭开"的拼贴效果。

### 2.4 图标盒（Icon Box）

参考站使用 Lucide 图标 + 彩色背景盒 + 粗边框 + 小阴影：

\`\`\`html
<div style="width: 48px; height: 48px;
            background: #2563EB;          ← 彩色背景
            color: white;                ← 图标颜色
            border: 2px solid black;     ← 粗边框
            border-radius: 12px;
            box-shadow: 3px 3px 0 black; ← 小硬阴影
            display: flex;
            align-items: center;
            justify-content: center;">
  <i data-lucide="camera" style="width: 22px; height: 22px;"></i>
</div>
\`\`\`

---

## 三、配色系统

### 3.1 主色板（保留蓝/黑/橙/黄 + 扩展）

| 颜色 | 色值 | 用途 |
|------|------|------|
| 🟦 Blue | \`#2563EB\` | 主色、主线任务、JOB字段 |
| ⬛ Black | \`#111827\` | 边框、阴影、标签背景 |
| 🟧 Orange | \`#EA580C\` | 强调色、支线成就、highlight |
| 🟨 Yellow | \`#FACC15\` | 徽章、条形码、STATUS |
| 🩷 Pink | \`#F472B6\` | 支线事件、印章外圈 |
| 🟩 Green | \`#4ADE80\` | ID CARD头部、BORN字段 |
| 🟪 Purple | \`#A78BFA\` | LEVEL字段、影棚搭建 |

### 3.2 浅色背景（用于信息卡片）

| 颜色 | 色值 | 用途 |
|------|------|------|
| blue-light | \`#DBEAFE\` | JOB信息卡、蓝色标签 |
| yellow-200 | \`#FEF08A\` | NAME信息卡、Statement引用条 |
| orange-100 | \`#FFEDD5\` | MAJOR信息卡 |
| green-light | \`#DCFCE7\` | BORN信息卡 |
| pink-light | \`#FBCFE8\` | LOC信息卡、粉色标签 |
| purple-light | \`#E9D5FF\` | LEVEL信息卡、紫色标签 |

### 3.3 中性色

| 颜色 | 色值 | 用途 |
|------|------|------|
| gray-100 | \`#F3F4F6\` | 页面背景 |
| gray-200 | \`#E5E7EB\` | 技能条底色 |
| gray-400 | \`#9CA3AF\` | 辅助文字、日期 |
| gray-600 | \`#4B5563\` | 正文描述 |
| white | \`#FFFFFF\` | 卡片背景、内容区域 |

---

## 四、组件规范

### 4.1 ID CARD 角色信息卡

\`\`\`
┌──────────────────────────────────────────┐
│  🟩 绿色头部条                            │
│  [PLAYER CARD] chip      ID: ZY-...     │
│──────────────────────────────────────────│
│                                          │
│  ┌──────────┐  ┌──────────┐              │
│  │ 🟨 NAME  │  │ 🟦 JOB   │              │
│  │  朱艳    │  │ 摄像&运营 │              │
│  └──────────┘  └──────────┘              │
│  ┌──────────┐  ┌──────────┐              │
│  │ 🟪 LEVEL │  │ 🟩 BORN  │              │
│  │  Lv.7   │  │ 1996.03  │              │
│  └──────────┘  └──────────┘              │
│  ┌──────────┐  ┌──────────┐              │
│  │ 🩷 LOC   │  │ 🟧 MAJOR │              │
│  │ 浙江宁波 │  │ 市场营销 │              │
│  └──────────┘  └──────────┘              │
│  ┌──────────────────────┐                │
│  │ 🟨 EXPERIENCE        │                │
│  │ 7年+ 实战经验        │                │
│  └──────────────────────┘                │
│                                          │
│  ┌── 条形码 ──────────────┐              │
│  │ ||| ||| | || ||| ...   │              │
│  └───────────────────────┘                │
│──────────────────────────────────────────│
│  ⬛ 黑色底栏                              │
│  🟡 STATUS: 正在寻找新的冒险副本...      │
└──────────────────────────────────────────┘
    🩷 OFFICIAL VIBE 印章（右上角旋转）
\`\`\`

**关键细节**：
- 整体微倾斜 \`-1deg\`，hover 回正
- 每个字段是独立卡片（彩色背景 + 粗边框 + 4px 硬阴影）
- 印章：粉色外圈 + 绿色内圈 + 旋转 12deg，hover 回正
- 条形码：用 div 模拟，不同宽度和高度的黑色条

### 4.2 地球Online 时间线

\`\`\`
     左侧（主线）                中轴                右侧（支线）
  ┌──────────────┐                                   ┌──────────────┐
  │ 🟦 offset层   │                                   │ 🟨 offset层   │
  │ [🏠] 2024.04 │───────── ⚫ ─────────             │ [📦] 2024    │
  │ 内容运营主管  │           │              [【主线】] │ 直播间搭建   │
  └──────────────┘           │                        └──────────────┘
                             │
  ┌──────────────┐           │                        ┌──────────────┐
  │ 🟧 offset层   │           │           [【支线】]     │ 🩷 offset层   │
  │ [📦] 2024    │───────── ⚫ ─────────             │ [📷] 2021.07 │
  │ 盲盒清仓     │           │              [【主线】] │ 摄影主管     │
  └──────────────┘           │                        └──────────────┘
                             │
\`\`\`

**关键细节**：
- 中轴：\`3px solid black\` 实线
- 圆点连接器：\`16px\` 黑色实心圆 + 双层 ring（\`0 0 0 6px white, 0 0 0 10px black\`）
- 卡片结构：彩色偏移层 → 主内容层（z-index: 1）
- 图标盒：\`48x48px\` 彩色背景 + \`2px border\` + \`3px shadow\`
- 【主线】/【支线】标签：\`9px\` 黑底白字小徽章
- 交替左右排列，移动端改为单列

### 4.3 技能装备卡片

\`\`\`
┌──────────────────┐
│  ┌────────┐      │
│  │ 🎥 图标 │      │  ← 52x52 彩色图标盒
│  └────────┘      │
│  视频拍摄        │  ← 14px 800 weight
│  ██████████░░░  │  ← 8px 技能条
└──────────────────┘
  ↑ 3px 粗边框
  ↑ 6px 硬阴影
\`\`\`

### 4.4 玩家档案卡片

\`\`\`
┌──────────────────────────────────────────┐
│  ┌────┐  出生地与底色                     │
│  │ 📍│                                   │
│  └────┘  我出生于 1996年3月...            │
└──────────────────────────────────────────┘
  ↑ 3px 粗边框
  ↑ 6px 硬阴影
  ← 36x36 彩色图标盒
\`\`\`

### 4.5 Statement 引用条

\`\`\`
  ┌── STATEMENT ──┐  ← 白底标签，绝对定位
  ┌──────────────────────────────┐
  │                              │
  │   黄色便签纸背景              │  ← #FEF08A
  │   "每一个别人看起来..."      │  ← 900 weight 居中大字
  │                              │
  └──────────────────────────────┘
    ↑ 3px 粗边框
    ↑ 8px 大硬阴影
\`\`\`

### 4.6 气质标签

\`\`\`
┌──────────────────┐
│ 🎯 落地实干派     │  ← 胶囊形 border-radius: 100px
└──────────────────┘
  ↑ 2px 粗边框
  ↑ 3px 小硬阴影
  ← 彩色背景（蓝/橙/黄/绿/粉/紫 6色交替）
\`\`\`

---

## 五、动效规范

### 5.1 滚动入场

\`\`\`css
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
\`\`\`

通过 \`IntersectionObserver\`（threshold: 0.1）触发。

### 5.2 技能条填充

\`\`\`javascript
// IntersectionObserver（threshold: 0.3）
// 进入视口时 width 从 0% 过渡到目标值
bar.style.width = '0%';
setTimeout(() => bar.style.width = targetWidth + '%', 100);
transition: width 1s ease;
\`\`\`

### 5.3 卡片按压交互

\`\`\`css
/* 标准按压 */
transition: transform 0.2s cubic-bezier(0.3,0,0,1.3),
            box-shadow 0.2s cubic-bezier(0.3,0,0,1.3);
:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--black);
}
\`\`\`

### 5.4 倾斜回正

\`\`\`css
/* ID CARD / 头像区 */
transform: rotate(-1deg);   /* 默认微倾斜 */
transition: transform 0.3s cubic-bezier(0.3,0,0,1.3);
:hover {
  transform: rotate(0deg) translate(-2px, -2px);
  box-shadow: 12px 12px 0 var(--black);  /* 阴影同步变大 */
}
\`\`\`

---

## 六、字体规范

| 层级 | 字号 | 字重 | 用途 |
|------|------|------|------|
| Hero 标题 | clamp(36px, 5vw, 58px) | 900 | 页面主标题 |
| 区块标题 | clamp(28px, 4vw, 40px) | 900 | 各区块大标题 |
| 卡片标题 | 18px | 900 | 卡片内小标题 |
| 正文 | 15-17px | 500 | 正文描述 |
| 徽章/标签 | 9-11px | 900 | 【主线】【支线】标签 |
| 字段标签 | 10px | 900 | ID CARD 的 NAME/JOB 等 |

**字体栈**：\`'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif\`

---

## 七、响应式断点

| 断点 | 布局变化 |
|------|---------|
| > 900px | 双列网格、时间线交替左右 |
| 480-900px | 单列网格、时间线单列（靠右） |
| < 480px | 单列、隐藏导航链接、ID CARD 单列 |

**时间线移动端处理**：
- 中轴线从 50% 移到 left: 20px
- 所有卡片统一靠右排列
- 圆点连接器跟随到 left: 20px

---

## 八、参考站 vs 我们的适配对比

| 参考站元素 | 参考站实现 | 我们的适配 |
|-----------|-----------|-----------|
| 字体 | Space Grotesk | Noto Sans SC（中文需要） |
| 图标 | Lucide React | Lucide Icons CDN（UMD） |
| 颜色 | 蓝/粉/绿/紫 | 蓝/黑/橙/黄 + 扩展粉/绿/紫 |
| ID CARD | 绿色头部 + VALID徽章 | 绿色头部 + PLAYER CARD芯片 |
| 时间线 | 主线+支线交替 | 主线+支线交替（保留） |
| Statement | 黄色便签 + 打字机效果 | 黄色便签（暂无打字机） |
| 印章 | OFFICIAL VIBE | OFFICIAL VIBE（保留） |
| 装饰 | SVG星星/箭头/闪电 | 暂未加（可后续扩展） |
| 好友滚动条 | friend-marquee | 不需要（非社交型网站） |
| Footer | 黑底4列网格 | 黑底CTA区域（适配） |

---

## 九、待优化项

- [ ] 添加 SVG 装饰元素（星星、箭头、圆点群）到时间线区域
- [ ] Statement 区域添加打字机光标效果
- [ ] ID CARD 头像区替换为真实照片
- [ ] 统一全站导航组件（4页面共用）
- [ ] 作品卡片区域也应用 Neo-Brutalist 风格统一
`;

export default function DesignGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-semibold prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-2 prose-th:bg-gray-100 prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r prose-li:marker:text-blue-500">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {mdContent}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
