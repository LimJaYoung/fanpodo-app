import {useParams, useNavigate} from 'react-router-dom';
import './PostDetail.css';

const dummyPostDetails = [
    {
        id:'1',
        title:'[공지] 팬포도 앱 정신 오픈!🍇 ',
        content: '드디어 팬포도앱을 오픈하였습니다.\n 자유롭게 활동하시면서 다양한 의견을 제시해 주시고, 행사에 적극적 참여해 주시고 좋아요도 꾸욱 놀러주세요'
    },
    {
        id:'2',
        title:'BTS생일 서포트 같이해요🎉',
        content:'시간, 장소 공유합니다!\n 다들 정시에 만나서 BTS생일 맘껏 축하해 주자구요^^ 💜'
    },
    {
        id:'3',
        title:'NewJeans 팬아트 나눔합니다.✨',
        content : '직접 그린 그림도 좋고, 손글씨도 좋아요!!\n 손수 만든 작품이면 무엇이든 괜찮아요 모두모두 팬아트 나눔에 적극 참여 부탁해요 🖼️'
    }
];

function PostDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const post = dummyPostDetails.find((p) => p.id === id);

    if(!post) {
        return <div className="container">게시글을 찾을 수 없습니다</div>
    }

    return(
        <>
        <div className="post-detail-container">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-content">
                {post.content.split('\n').map((line, index) => (
                    <p key={index}>
                        {index === 0 ? <strong>{line}</strong> : line}
                    </p>
                ))}
            </div>
        </div>
        <div className="post-detail-button">
            <button onClick={() => navigate(-1)}>← Back</button>
        </div>
        </>
        
    )
}

export default PostDetail