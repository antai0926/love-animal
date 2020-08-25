import React from 'react';
import './about-page.styles.scss';
import NavBar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';
import AboutWrapper from '../../component/about-wrapper/about-wrapper.component';

const AboutPage = () => {
  return (
    <div className="about-page">
      <NavBar />
      <AboutWrapper/>
      <div className="padding"></div>
      <div className="about">
        <p>
          設置目的
          本市「動物之家」南屯園區於民國九十年十月十日落成啟用，其籌設係依據「動物保護法」及配合市政發展重點，暫時收容並妥善管理市民因故無法續養及本市例行捕捉疏縱戶外之流浪動物，提供流浪動物一處良好管顧之環境。園區面積約三、三00坪，除收容犬隻外，另規劃有溫馴、珍禽及水生動物展示區，配合參觀導覽及展示作為中小學生戶外教學及市民假日休閒之場所，以教育市民正確之動物保護及飼養的觀念，並鼓勵認領養以解決本市流浪動物問題。
        </p>
        <p>
          園區規劃 園區規劃目前共分四區：
          一、愛心犬貓認領養區：本市捕捉之流浪犬貓，經篩選過的健康、溫馴犬貓提供認領養。
          二、可愛動物展示區：飼養水生、珍禽、溫馴各類之可愛動物，目前園區飼養多種動物（包括：
          山羊、梅花鹿、水鹿、紅耳龜、綠頭鴨、番鴨、菜鴨、中國白鵝、鴕鳥、鴿、藍孔雀、白孔雀、金雞、紅原雞、環頸雉、白鷴、日本雞、兔等）。
          三、行政作業中心、動物保護、野生動物宣導、教育訓練及導覽解說服務。
          四、隔離作業區：
          園區動物醫療、絕育手術、動物行為評估、緊急人道處理作業。
        </p>
        <p>
          服務項目
          園區主要提供四項服務項目：流浪犬認養、家犬棄養收容、遺失家犬認領及園區參觀導覽解說。致力於流浪犬認領養，為流浪犬找到一個溫暖的家是我們努力的目標。
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
