
import './Home.css';
import ImageSlider from '../components/ImageSlider';
import ChargeBox from '../components/ChargeBox';
import FandomAccordion from '../components/FandomAccordion'


const Home = () => {
 
  return (
    <div className="container">
         <div className="home-container">
        <FandomAccordion/>
      </div>
        
        <div className="home-container">
          <div className="home-banner">
            <p className="home-banner-text">
              <span>NEWS</span>동방신기, 도쿄 동서 일본 투어 마무리...총 35만..</p>
          </div>
        </div>
        <div className="home-container">
          <h2 className="home-title">나의 아티스트</h2>
          <p className="home-text">최애 아티스트입니다.</p>
          <ul className="home-artist">
            <li>
              <a href="#">
               <p className="img"><img src="/img/a.png" alt="" /></p>
               <p className="home-artist-name">안재욱</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-border">
                  <p className="img"><img src="/img/c.png" alt="" /></p>
                  <p className="heart">💜</p>
                </div>
                <p className="home-artist-name">BTS</p>
              </a>
            </li>
            <li>
              <a href="#">
               <p className="img"><img src="/img/b.png" alt="" /></p>
               <p className="home-artist-name">김선호</p>
              </a>
            </li>   
          </ul>
        </div>
        <div className="home-container">
          <ImageSlider />
        </div>   
        <div className="home-container">
          <ChargeBox />
        </div> 
    </div>
  )
}

export default Home