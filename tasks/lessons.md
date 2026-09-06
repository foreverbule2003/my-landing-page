# 📝 教訓紀錄 (Lessons Learned)

> 每次使用者修正或發現錯誤後，記錄模式與防範規則。
> 定期回顧以降低重複錯誤率。

---

## 使用方式

1. **觸發時機**：當使用者修正了 AI 的分析、建議或執行方式時
2. **記錄格式**：按日期記錄「錯誤模式 → 修正規則 → 後續追蹤」
3. **回顧時機**：`/commit` 收尾步驟會提醒寫入；`/journal` 日報時回顧

---

## 紀錄模板

<!--
## YYYY-MM-DD

### 錯誤模式
- (描述發生了什麼)

### 修正規則
- (寫出防止相同錯誤的具體規則)

### 後續追蹤
- [ ] (驗證規則是否有效)
-->

---

## 2026-07-06

### 錯誤模式

- AI 準備「裸 commit」（只提交程式碼，未跑驗證、未同步 CHANGELOG 等文件），被使用者攔下。專案其實有設計好的 commit workflow（`.agent/workflows/commit.md`），但因工具世代交替（Antigravity → Claude Code）成為孤兒，AI 不知道它存在。
- 更深層的問題：`npm test` 與 `npm run guard` 長期紅燈（vitest 誤掃 Playwright、guard 規則過時），導致「紅燈=正常」的習慣，防線名存實亡。

### 修正規則

- **工具遷移時，workflow 資產要一起遷移**：指令、檢查清單、排程設定散落在舊工具目錄時，新工具讀不到=不存在。
- **紅燈零容忍**：測試或 guard 一旦紅燈常態化，防線就等於拆除。紅燈要嘛立即修、要嘛修規則，不可「習慣它」。
- **提交一律走 `/commit`**：清理 → guard/test 綠燈 → 文件同步 → 確認 → 分主題提交。

### 後續追蹤

- [x] vitest/guard 已修復回綠燈基準（2026-07-06）
- [x] 六個高價值指令已遷移至 `.claude/commands/`（2026-07-06）
- [ ] 觀察後續 commit 是否維持綠燈與文件同步紀律

---

## 2026-08-29

### 錯誤模式

- 產架構圖時「先把節點擺好看，再交給驗證器」，結果連續四輪 fail。archify 的 showcase profile 有兩條互相拉扯的硬約束，事前沒算就一定撞牆：
  1. **可讀性**：節點小字（9px）在 1440px 桌面投影後不得低於 6px，反推 viewBox 寬度上限約 1394。
  2. **containment**：整頁在 1440×900 不得垂直溢出。頁面非圖的部分（標題列 + 卡片）約占 300px，所以圖本身高度上限約 600px，反推 viewBox 高寬比必須壓到 0.43 以下。
- 另一組反覆踩的坑：關聯標籤預設落在線段中點，兩個節點間距若小於標籤寬度，必定壓到節點上。中文標籤特別寬（「push main 觸發 deploy.yml」約 130px），欄距開 70px 時每一條都紅。

### 修正規則

- **先算畫布，再擺節點**：目標是扁平寬版（本案定案 1340×570，4 欄 × 4 列）。先定 viewBox，再讓節點去適應，不要反過來。
- **欄距要大於最長標籤寬度**：中文標籤抓每字約 9px 估寬，欄距至少留 150px；不夠時優先縮短標籤用詞（語意保留），而不是刪標籤。
- **垂直方向的標籤一律預期要 `labelDy`**：上下相鄰節點的連線標籤預設會壓到上方節點，直接給偏移量比等驗證器報錯快。
- **善用驗證器的 `Suggested fix`**：archify 會直接給出 `labelAt` 座標或 `labelDy` 數值，照著填即可，不要自己重算。
- **文件裡寫的指令要實跑過再寫進 README**：本次 README 的重生指令是實測 exit 0 後才落筆。

### 後續追蹤

- [ ] 下次改架構時，驗證 `sources` 參照是否隨程式碼漂移（規格檔釘在 commit `5c871f6`，檔案搬家會讓 evidence 驗證失敗）

---

## 2026-09-06

### 錯誤模式

- 新增 2024-kyoto 旅程時，`spec.md` 的交通章節印出 `(undefined ➔ undefined)`。查下去發現不是新旅程填錯，而是 **模板欄位與消費端腳本的契約沒對齊**：
  - `scripts/sync-travel-spec.mjs` 讀 `route.origin` / `route.destination`，但 `src/pages/trips/template/data.template.js` 的 `recommendedRoutes` 範例根本沒列這兩欄。照模板填，必壞。
  - 更隱蔽的是多方案路線：腳本對 `steps` 有 `route.steps || route.options[0].steps` 的 fallback，卻獨漏 origin/destination，所以 options 架構的路線就算填了也讀不到。
  - 同一支腳本還有第二處：`act.transport.station` 缺值時直接內插，產出 `🚕 機場接送(undefined)`。
