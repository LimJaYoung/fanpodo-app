import React, {useState, useEffect} from 'react';
import './Board.css'
import {Link} from 'react-router-dom';


const Board = () => {
    const [showForm, setShowForm] = useState(false);
    const [posts, setPosts] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent]= useState('');

    //1.컴포넌트가 처음 마운트될 때 localStorage에서 글 목록 불러오기
    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        if(savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, []);

    //2.글 등록
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id:Date.now(), //고유한 id
            title:newTitle,
            content:newContent
        };
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setNewTitle('');
        setNewContent('');
        setShowForm(false);
    };

//   //✅ 삭제버튼 기능
//   const handleDelete = (id) => {
//     const confirmed = window.confirm('정말 삭제하시겠습니까?');
//     if(confirmed) {
//         setPosts(posts.filter((post) => post.id !== id));
//     }
// };


//✅글삭제 
const handleDelete = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
    localStorage.setItem('posts', JSON.stringify(filteredPosts));
}


  return (
   <div className="container">
    <div className="board-container">
        <h1 className="board-title">📢 팬 게시판</h1>

        <div className="board-list">
            {posts.map((post) => (
            <div key={post.id} className='board-post'>
             <Link to={`/post/${post.id}`} className='post-link' >
               <h3 className="post-title">{post.title}</h3>
               <p className="post-preview">{post.content}</p>      
            </Link>
            {/* ✅ 삭제 버튼 추가 */}
            <button className="delete-button" 
            onClick={() => handleDelete(post.id)}>X</button>
        </div>
        ))}
        </div>

        <button className="write-button" onClick={()=> setShowForm(!showForm)}>
            {showForm ? '취소하기' : '✍️ 글쓰기'}
         </button>
        {showForm && (
            <form onSubmit={handleSubmit}  className='write-form'>
                <input 
                type="text" 
                placeholder='제목을 입력하세요'
                value= {newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                />
                <textarea
                placeholder='내용을 입력하세요'
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={5}
                required
                ></textarea>
                <button type="submit" className='submit-button'>등록하기</button>
            </form>
        )}
        
    </div>
   </div>
  );
}

export default Board