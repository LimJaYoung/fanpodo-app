import './MyPosts.css';

const MyPosts = () => {
  return (
    <div className="myposts-container">
      <h1 className="myposts-title">📝 내가 쓴 글</h1>

      <div className="myposts-list">
        <div className="mypost-card">
          <h3 className="post-title">팬포도 정식 오픈 후기</h3>
          <p className="post-preview">정말 유용한 앱이에요! 앞으로도 자주 사용할게요 💜</p>
        </div>
        <div className="mypost-card">
          <h3 className="post-title">NewJeans 응원 이벤트 후기</h3>
          <p className="post-preview">모두 함께 즐겁게 참여했어요 ✨</p>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;