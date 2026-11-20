# Jerry Studio — 個人作品集與數位產品索引

> **技術棧**：Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Lucide Icons  
> **視覺風格**：科技深色系、極簡高質感（Dark-Tech High-Craft）

---

## 本機啟動與建置

```bash
npm install
npm run dev
```

開啟瀏覽器前往 `http://localhost:3000`。

正式環境編譯檢查：

```bash
npm run build
```

---

## 資料維護

所有作品卡片資料集中於 `data/projects.ts`（`PROJECTS` 陣列）：
- `visibility: "public"` 的專案才顯示外部 GitHub 連結；`private` 專案（如 `dungeon-100`、`realistic-aquarium`、`tideline`）僅做作品集展示，不公開原始碼路徑。
- 分類支援：`games`（網頁遊戲 & 引擎）、`apps`（實用 Web App）、`ai-tools`（AI 與開發工具）、`teaching`（教學與資料分析）。