- 2026-tokyo 的 spec.md 帶著這三個 `undefined` 存活了好幾個月沒被發現——**因為壞掉的方式是「產生出看起來正常的檔案」，不是拋錯**。

### 修正規則

- **模板即契約**：`data.template.js` 是消費端腳本的介面文件。腳本新讀一個欄位，模板就要同步列出並標 ★，否則照模板填的人一定漏。
- **樣板化的資料結構要成組 fallback**：既然 `options` 是 `steps` 的替代來源，那 origin/destination/duration 等同層欄位就要一起做 fallback，不能只補一個。
- **字串內插一律防 undefined**：產生文件的腳本，任何 `${obj.maybeMissing}` 都要嘛給預設值、要嘛整段省略。寧可少一行，不要印 `undefined`。
- **改完腳本要回頭重生所有既有產物**：本次修完 sync 腳本後重跑 2026-tokyo 與 2024-kyoto，才把陳年的 undefined 清掉。只修腳本不重生，等於沒修。
- **驗收用 grep 而非肉眼**：`grep -c "undefined" trips/*/spec.md` 是這類問題最省力的回歸測試。

### 後續追蹤

- [x] `sync-travel-spec.mjs` 補 options fallback 與 undefined 防護（2026-09-06）
- [x] `data.template.js` 補上 origin/destination/type 欄位說明（2026-09-06）
- [x] 2026-tokyo Day 5 三個方案補齊起訖點，兩份 spec.md 重生後 undefined 歸零（2026-09-06）
- [x] 2026-okinawa 也踩到同一個坑（Day 2 路線缺起訖點），補齊後重生，三份 spec 全數歸零（2026-09-06）
- [ ] `src/pages/trips/ise-shima/data.js` 缺 `flightData`/`accommodationData` 等匯出，`sync-travel-spec.mjs` 對它跑不起來；其 spec.md 目前是手工維護，待評估是否納入自動同步

---

## 2026-09-06 (2)

### 錯誤模式

- 開工前沒 `git fetch`，直接跑 `npm run new-trip` 建立 2024-kyoto，事後 push 才發現本地與遠端分歧（`ahead 5, behind 1`），rebase 在 `docs/SITEMAP.md`、`src/views/TripsView.jsx`、`vite.config.js` 三處衝突。
- 落後不是今天才發生的：遠端的 `515f3d3`（2026-okinawa）是 **07/07** 推上去的，本地 08/29 那批 archify commit 就已經在分歧狀態下堆疊，今天只是把 ahead 從 3 推到 5。
- 三個衝突點全部是 `tools/new-trip.js` 自動註冊的位置（`menuItems`、`rollupOptions.input`、SITEMAP 樹狀）。也就是說：**衝突不是內容分歧，而是「兩邊各自往同一個錨點插了一行」**。先 pull 的話，new-trip 會直接把京都插進已含沖繩的清單，一次衝突都不會有。

### 修正規則

- **會動到全域註冊點的操作，開工前先 `git fetch` 確認 `behind` 為 0**：scaffold（`npm run new-trip`）、新增路由 / Vite 入口 / 首頁選單 / SITEMAP 條目都算。這類操作的衝突是「插入位置衝突」，先同步就能完全避免，事後再解等於白做工。
- **不要只信 session 起始的 git status**：那是本地快照，`clean` 只代表工作區乾淨，不代表與遠端同步。`git status -sb` 才會顯示 ahead/behind，且需要先 fetch 才準。
- **多裝置專案把 fetch 當成開工儀式**：本 repo 有兩個作者身分（`tim` / `TimZ`）在推，分歧是常態而非意外。
- **解「各加各的」型衝突時，順手對齊既有排序慣例**：本次 `menuItems` 依「年份新→舊」把 2024 京都移到清單最後，而不是留在 new-trip 預設插入的最前面。

### 後續追蹤

- [x] rebase 完成，三處衝突兩邊內容全保留，guard/test/build 綠燈（2026-09-06）
- [ ] `input.txt`（new-trip 的互動輸入）與根目錄 `wrapper.js`（stub readline 的非互動執行器）在 `515f3d3` 隨旅程一起進了版控，應評估加入 `.gitignore` 或移入 `tools/`
- [ ] 考慮讓 `npm run new-trip` 在執行前自動跑一次 `git fetch` 並在 `behind > 0` 時警告
