import React from 'react';
import './contact-page.styles.scss';
import NavBar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';
import AboutWrapper from '../../component/about-wrapper/about-wrapper.component';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <AboutWrapper />
      <div class="contact-wrapper">
        <div class="contact-map">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14562.722378740336!2d120.57415993101917!3d24.14785276445916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693e54c06897bd%3A0x89e9f6de3c364afd!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5Lit5Y-w6LevNjAx6Jmf!5e0!3m2!1szh-TW!2stw!4v1541659141706"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          ></iframe>
        </div>
        <div class="contact-msg notice">
          <p>
            南屯園區：臺中市南屯區中台路601號 電話：04-23850949 <br />
            后里園區：臺中市后里區堤防路370號 電話：04-25588024 <br />{' '}
            (后里園區因改建中，暫不開放) <br />
            2.中途動物醫院：本市委託辦理中途收容及絕育動物醫院，詳細所在醫院，公佈於動物認養資料「備註欄」，「認養時間」請電洽各委辦動物醫院。
            <br />
            3.認養會場(益起認養吧、愛心小站、活動認養會場)
            <br />
            ◎認養時間：10:00~12:00，13:30~16:00（星期日除外）
          </p>
        </div>
        <div class="contact-form">
          <form>
            <p>
              <input
                type="text"
                name="name"
                class=""
                placeholder="請輸入姓名"
              />
              <input type="email" name="email" placeholder="請輸入Email" />
              <textarea name="comments" placeholder="請輸入內容"></textarea>
            </p>
            <input type="submit" value="送出" class="" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
