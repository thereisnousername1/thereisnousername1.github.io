import { Link } from 'react-router-dom'

// 用 <Link to="/#games"> 而唔係 <a href="#/#games">：
// HashRouter本身已經用咗 # 嚟做routing，所以錨點連結要交返俾react-router處理，
// 先可以由detail頁(例如 /games/xxx)一撳就返到主頁再跳去對應section。
// 實際「跳落嗰個section」嘅動作由 Home.jsx 嗰個useEffect負責（睇返嗰個檔案）。
export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="nav-mark" to="/">
          Andy's secret kingdom
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/#games">Games</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
