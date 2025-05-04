import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FandomList from './pages/FandomList';
import Board from './pages/Board';
import PostDetail from './pages/PostDetail';
import MyPage from './pages/Mypage';
import MyPosts from './pages/mypage/MyPosts';
import Settings from './pages/mypage/Settings';
import Scraps from './pages/mypage/Scraps';
import FanpodoSchool from './pages/FanpodoSchool';
import PlainLayout from './components/PlainLayout';


const App = () => {
  return (
    <Routes>
      {/* 일반 레이아웃 사용 */}
      <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="fandoms" element={<FandomList/>}/>
         <Route path="board" element={<Board/>}/>
         <Route path="post/:id" element={<PostDetail/>}/>

         {/* 마이페이지 안에 중첩된 경로 */}
         <Route path="mypage" element={<MyPage/>} >
            <Route index element={<MyPosts/>}/>
            <Route path="posts" element={<MyPosts/>}/>
            <Route path="scraps" element={<Scraps/>}/>
            <Route path="settings" element={<Settings/>}/>
          </Route>
        </Route>

         {/* 포토스쿨 전용 레이아웃*/}
         <Route path="/school" element={< PlainLayout />}>
           <Route index element={<FanpodoSchool/>}/>
         </Route>
    </Routes>
  );  
}

export default App



 