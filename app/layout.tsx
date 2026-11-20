import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: "variable",
  preload: false,
});

export const metadata: Metadata = {
  title: "Jerry 作品集與數位產品索引｜Jerry Studio",
  description:
    "工控系統架構 × AI 實戰 × 程式教學。彙整網頁遊戲、自研引擎、實用 Web App、AI 開發工具與程式教學資源。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0F172A] selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
