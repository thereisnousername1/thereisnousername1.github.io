import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import GameDetail from './pages/GameDetail.jsx'

// 用HashRouter係因為部署去GitHub Pages唔使額外server設定就得——
// 網址會變成 thereisnousername1.github.io/#/games/game-title-one
// 如果想要冇 # 嘅乾淨網址，見底下README嘅備註（要加404.html trick）。
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:slug" element={<GameDetail />} />
      </Routes>
    </HashRouter>
  )
}
