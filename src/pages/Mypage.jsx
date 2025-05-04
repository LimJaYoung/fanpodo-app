import React from 'react';
import { Link , Outlet} from 'react-router-dom';
import './Mypage.css'

const Mypage = () => {
  return (
    <div className="container">
        <div className="mypage-container">
           <h1 className="mypage-title">👤 마이페이지</h1>
           <div className="mypage-card">
             <p><strong>닉네임 :</strong> 팬포도 사랑해</p>
             <p><strong>이메일 :</strong> fan@podo.com</p>
             <p><strong>가입일 :</strong> 2025-05-30</p>
           </div>
           </div>
        <div className="mypage-detail">
            <div className="mypage-actions">
              <Link to="/mypage/posts">내가 쓴 글</Link>
              <Link to="/mypage/scraps">스크랩한 글</Link>
              <Link to="/mypage/settings">회원 정보 수정</Link>
            </div>
                {/* ✅ 여기서 자식 컴포넌트(post/scraps/settings)가 렌더링됨 */}
          <Outlet />
       </div>
          
        
    </div>
  )
}

export default Mypage