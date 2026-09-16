# thereisnousername1 — Game Dev Portfolio

用 React (Vite) 整嘅個人遊戲開發作品集，部署喺 `thereisnousername1.github.io`。

## 1. 本地開發

需要先裝 [Node.js](https://nodejs.org)（建議 v20+）。

```bash
npm install
npm run dev
```

開瀏覽器去 `http://localhost:5173` 就睇到個網站。改完 `src/` 入面嘅檔案會即時reload。

## 2. 想改咩

- `src/components/Games.jsx` — 6隻遊戲嘅資料（標題、簡介、tag、連結），搵 `edit-me` 嘅位換成你真實嘅遊戲。
- `src/components/Hero.jsx` — 個panel入面嘅 Engine / Based in 兩行係 `edit-me`，填返你用開嘅引擎（Unity/Godot/自製engine等）同所在地。
- `src/components/About.jsx` — 換成你自己嘅背景故仔。
- `src/components/Contact.jsx` — 換返你真實嘅 email / GitHub / itch.io 連結。

## 3. 每隻game嘅詳情頁

用咗 `react-router-dom` 做routing:

- 所有game資料集中喺 `src/data/games.js`（唔使開多個file，加/改game都係喺呢個array入面做）
- `src/pages/GameDetail.jsx` 係共用嘅detail頁，靠網址入面嘅slug（例如 `/games/game-title-one`）自動揾返對應資料嚟render
- `src/components/Games.jsx` 個「查看詳情」掣用 `<Link to={...}>` 跳去detail頁 —— 呢個係關鍵：純HTML嘅 `<a href="../xxx.jsx">` 唔work，因為`.jsx`係source file唔係網址，一定要透過router library先可以「跳轉」
- 用嘅係 `HashRouter`（網址會有個 `#`，例如 `.../#/games/game-title-one`），呢個部署去GitHub Pages唔使加額外設定就得。如果將來想要冇`#`嘅乾淨網址，要改用 `BrowserRouter`，並喺repo加一個 `404.html`（內容同`index.html`一樣）做fallback，唔然一整頁refresh會變404。

**寫detail內容嘅建議格式**（`src/data/games.js` 入面每個game object都已經留咗對應欄位）:

1. **Overview** —— 兩三句：呢隻game係咩、核心玩法
2. **My role** —— 你實際做咗啲乜（唔好淨係寫「參與開發」，寫具體崗位/負責部分）
3. **Technical highlights** —— 揀1-3個你解決過嘅具體技術難題，講你點解決，唔止寫用過咩engine
4. **What I learned** —— 呢個project令你有咩得著，或者返轉頭會點做得唔同

## 4. 部署到 GitHub Pages（`thereisnousername1.github.io`）

因為個repo名要同你個username一樣，先至會自動變成用戶主頁：

1. 喺GitHub開一個新repo，名叫做 **`thereisnousername1.github.io`**（一定要一模一樣，包括大小寫）。
2. 唔好勾"Add a README"，keep個repo空白。
3. 喺本機初始化並推上去：

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/thereisnousername1/thereisnousername1.github.io.git
git push -u origin main
```

4. 去repo嘅 **Settings → Pages**，喺 "Build and deployment" 個 Source 揀 **GitHub Actions**（唔使揀branch，因為個repo已經帶咗 `.github/workflows/deploy.yml`）。
5. Push完之後，去repo嘅 **Actions** tab睇個workflow跑緊。跑完之後，去 `https://thereisnousername1.github.io` 就見到個網站（第一次生效可能要等幾分鐘）。

之後你每次 `git push` 去 `main` branch，個網站都會自動重新build同部署。

## 技術棧

- React 18 + Vite
- 純CSS（`src/index.css`），冇用UI框架
- GitHub Actions 自動部署到 GitHub Pages
