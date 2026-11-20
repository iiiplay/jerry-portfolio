"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Search,
  ExternalLink,
  Lock,
  Globe,
  Gamepad2,
  Wrench,
  Bot,
  BookOpen,
  X,
  ArrowUpRight,
  Layers,
  Code2,
} from "lucide-react";
import {
  PROJECTS,
  CATEGORY_META,
  type ProjectCategory,
  type ProjectItem,
} from "@/data/projects";

type FilterTab = "all" | ProjectCategory;

const FILTER_TABS: { id: FilterTab; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "全部作品", icon: <Layers className="w-4 h-4" /> },
  {
    id: "games",
    label: "網頁遊戲 & 引擎",
    icon: <Gamepad2 className="w-4 h-4" />,
  },
  { id: "apps", label: "實用 Web App", icon: <Wrench className="w-4 h-4" /> },
  { id: "ai-tools", label: "AI 與開發工具", icon: <Bot className="w-4 h-4" /> },
  {
    id: "teaching",
    label: "教學與資料分析",
    icon: <BookOpen className="w-4 h-4" />,
  },
];

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [query, setQuery] = useState("");
  const [onlyPublic, setOnlyPublic] = useState(false);
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const flagships = useMemo(
    () => PROJECTS.filter((p) => p.tier === "flagship"),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (activeTab !== "all" && p.category !== activeTab) return false;
      if (onlyPublic && p.visibility !== "public") return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [activeTab, query, onlyPublic]);

  const publicCount = useMemo(
    () => PROJECTS.filter((p) => p.visibility === "public").length,
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      {/* Sticky Top Navbar (Ink & Indigo style matching jerrydev.tw) */}
      <header className="sticky top-0 z-30 border-b border-[#DFE3ED] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F46E5] text-white font-mono text-sm font-bold">
              J
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#0F172A]">
              Jerry 作品索引
            </span>
          </div>

          <nav className="flex items-center gap-5 text-sm text-[#334155]">
            <a
              href="#pillars"
              className="hidden sm:inline-block hover:text-[#4F46E5] transition-colors"
            >
              核心專業
            </a>
            <a
              href="#flagships"
              className="hidden sm:inline-block hover:text-[#4F46E5] transition-colors"
            >
              精選代表作
            </a>
            <a
              href="#index"
              className="hidden sm:inline-block hover:text-[#4F46E5] transition-colors"
            >
              完整索引
            </a>
            <a
              href="https://jerrydev.tw"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-block hover:text-[#4F46E5] transition-colors"
            >
              jerrydev.tw
            </a>
            <a
              href="https://github.com/iiiplay"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFE3ED] bg-[#F6F7FB] px-3.5 py-1.5 text-xs font-semibold text-[#0F172A] hover:border-[#4F46E5]/40 hover:bg-[#EEF2FF] hover:text-[#3730A3] transition-all"
            >
              <Code2 className="w-3.5 h-3.5 text-[#4F46E5]" />
              GitHub · iiiplay
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-[#DFE3ED] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-semibold text-[#4F46E5]">
                Hi，我是 Jerry · 系統架構師 &amp; 技術講師
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                AI 系統工程 × 技術教學 ×{" "}
                <span className="text-[#4F46E5]">
                  系統分析與 PLC 工控軟體開發
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#334155] leading-relaxed">
                累積 20 年工控與系統分析實戰底蘊（C# / .NET、PLC 設備通訊與高可靠度控制軟體），結合現代 AI 多 Agent 工程落地與系統化程式教學（jerrydev.tw），專注把複雜技術轉化為可穩定運轉、可交付的真實產品。
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#pillars"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4338CA] transition-colors"
                >
                  認識三大核心專業
                </a>
                <a
                  href="#flagships"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#DFE3ED] bg-[#F6F7FB] px-5 py-2.5 text-sm font-semibold text-[#0F172A] hover:border-[#4F46E5]/40 hover:bg-[#EEF2FF] transition-colors"
                >
                  瀏覽精選代表作
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Expertise Pillars */}
        <section id="pillars" className="border-b border-[#DFE3ED] bg-[#F6F7FB] py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                三大核心專業支柱
              </h2>
              <p className="text-sm text-[#5B6478] mt-1">
                從底層設備控制、系統分析到 AI 應用與技術傳承的完整工程能力
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-[#DFE3ED] bg-white p-6">
                <div className="inline-flex items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#1E40AF] mb-4">
                  01 · System Analysis &amp; PLC Software
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  系統分析與 PLC 工控軟體開發
                </h3>
                <p className="mt-2.5 text-sm text-[#334155] leading-relaxed">
                  20 年設備自動化與工業控制軟體架構經驗，涵蓋 C# / .NET、PLC 通訊協議整合、機台狀態機設計、例外安全防線與產線實機交付。
                </p>
              </div>

              <div className="rounded-2xl border border-[#DFE3ED] bg-white p-6">
                <div className="inline-flex items-center rounded-full border border-[#DDD6FE] bg-[#F5F3FF] px-3 py-1 text-xs font-semibold text-[#5B21B6] mb-4">
                  02 · AI Engineering &amp; Multi-Agent
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  AI 系統工程與多 Agent 協作
                </h3>
                <p className="mt-2.5 text-sm text-[#334155] leading-relaxed">
                  建置多 Agent 開發看板、本地端 STT/LLM/TTS 語音系統與 AI 顧問後端，並以一人公司模式完成多個從 0 到 1 的產品上線。
                </p>
              </div>

              <div className="rounded-2xl border border-[#DFE3ED] bg-white p-6">
                <div className="inline-flex items-center rounded-full border border-[#FDE68A] bg-[#FFFBEB] px-3 py-1 text-xs font-semibold text-[#92400E] mb-4">
                  03 · Technical Education &amp; Web
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  技術教學與全棧產品實踐
                </h3>
                <p className="mt-2.5 text-sm text-[#334155] leading-relaxed">
                  長期於聯成電腦教授 Python、C# 與 Web 開發，打造 jerrydev.tw 教學資源站與 40+ 章實戰教材，並開發多款跨平台 Web App 與遊戲。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="border-b border-[#DFE3ED] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "20+ 年", label: "系統分析與工控底蘊" },
                { value: `${PROJECTS.length}`, label: "精選收錄作品" },
                { value: `${publicCount}`, label: "開源 Public Repo" },
                { value: "40+ 章", label: "系統化程式教材" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#DFE3ED] bg-[#F6F7FB] px-5 py-4"
                >
                  <dt className="text-xs font-medium text-[#5B6478]">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-mono text-2xl font-bold text-[#0F172A]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Flagship Section */}
        <section id="flagships" className="bg-white py-14 sm:py-16 border-b border-[#DFE3ED]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                旗艦代表作
              </h2>
              <p className="text-sm text-[#5B6478] mt-1">
                點擊任一卡片可檢視核心亮點與技術棧
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {flagships.map((item) => (
                <ProjectCard
                  key={item.id}
                  project={item}
                  onSelect={() => setSelected(item)}
                  featured
                />
              ))}
            </div>
          </div>
        </section>

        {/* Full Interactive Index */}
        <section id="index" className="bg-[#F6F7FB] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                  完整作品索引
                </h2>
                <p className="text-sm text-[#5B6478] mt-1">
                  依領域篩選或搜尋技術關鍵字（共 {filtered.length} 項符合）
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6478]" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="搜尋作品或技術棧..."
                    className="w-56 sm:w-64 rounded-xl border border-[#DFE3ED] bg-white pl-9 pr-3 py-2 text-sm text-[#0F172A] placeholder:text-[#5B6478] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 transition-all"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setOnlyPublic((v) => !v)}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    onlyPublic
                      ? "border-[#4F46E5] bg-[#EEF2FF] text-[#3730A3]"
                      : "border-[#DFE3ED] bg-white text-[#334155] hover:bg-slate-50"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  僅看開源 Public
                </button>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-7">
              {FILTER_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? "border-[#4F46E5] bg-[#4F46E5] text-white shadow-sm"
                        : "border-[#DFE3ED] bg-white text-[#334155] hover:border-[#4F46E5]/40 hover:text-[#0F172A]"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Cards Grid */}
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-[#DFE3ED] bg-white p-12 text-center text-[#5B6478] text-sm">
                找不到符合條件的作品，試試清除關鍵字或切換分類。
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((item) => (
                  <ProjectCard
                    key={item.id}
                    project={item}
                    onSelect={() => setSelected(item)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DFE3ED] bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 text-xs text-[#5B6478]">
          <div>© 2026 Jerry Studio · Ink &amp; Indigo Edition</div>
          <div className="flex items-center gap-5">
            <a
              href="https://jerrydev.tw"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4F46E5] transition-colors"
            >
              jerrydev.tw
            </a>
            <a
              href="https://github.com/iiiplay"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4F46E5] transition-colors"
            >
              github.com/iiiplay
            </a>
            <a
              href="https://github.com/17app001"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4F46E5] transition-colors"
            >
              github.com/17app001
            </a>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl border border-[#DFE3ED] bg-white p-6 sm:p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="關閉視窗"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-[#5B6478] hover:bg-[#F6F7FB] hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                  CATEGORY_META[selected.category].badgeClass
                }`}
              >
                {CATEGORY_META[selected.category].label}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#DFE3ED] bg-[#F6F7FB] px-2.5 py-0.5 text-[11px] font-medium text-[#334155]">
                {selected.visibility === "public" ? (
                  <>
                    <Globe className="w-3 h-3 text-[#4F46E5]" />
                    Public Open Source
                  </>
                ) : (
                  <>
                    <Lock className="w-3 h-3 text-amber-600" />
                    Private Showcase
                  </>
                )}
              </span>
              <span className="font-mono text-[11px] text-[#5B6478]">
                {selected.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A]">
              {selected.title}
            </h3>
            <p className="text-sm font-medium text-[#4F46E5] mt-0.5">
              {selected.subtitle}
            </p>

            <p className="mt-4 text-sm text-[#334155] leading-relaxed">
              {selected.summary}
            </p>

            <div className="mt-5">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5B6478] mb-2">
                核心亮點
              </div>
              <ul className="space-y-1.5 text-sm text-[#334155]">
                {selected.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F46E5]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {selected.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#DFE3ED] bg-[#F6F7FB] px-2.5 py-1 font-mono text-xs text-[#334155]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 pt-4 border-t border-[#DFE3ED]">
              {selected.githubUrl && (
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#4F46E5] text-white px-4 py-2 text-xs font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  查看 GitHub
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFE3ED] bg-[#F6F7FB] text-[#0F172A] px-4 py-2 text-xs font-semibold hover:border-[#4F46E5]/40 hover:bg-[#EEF2FF] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#4F46E5]" />
                  開啟線上版
                </a>
              )}
              {!selected.githubUrl && !selected.liveUrl && (
                <span className="text-xs text-[#5B6478]">
                  此專案原始碼目前為 Private 保護狀態（僅供作品集展示）。
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  onSelect,
  featured = false,
}: {
  project: ProjectItem;
  onSelect: () => void;
  featured?: boolean;
}) {
  const meta = CATEGORY_META[project.category];
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group text-left rounded-2xl border border-[#DFE3ED] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4F46E5]/50 hover:shadow-md flex flex-col justify-between cursor-pointer ${
        featured ? "min-h-[210px]" : "min-h-[195px]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${meta.badgeClass}`}
          >
            {meta.shortLabel}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5B6478]">
            {project.visibility === "public" ? (
              <Globe className="w-3 h-3 text-[#4F46E5]" />
            ) : (
              <Lock className="w-3 h-3 text-slate-400" />
            )}
            {project.status}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-[#5B6478] mt-0.5 line-clamp-1">
          {project.subtitle}
        </p>
        <p className="mt-2.5 text-xs text-[#334155] leading-relaxed line-clamp-2">
          {project.summary}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#DFE3ED]/70 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[#F6F7FB] border border-[#DFE3ED]/80 px-1.5 py-0.5 font-mono text-[10px] text-[#334155]"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono text-[10px] text-[#5B6478]">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
        <ArrowUpRight className="w-4 h-4 shrink-0 text-[#5B6478] group-hover:text-[#4F46E5] transition-colors" />
      </div>
    </button>
  );
}
