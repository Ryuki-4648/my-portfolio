import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ModalAbout = () => {

  return (

    <>
      <div className='c-about__modal'>
        <div className='c-about__modalScroll c-modal__scroll'>
          <div className='c-about__modalContent'>
            {/* <a className='c-about__modalName' href="https://twitter.com/Ryuki_4648" target='_blank' rel='noreferrer'>
              @<span className='c-about__modalNameText'>Ryuki_4648</span>
            </a> */}
            
            <h2 className='c-about__modalIndex'>Profile</h2>
            <p className='c-about__modalText01'>
              1993年生まれ<br />
              現在、大阪のシステム開発会社でフロントエンドエンジニアとして勤務しております。
            </p>
            <p className='c-about__modalText01'>
              社外ではエンジニア勉強会に参加し、他社の方と交流を深めています。<br />
              勉強会で知り合った仲間とシステム開発の経験があります。（React.js）
            </p>
            <p className='c-about__modalText01'>
              上流から携わることができるシステム・アプリ開発会社への転職を考えています。<br />
              バックエンドやインフラの技術も学び、将来的にはフルスタックエンジニアを目指しています。
            </p>

            <h2 className='c-about__modalIndex'>History</h2>
            <p className='c-about__modalText01'>
              小学生の頃からパソコンが好きで、ホームページ作成やお絵描き（絵板・絵チャ）をしていました。<br />
              医療系の資格を取得したあと、ものづくりができる仕事に就きたいと考えていました。
            </p>
            <p className='c-about__modalText01'>
              大学卒業後は病棟看護師として働きながら、デザインとコーディングの勉強を始めました。<br />
              退職後、クリニックの看護師をしながら個人でWeb制作を行っていました。
            </p>
            <p className='c-about__modalText01'>
              2020年から3年間、神戸のWeb制作会社でコーダーとして勤務し、<br />
              企業サイトの制作・CMS組み込み・バナー制作・コーダーの新人教育などを行っていました。
            </p>

            <h2 className='c-about__modalIndex'>Skill</h2>
            <p className='c-about__modalText01'>実務経験があるものを記載しております。</p>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>HTML5/CSS3, Sass, JavaScript, jQuery, Node.js, Gulp</li>
              <li className='c-about__modalItem'>React.js（Next.js）, Vue.js（Nuxt.js）, TypeScript</li>
              <li className='c-about__modalItem'>GitHubやGitLabなどを使ったチーム開発</li>
              <li className='c-about__modalItem'>Figma, Adobe ソフト（Photoshop, Illustrator, XD, PremirePro）</li>
              <li className='c-about__modalItem'>デザイン（Webサイト、広告バナー、素材、イラスト）</li>
              <li className='c-about__modalItem'>CMS組み込み（WordPress, MovableType, PowerCMS）</li>
            </ul>

            <h2 className='c-about__modalIndex'>Event</h2>
            <p className='c-about__modalText01'>勉強会やエンジニアイベントが好きで、スタッフとして参加することもあります。</p>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>
                <a className='c-about__modalLink' href="https://2024.kphpug.jp/" target='_blank' rel="noreferrer">PHPカンファレンス関西2024<FaExternalLinkAlt /></a> 当日スタッフ（2024年2月11日）
              </li>
              <li className='c-about__modalItem'>
                <a className='c-about__modalLink' href="https://dotstocode.studio.site/" target='_blank' rel="noreferrer">Dots to Code ハッカソン<FaExternalLinkAlt /></a>への参加（2024年3月）
              </li>
              <li className='c-about__modalItem'>
                <a className='c-about__modalLink' href="https://vuefes.jp/2024/" target='_blank' rel="noreferrer">Vue Fes Japan 2024<FaExternalLinkAlt /></a> コアスタッフ＆Webデザイナースタッフ（2024年3月〜10月）
              </li>
            </ul>

            <h2 className='c-about__modalIndex'>Strength</h2>
            <p className='c-about__modalText01'>
              Web制作が得意で、デザインからコーディングまで一貫して行うことができます。
            </p>
            <p className='c-about__modalText01'>
              Web制作やデザイン、フロントエンド技術を独学で勉強してきました。<br />
              自ら新しい知識を学ぶ姿勢があります。<br />
              学びたいことがあれば、まず手を動かすことから始めます。
            </p>
            <p className='c-about__modalText01'>
              勉強会に積極的に参加し、他社の方々と交流を深めています。<br />
              コミュニケーションを大切にしています。
            </p>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>学ぶ姿勢</li>
              <li className='c-about__modalItem'>人との関わり</li>
              <li className='c-about__modalItem'>社外での活動</li>
            </ul>

            <h2 className='c-about__modalIndex'>Future</h2>
            <p className='c-about__modalText01'>デザインもできるエンジニアを目指しています。<br /></p>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>モダンな技術を用いたシステムやアプリの開発</li>
              <li className='c-about__modalItem'>上流から下流までの一連の開発に携わりたい</li>
              <li className='c-about__modalItem'>バックエンドの技術にも触れ、フルスタックエンジニアになる</li>
              <li className='c-about__modalItem'>社内外問わず、技術とデザインの情報を発信したりLTをする</li>
              <li className='c-about__modalItem'>個人でデザインやイラストの仕事をする</li>
            </ul>

            <h2 className='c-about__modalIndex'>Find me on</h2>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>
                <a className='c-about__modalItemLink' href="https://github.com/Ryuki-4648" target='_blank' rel='noopener noreferrer'>GitHub</a>
              </li>
              <li className='c-about__modalItem'>
                <a className='c-about__modalItemLink' href="https://www.pinterest.jp/yuki_017/portfolio/" target='_blank' rel='noopener noreferrer'>Pinterest</a>
              </li>
              <li className='c-about__modalItem'>
                <a className='c-about__modalItemLink' href="https://qiita.com/Ryuki4648" target='_blank' rel='noopener noreferrer'>Qiita</a>
              </li>
              <li className='c-about__modalItem'>
                <a className='c-about__modalItemLink' href="https://connpass.com/user/Ryuki_4648/" target='_blank' rel='noopener noreferrer'>connpass</a>
              </li>
            </ul>

            <h2 className='c-about__modalIndex'>Hobby</h2>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>ひとり旅</li>
              <li className='c-about__modalItem'>ソロキャン・スノボ・ライブ・握手会・お酒・映画・サウナ</li>
              <li className='c-about__modalItem'>野球観戦（阪神・オリックス）</li>
              <li className='c-about__modalItem'>乃木坂・櫻坂（欅坂）・日向坂・NMB・ももクロ</li>
            </ul>
          </div>
        </div>
      </div>

    </>
    
  );
};

export default ModalAbout;