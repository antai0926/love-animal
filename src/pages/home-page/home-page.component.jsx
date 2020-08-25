import React from 'react';
import './home-page.styles.scss';
import NavBar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';

const HomePage = () => {
  const dogImgPaths = [
    require('../../assets/home-page/dog-img1.png'),
    require('../../assets/home-page/dog-img2.png'),
    require('../../assets/home-page/dog-img3.png'),
    require('../../assets/home-page/dog-img4.png'),
    require('../../assets/home-page/dog-img5.png'),
    require('../../assets/home-page/dog-img6.png'),
    require('../../assets/home-page/dog-img7.png'),
    require('../../assets/home-page/dog-img8.png'),
  ];
  const catImgPaths = [
    require('../../assets/home-page/cat-img1.png'),
    require('../../assets/home-page/cat-img2.png'),
    require('../../assets/home-page/cat-img3.png'),
    require('../../assets/home-page/cat-img4.png'),
    require('../../assets/home-page/cat-img5.png'),
    require('../../assets/home-page/cat-img6.png'),
    require('../../assets/home-page/cat-img7.png'),
    require('../../assets/home-page/cat-img8.png'),
  ];
  return (
    <div className="home-page">
      <NavBar />
      <div class="AD1">
        <div class="AD1-inside">
          <p class="text-big">&uArr;</p>
          <p>動物送養</p>
          <p>
            歡迎各大專院校或相關團體，與我們聯繫，提供毛小孩照片與資料，幫助毛小孩找到安心的家。
          </p>
          <img src={require('../../assets/home-page/dog-cat.png')} alt="" />
        </div>
      </div>

      <div id="notice-id" class="notice">
        <p>
          <span class="notice-title">
            認養流程及須知
            <br />
          </span>
          <br />
          ◎認養民眾需年滿20歲，攜帶身分證
          <br />
          ◎認養地點：
          <br />
          1.臺中市動物之家
          <br />
          南屯園區：臺中市南屯區中台路601號 電話：04-23850949
          <br />
          后里園區：臺中市后里區堤防路370號 電話：04-25588024 <br />
          (后里園區因改建中，暫不開放)
          <br />
          2.中途動物醫院：本市委託辦理中途收容及絕育動物醫院，詳細所在醫院，公佈於動物認養資料「備註欄」，「認養時間」請電洽各委辦動物醫院。
          <br />
          3.認養會場(益起認養吧、愛心小站、活動認養會場)
          <br />
          ◎認養時間：10:00~12:00，13:30~16:00（星期日除外）
          <br />
          ◎認養中大型犬可申請送愛到家服務，範圍限大台中區域
          <br />
          ◎免費認養，犬貓皆實施植入晶片寵物登記及注射狂犬病疫苗。
          <br />
          ◎本認養公告之犬貓均已絕育可供認養，採現場辦理認養手續為主，恕不受理預約。
        </p>
      </div>

      <div id="dog-id" class="animal-pic">
        {dogImgPaths.map((path) => (
          <div class="col">
            <div class="animal-img">
              <img src={path} alt="" />
              <p>2018-07-11</p>
              <p>小巧可愛活力</p>
            </div>
          </div>
        ))}
      </div>

      <div id="cat-id" class="animal-pic">
        {catImgPaths.map((path) => (
          <div class="col">
            <div class="animal-img">
              <img src={path} alt="" />
              <p>2018-07-11</p>
              <p>小巧可愛活力</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
