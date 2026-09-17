import { useState } from 'react'
import { Link } from 'react-router-dom'

// 用 <Link to="/#games"> 而唔係 <a href="#/#games">：
// HashRouter本身已經用咗 # 嚟做routing，所以錨點連結要交返俾react-router處理，
// 先可以由detail頁(例如 /games/xxx)一撳就返到主頁再跳去對應section。
// 實際「跳落嗰個section」嘅動作由 Home.jsx 嗰個useEffect負責（睇返嗰個檔案）。
export default function Nav() {
  // 淨係手機闊度先會用到，寬畫面嗰邊維持原本一路顯示晒嘅nav-links，唔受呢個state影響
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="nav-mark" to="/" onClick={() => setOpen(false)}>
          Andy's secret kingdom
        </Link>

        {/* 呢個掣淨係喺CSS嘅mobile media query先會display:block顯示出嚟 */}
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={open ? 'nav-links open' : 'nav-links'}>
          <li>
            <Link to="/#games" onClick={() => setOpen(false)}>
              Games
            </Link>
          </li>
          <li>
            <Link to="/#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
