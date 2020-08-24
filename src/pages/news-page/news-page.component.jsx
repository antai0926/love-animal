import React from 'react';
import './news-page.styles.scss';
import NavBar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';

const NewsPage = () => {
  return (
    <div className="news-page">
      <NavBar />
      <div className="blog-sidebar">
        <div className="widget">
          <h4 className="widget-title">分類</h4>
          <div className="categories">
            <ul className="list">
              <li className="active">
                <a href="https://www.i-adopt.com.tw/articles/medical">
                  醫療資訊<span>(4)</span>
                </a>
              </li>
              <li className="">
                <a href="https://www.i-adopt.com.tw/articles/training">
                  訓犬妙招<span>(4)</span>
                </a>
              </li>
              <li className="">
                <a href="https://www.i-adopt.com.tw/articles/miss">
                  協尋走失狗方法<span>(1)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h4 className="widget-title">熱門文章</h4>
          <div className="hot_article">
            <ul className="list">
              <li className="item">
                <a href="https://www.i-adopt.com.tw/articles/detail/84">
                  訓練師私房秘笈 4招找到伴你幸福的「好狗」
                </a>
                <p className="desp">
                  終於下定決心要養一隻狗，但你突然意識到你不知道該怎麼挑選適合你的那隻「好狗」呢?大部分的人選擇狗狗時，會先從公或母下手，先選擇好自己的喜愛性別，再來就是狗狗的外觀而非行為。有人喜歡短毛，有人喜歡黑狗，有人喜歡垂耳有人喜歡立耳。外表其實真的很重要，會影響你看到他的感受，以及你在遛狗時其他人的眼光。
                </p>
              </li>
              <li className="item">
                <a href="https://www.i-adopt.com.tw/articles/detail/83">
                  追緝走失狗秘笈
                </a>
                <p className="desp">
                  1.走失後的6-8小時是關鍵時期，意思是他的移動範圍"通常"不會太遠，而且體力還沒用盡，通常會持續想辦法找到回家的路，找不到也會被看到，所以在黃金時間裡大量瘋狂地去找，找到的機率很高。千萬不要賭他會自己回來，萬一沒回來，之後就麻煩了。2.狗的移動距離可以很廣，如果一般中型犬快步的話，一個小時走三公里不誇張。但在上面關鍵時期內有提到，通常狗會努力找回家的路，所以不會是直線移動，因此整體上不會到離家太遙遠的地方。但過了關鍵時期，如果狗還是在移動且迷失方向的話，就很難說了............
                </p>
              </li>
              <li className="item">
                <a href="https://www.i-adopt.com.tw/articles/detail/80">
                  狗貓消暑大作戰2-中暑帶來的傷害
                </a>
                <p className="desp">
                  中暑對動物造成的傷害可分成三個部分來進行探討，分別是血液灌流量不足對各個器官造成的傷害、腸毒素進入血液循環引起的全身性炎症反應以及瀰漫性血管內凝血。
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h4 className="widget-title line-bottom">最新文章</h4>
          <div className="hot_article lastest_article">
            <ul className="list">
              <li className="item">
                <a href="https://www.i-adopt.com.tw/articles/detail/84">
                  訓練師私房秘笈 4招找到伴你幸福的「好狗」
                </a>
                <div className="date">2018-07-16</div>
              </li>
              <li className="item">
                <a href="https://www.i-adopt.com.tw/articles/detail/85">
                  狗狗單獨在家叫不停? 三分鐘看懂狗狗分離焦慮
                </a>
                <div className="date">2018-07-16</div>
              </li>
              <li className="item">
                <a href="https://www.i-adopt.com.tw/articles/detail/86">
                  狗狗單獨在家哭天喊地，減緩分離焦慮的6個實用方法
                </a>
                <div className="date">2018-07-16</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="news-wrapper">
        <div className="news-container">
          <div className="news-item">
            <div className="news-title">帶毛小孩去玩? 全國62景點讓你挑</div>
            <div className="news-detail">
              假日想帶毛孩出去走走，卻不知去哪裡嗎？日前新北市動保處舉辦「毛寶貝去七逃」，招募民眾分享與寵物出遊的合照與景點，活動雖然已落幕，但新北市動保處已將參加者的照片集結成線上展覽，全國共有62個旅遊景點，如果您不知道週末要帶寵物去哪裡玩，不妨參考這些美照哦！
              台灣動物新聞網：閱讀完整文章請至
            </div>
            <div className="news-footer">
              <div className="news-date">2018-10-06</div>
              <div className="more">了解更多</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-title">帶毛小孩去玩? 全國62景點讓你挑</div>
            <div className="news-detail">
              假日想帶毛孩出去走走，卻不知去哪裡嗎？日前新北市動保處舉辦「毛寶貝去七逃」，招募民眾分享與寵物出遊的合照與景點，活動雖然已落幕，但新北市動保處已將參加者的照片集結成線上展覽，全國共有62個旅遊景點，如果您不知道週末要帶寵物去哪裡玩，不妨參考這些美照哦！
              台灣動物新聞網：閱讀完整文章請至
            </div>
            <div className="news-footer">
              <div className="news-date">2018-10-06</div>
              <div className="more">了解更多</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-title">帶毛小孩去玩? 全國62景點讓你挑</div>
            <div className="news-detail">
              假日想帶毛孩出去走走，卻不知去哪裡嗎？日前新北市動保處舉辦「毛寶貝去七逃」，招募民眾分享與寵物出遊的合照與景點，活動雖然已落幕，但新北市動保處已將參加者的照片集結成線上展覽，全國共有62個旅遊景點，如果您不知道週末要帶寵物去哪裡玩，不妨參考這些美照哦！
              台灣動物新聞網：閱讀完整文章請至
            </div>
            <div className="news-footer">
              <div className="news-date">2018-10-06</div>
              <div className="more">了解更多</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-title">帶毛小孩去玩? 全國62景點讓你挑</div>
            <div className="news-detail">
              假日想帶毛孩出去走走，卻不知去哪裡嗎？日前新北市動保處舉辦「毛寶貝去七逃」，招募民眾分享與寵物出遊的合照與景點，活動雖然已落幕，但新北市動保處已將參加者的照片集結成線上展覽，全國共有62個旅遊景點，如果您不知道週末要帶寵物去哪裡玩，不妨參考這些美照哦！
              台灣動物新聞網：閱讀完整文章請至
            </div>
            <div className="news-footer">
              <div className="news-date">2018-10-06</div>
              <div className="more">了解更多</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-title">帶毛小孩去玩? 全國62景點讓你挑</div>
            <div className="news-detail">
              假日想帶毛孩出去走走，卻不知去哪裡嗎？日前新北市動保處舉辦「毛寶貝去七逃」，招募民眾分享與寵物出遊的合照與景點，活動雖然已落幕，但新北市動保處已將參加者的照片集結成線上展覽，全國共有62個旅遊景點，如果您不知道週末要帶寵物去哪裡玩，不妨參考這些美照哦！
              台灣動物新聞網：閱讀完整文章請至
            </div>
            <div className="news-footer">
              <div className="news-date">2018-10-06</div>
              <div className="more">了解更多</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-title">帶毛小孩去玩? 全國62景點讓你挑</div>
            <div className="news-detail">
              假日想帶毛孩出去走走，卻不知去哪裡嗎？日前新北市動保處舉辦「毛寶貝去七逃」，招募民眾分享與寵物出遊的合照與景點，活動雖然已落幕，但新北市動保處已將參加者的照片集結成線上展覽，全國共有62個旅遊景點，如果您不知道週末要帶寵物去哪裡玩，不妨參考這些美照哦！
              台灣動物新聞網：閱讀完整文章請至
            </div>
            <div className="news-footer">
              <div className="news-date">2018-10-06</div>
              <div className="more">了解更多</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
