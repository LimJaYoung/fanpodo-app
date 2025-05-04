import React, {useState}from 'react';
import './Settings.css';


const Settings = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원정보가 수정되었습니다.');
  }
  return (
    <div className="container">
      <div className="settings-container">
        <h1 className="settings-title">⚙️회원 정보 수정</h1>
        <form  className="settings-form" onSubmit={handleSubmit}>
          <label htmlFor="nickname">닉네임</label>
          <input 
             id="nickname" 
             type="text" 
             placeholder="닉네임을 입력하세요"
             value= {nickname}
             onChange= {(e) => setNickname(e.target.value)}
          />

          <label htmlFor="email">이메일</label>
          <input 
             id="email"
             type="email"
             placeholder="fanpodo@com"
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
            />

            <button type="submit" className='save-button'>저장하기</button>
        </form>
      </div>
    </div>
  )
}
export default Settings