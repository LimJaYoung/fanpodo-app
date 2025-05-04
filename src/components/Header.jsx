import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <div className="header-top">
        <h1 className='logo'>
          <Link to='/' >
           🍇 팬포도
          </Link>
        </h1>
         <ul className="icon-list">
              <li><a href="#">🎁</a></li>
              <li><Link to="/school">💎</Link></li>
              <li><a href="#">🏡</a></li>
              <li><a href="#">🔔</a></li>
          </ul>
      </div>
        <nav>
            <Link to="/">홈</Link>
            <Link to="/fandoms">팬클럽</Link>
            <Link to="/board">게시판</Link>
            <Link to="/mypage">마이페이지</Link>
        </nav>
    </header>
  )
}



export default Header
