export type ProjectCategory = "games" | "apps" | "ai-tools" | "teaching";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tier: "flagship" | "curated";
  visibility: "public" | "private";
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; shortLabel: string; badgeClass: string }
> = {
  games: {
    label: "網頁遊戲 & 引擎",
    shortLabel: "遊戲引擎",
    badgeClass: "text-[#1E40AF] bg-[#EFF6FF] border-[#BFDBFE]",
  },
  apps: {
    label: "實用 Web App",
    shortLabel: "Web App",
    badgeClass: "text-[#065F46] bg-[#ECFDF5] border-[#A7F3D0]",
  },
  "ai-tools": {
    label: "AI 與開發工具",
    shortLabel: "AI 工具",
    badgeClass: "text-[#5B21B6] bg-[#F5F3FF] border-[#DDD6FE]",
  },
  teaching: {
    label: "教學與資料分析",
    shortLabel: "教學資源",
    badgeClass: "text-[#92400E] bg-[#FFFBEB] border-[#FDE68A]",
  },
};

export const PROJECTS: ProjectItem[] = [
  // === S-Tier Flagships ===
  {
    id: "realistic-aquarium",
    title: "擬真水族箱",
    subtitle: "Realistic Aquarium · 3D 生態養魚模擬",
    category: "games",
    tier: "flagship",
    visibility: "private",
    status: "Active Dev",
    summary:
      "照真實養魚道理照顧的 3D 網頁水族箱：完整模擬硝化循環、水質檢測、換水、藻與螺、死因教學與五種觀賞視角（含魚眼）。",
    highlights: [
      "Three.js 純靜態網頁架構，支援手機橫式／全螢幕／觀賞模式",
      "內建水質模型與飼養卡數據管線，搭配專屬 AI 養魚顧問後端",
      "從開案到 v0.3.x 持續高頻迭代與自動化驗收",
    ],
    stack: ["Three.js", "JavaScript", "WebGL", "Node.js", "AI Advisor"],
    year: "2026",
  },
  {
    id: "dungeon-100",
    title: "地城 100",
    subtitle: "Dungeon 100 · 手機直式回合制解謎",
    category: "games",
    tier: "flagship",
    visibility: "private",
    status: "Google Play 預備中",
    summary:
      "手機直式優先的回合制地城解謎遊戲，純 HTML5 Canvas 零依賴打造，內建 BFS 求解器、關卡產生器與示範重播。",
    highlights: [
      "雙擊 index.html 即可遊玩，零建置、零外部 CDN 依賴",
      "已實作世界 1「史萊姆洞窟」與世界 2「炸藥礦坑」各 10 關",
      "預備封裝上架 Google Play，原始碼維持私有保護",
    ],
    stack: ["HTML5 Canvas", "Vanilla JS", "BFS Solver", "Mobile-First"],
    year: "2026",
  },
  {
    id: "tiny-engine",
    title: "TinyEngine",
    subtitle: "自製 2D 像素遊戲引擎（零依賴）",
    category: "games",
    tier: "flagship",
    visibility: "public",
    status: "Open Source",
    summary:
      "專為 16×16 像素風、單一畫面或小地圖設計的輕量級 2D 引擎：純 HTML5 Canvas + 原生 JS，支援捲動鏡頭、A* 尋路、固定時間步、觸控與存檔排行榜。",
    highlights: [
      "零依賴、零 build，開箱即跑的乾淨模組化架構",
      "支撐桌面勇者、Tiny Arena、Tiny Bomber 等多款衍生遊戲",
      "整合 64×64 角色動作圖管線與戰棋／冒險示範",
    ],
    stack: ["HTML5 Canvas", "Vanilla JS", "A* Pathfinding", "2D Engine"],
    githubUrl: "https://github.com/iiiplay/tiny-engine",
    year: "2026",
  },
  {
    id: "tideline",
    title: "Tideline 潮線",
    subtitle: "AI 執行台與個人時間軸交付系統",
    category: "apps",
    tier: "flagship",
    visibility: "private",
    status: "Self-Hosted Live",
    summary:
      "結合時間軸視角與任務交付的個人執行台系統，提供學生入門版與工作者進階流，並延伸至 Android 打包版本。",
    highlights: [
      "Next.js 15 + React 19 + Prisma + Tailwind CSS 全端架構",
      "包含完整的 E2E 驗收腳本與自用交付 Runtime",
      "同步衍生 Android 封裝版（tideline-android）",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "Tailwind CSS"],
    year: "2026",
  },
  {
    id: "flownote",
    title: "FlowNote",
    subtitle: "個人筆記、任務與工作進程 PWA",
    category: "apps",
    tier: "flagship",
    visibility: "private",
    status: "Vercel Live",
    summary:
      "整合筆記、任務追蹤、專案管理、影片收藏與密碼本的跨裝置工作進程管理工具，手機與電腦皆可流暢使用。",
    highlights: [
      "React + Vite + Tailwind + Firebase/Vercel 雲端部署",
      "支援離線 PWA 體驗與多頁籤資料匯出備份",
      "實際日常生產力主力工具",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
    liveUrl: "https://flownote-pwa.vercel.app",
    year: "2026",
  },
  {
    id: "tianguan",
    title: "天官曆",
    subtitle: "真天文演算離線命理排盤（八字 · 紫微）",
    category: "apps",
    tier: "flagship",
    visibility: "private",
    status: "Vercel Ready",
    summary:
      "以真天文演算為核心的命理排盤網站：涵蓋四柱八字（格局、合沖刑害、調候喜用、大運流年）、真太陽時、紫微斗數十四主星與本命符卡。",
    highlights: [
      "核心排盤引擎可打包為離線單檔運作",
      "Web 版支援會員同步、權益與典藏命書後端",
      "將傳統命理規則工程化為精準可驗證演算法",
    ],
    stack: ["TypeScript", "Next.js / Web", "Astronomy Math", "Offline-First"],
    year: "2026",
  },

  // === Additional Curated Games ===
  {
    id: "desktop-hero",
    title: "桌面勇者 Desktop Hero",
    subtitle: "上班族低干擾掛機陪伴遊戲",
    category: "games",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "基於 TinyEngine 打造的極簡掛機陪伴遊戲。勇者和史萊姆「波波」住在螢幕角落營地裡，自動出門打怪、掉寶、回營。",
    highlights: [
      "專為工作桌面設計的低干擾陪伴體驗",
      "完整開源於 GitHub，展示 TinyEngine 實戰能力",
    ],
    stack: ["TinyEngine", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/iiiplay/desktop-hero",
    year: "2026",
  },
  {
    id: "sanguo-zi-dazhan",
    title: "三國［字］大戰",
    subtitle: "直式手機拼字戰鬥遊戲",
    category: "games",
    tier: "curated",
    visibility: "private",
    status: "Prototype",
    summary:
      "結合文字拼組與三國題材的直式手機戰鬥遊戲，純 HTML5 Canvas 零依賴實作。",
    highlights: [
      "針對手機單手直式操作最佳化",
      "無外部引擎依賴的輕量高效渲染",
    ],
    stack: ["HTML5 Canvas", "JavaScript", "Game Design"],
    year: "2026",
  },
  {
    id: "dianjiang-sanguo",
    title: "點將三國",
    subtitle: "橫式三國卡牌戰棋",
    category: "games",
    tier: "curated",
    visibility: "private",
    status: "Prototype",
    summary:
      "集字點將、四路佈陣與兵種相剋的橫式三國卡牌戰棋遊戲，涵蓋關卡數值模擬、特效與社團試玩版。",
    highlights: [
      "四路格子佈陣與兵種相剋策略深度",
      "純 HTML5 零依賴架構，內建數值模擬測試",
    ],
    stack: ["HTML5 Canvas", "JavaScript", "Strategy", "Tactics"],
    year: "2026",
  },
  {
    id: "little-guardian-mvp",
    title: "小小守護者 MVP",
    subtitle: "自動探索與守護直向小遊戲",
    category: "games",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "自動探索、偶爾守護的手機直向像素小遊戲：玩家負責撿寶充能、打斷敵技、三擊流星與合成武器。",
    highlights: [
      "自動勇者＋手動關鍵介入的混合玩法",
      "純前端零依賴開源專案",
    ],
    stack: ["HTML5 Canvas", "JavaScript", "Pixel Art"],
    githubUrl: "https://github.com/iiiplay/little-guardian-mvp",
    year: "2026",
  },
  {
    id: "tiny-arena",
    title: "Tiny Arena",
    subtitle: "16×16 舉盾競技場原型",
    category: "games",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "8 方向動作戰鬥原型，具備舉盾格擋、整備三選一、場地陷阱與夥伴系統。",
    highlights: ["基於 TinyEngine 開發", "純 Canvas 無依賴開源動作原型"],
    stack: ["TinyEngine", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/iiiplay/tiny-arena",
    year: "2026",
  },
  {
    id: "tiny-bomber",
    title: "Tiny Bomber",
    subtitle: "多螢幕像素炸彈人",
    category: "games",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary: "使用 TinyEngine 製作的經典炸彈人多關卡像素小遊戲。",
    highlights: ["基於 TinyEngine 開發", "開源示範專案"],
    stack: ["TinyEngine", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/iiiplay/tiny-bomber",
    year: "2026",
  },
  {
    id: "tiny-home",
    title: "Tiny Home",
    subtitle: "像素風療癒佈置小品",
    category: "games",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "沒有敵人、沒有數值的療癒空間：空房間、一隻小貓與自由擺設的像素家具。",
    highlights: ["基於 TinyEngine 開發", "主打療癒自由佈置"],
    stack: ["TinyEngine", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/iiiplay/tiny-home",
    year: "2026",
  },
  {
    id: "tiny-keep",
    title: "Tiny Keep",
    subtitle: "12 關像素地牢冒險",
    category: "games",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary: "結合鑰匙、陷阱與 12 層挑戰的像素風地牢小遊戲。",
    highlights: ["基於 TinyEngine 開發", "完整 12 關地牢關卡設計"],
    stack: ["TinyEngine", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/iiiplay/tiny-keep",
    year: "2026",
  },

  // === Curated Web Apps ===
  {
    id: "kotoba-forge",
    title: "Kotoba ことば",
    subtitle: "手機優先的日文冒險日記",
    category: "apps",
    tier: "curated",
    visibility: "public",
    status: "Demo Open Source",
    summary:
      "以日本旅行小島為視覺主題的日文入門學習網站，讓學員從首頁直接開始第一堂課，沿著地圖逐步學習。",
    highlights: [
      "Mobile-first 互動學習體驗與離線 PWA 支援",
      "提供公開 Demo 版本（kotoba-forge-demo）供體驗",
    ],
    stack: ["TypeScript", "Vite", "PWA", "Tailwind CSS"],
    githubUrl: "https://github.com/17app001/kotoba-forge-demo",
    year: "2026",
  },
  {
    id: "twdgo-exchange",
    title: "出國錢包 TripWallet",
    subtitle: "twdgo.tw · 台灣旅遊換匯計算機",
    category: "apps",
    tier: "curated",
    visibility: "private",
    status: "Production Live",
    summary:
      "專為台灣旅客打造的即時換匯計算機，支援台幣對 22 種外幣匯率查詢、歷史走勢圖、旅遊預算與換匯攻略。",
    highlights: [
      "即時匯率換算與歷史趨勢視覺化",
      "針對出國旅遊情境最佳化手機操作",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Finance Data"],
    liveUrl: "https://www.twdgo.tw",
    year: "2026",
  },
  {
    id: "insurance-crm",
    title: "保戶管理 Insurance CRM",
    subtitle: "行動優先本機加密保單管理",
    category: "apps",
    tier: "curated",
    visibility: "private",
    status: "Completed",
    summary:
      "給保險業務員使用的客戶與保單管理工具：追蹤準客戶、續保與繳費到期、生日提醒與聯繫紀錄，資料全存於本機不外傳。",
    highlights: [
      "繁體中文行動優先介面，注重隱私與零伺服器上傳",
      "完整測試覆蓋與發佈流程",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Local-First"],
    year: "2026",
  },
  {
    id: "kuji-lens",
    title: "Kuji Lens 一番賞殘池分析",
    subtitle: "超幾何機率與期望值決策 App",
    category: "apps",
    tier: "curated",
    visibility: "private",
    status: "MVP",
    summary:
      "手機優先的一番賞抽獎輔助 App，計算殘池超幾何機率、期望值、全包成本並支援本機儲存與 JSON 備份。",
    highlights: [
      "將機率統計數學轉化為現場 5 秒決策工具",
      "純本機資料持久化與匯入匯出",
    ],
    stack: ["TypeScript", "Web App", "Probability Math", "Mobile-First"],
    year: "2026",
  },
  {
    id: "movie-hall-finder-v3",
    title: "最佳影廳挑選器 v3",
    subtitle: "MaxScreen Finder · 戲院最大廳檢索",
    category: "apps",
    tier: "curated",
    visibility: "private",
    status: "Completed",
    summary:
      "「每間戲院最大的那一廳，現在在播什麼電影？」——專為 10 秒觀影決策而生的 Mobile-first 影廳時刻篩選器。",
    highlights: [
      "鎖定巨幕／最大影廳排片資訊，省去跨站比對時間",
      "歷經 v1～v3 多次 UI/UX 重構與資料管線自動化",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2026",
  },
  {
    id: "tabi3-webapp",
    title: "旅日 3 句",
    subtitle: "每天 3 句的旅遊日文 PWA",
    category: "apps",
    tier: "curated",
    visibility: "private",
    status: "Vercel Ready",
    summary:
      "手機優先、每天 3 句的輕量旅遊日文學習 Web App，搭配設定驅動課程內容與離線 Service Worker。",
    highlights: ["極簡低負擔的每日三句學習節奏", "支援離線 PWA 快取"],
    stack: ["JavaScript", "PWA", "Service Worker", "CSS"],
    year: "2026",
  },
  {
    id: "teacalc",
    title: "TeaCalc 手搖飲計算機",
    subtitle: "工程師邏輯的咖啡因／熱量數據庫",
    category: "apps",
    tier: "curated",
    visibility: "private",
    status: "Completed",
    summary:
      "用工程師的邏輯喝手搖飲：整理台灣手搖飲品項之咖啡因與熱量數據庫，快速計算每日攝取量。",
    highlights: ["結構化飲品營養數據查詢", "輕量直覺的前端互動介面"],
    stack: ["TypeScript", "Web App", "Data Visualization"],
    year: "2026",
  },

  // === AI & Developer Tools ===
  {
    id: "multi-agent-workboard",
    title: "Multi-Agent Workboard",
    subtitle: "單人多 AI Coding Agent 本機任務看板",
    category: "ai-tools",
    tier: "flagship",
    visibility: "public",
    status: "Open Source",
    summary:
      "同時指揮多個 AI 編碼 Agent（Claude Code、Codex、Gemini CLI）時的本機任務看板：零依賴、單一 Node 進程、任務即 Markdown 檔。",
    highlights: [
      "將「誰在做什麼、用了多少、要交代誰做什麼」集中於單一介面",
      "純淨零依賴架構，任務狀態直接落盤為可讀 Markdown",
    ],
    stack: ["Node.js", "Vanilla JS", "Markdown", "Multi-Agent"],
    githubUrl: "https://github.com/17app001/multi-agent-workboard",
    year: "2026",
  },
  {
    id: "speech-to-speech",
    title: "Speech-to-Speech 本地語音 Agent",
    subtitle: "開源模型即時語音對話管線",
    category: "ai-tools",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "基於開源語音辨識、LLM 與語音合成模型建置的本地端即時語音對話 Agent 系統。",
    highlights: [
      "支援模組化 STT → LLM → TTS 語音串流管線",
      "可完全於本地端硬體運行，保障資料隱私",
    ],
    stack: ["Python", "Local LLM", "Voice AI", "Open Source"],
    githubUrl: "https://github.com/17app001/speech-to-speech",
    year: "2026",
  },

  // === Teaching & Data Ecosystem ===
  {
    id: "jerrydev",
    title: "Jerry 老師程式教學資源站",
    subtitle: "Python / C# / Web 課程教材與下載中心",
    category: "teaching",
    tier: "flagship",
    visibility: "private",
    status: "Production Live",
    summary:
      "集中管理 Python 基礎、資料分析、網頁爬蟲、C# 與 Web 開發課程教材、練習題與範例下載包，讓學員課後有系統複習。",
    highlights: [
      "Next.js 全端架構，支援自動化五方教材同步發布流水線",
      "收錄 40 章以上系統化程式課程簡報與實戰範例",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Automation"],
    year: "2026",
  },
  {
    id: "python-job-dashboard",
    title: "Python 工程師市場分析儀表板",
    subtitle: "104 人力銀行 1,600+ 職缺數據分析",
    category: "teaching",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "基於 104 人力銀行超過 1,600 筆真實職缺資料，分析台灣 Python 工程師技能需求、薪資分佈與產業趨勢的互動儀表板。",
    highlights: [
      "真實爬蟲資料清洗、統計分析與視覺化呈現",
      "作為課堂資料分析與爬蟲綜合實戰標竿",
    ],
    stack: ["Python", "Pandas", "Data Visualization", "Web Scraping"],
    githubUrl: "https://github.com/17app001/python-job-dashboard",
    year: "2026",
  },
  {
    id: "python-class-repos",
    title: "Python 教學開源範例集",
    subtitle: "python_class & UBike OpenData 實戰",
    category: "teaching",
    tier: "curated",
    visibility: "public",
    status: "Open Source",
    summary:
      "公開給課堂學員同步練習的 Python 基礎、資料抓取與開放資料（UBike即時資訊）範例倉庫。",
    highlights: [
      "配合實體與線上課程進度持續更新",
      "包含 API 串接與資料處理入門實作",
    ],
    stack: ["Python", "Requests", "OpenData", "Teaching"],
    githubUrl: "https://github.com/iiiplay/python_class",
    year: "2026",
  },
];
