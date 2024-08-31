import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ModalAbout = () => {

  return (

    <>
      <div className='c-about__modal'>
        <div className='c-about__modalScroll c-modal__scroll'>
          <div className='c-about__modalContent'>
            <a className='c-about__modalName' href="https://twitter.com/Ryuki_4648" target='_blank' rel='noreferrer'>
              @<span className='c-about__modalNameText'>Ryuki_4648</span>
            </a>
            
            <h2 className='c-about__modalIndex'>Profile</h2>
            <p className='c-about__modalText01'>1993年生まれ</p>
            <p className='c-about__modalText01' style={{ marginBottom: '40px' }}>
              現在、大阪のシステム開発会社でフロントエンドエンジニアとして勤務しております。<br />
              社外では、ReactやTypeScriptなどを用いたシステム開発の経験があります。<br />
              今後のキャリアを考え、よりモダンなフロントエンド技術を用いたシステム・アプリ開発ができる会社への転職を考えています。
            </p>

            <h2 className='c-about__modalIndex'>History</h2>
            <a className='c-about__modalLink' href='./assets/pdf/timeline.pdf' target='_blank' rel='noopener noreferrer'>
              職務経歴書はこちら(PDF)<FaExternalLinkAlt />
            </a>
            <p className='c-about__modalText01' style={{ marginBottom: '15px' }}>
              小学生の頃にパソコンにハマり、自分のサイトを作成したり絵を描いていました。
            </p>
            <p className='c-about__modalText01' style={{ marginBottom: '40px' }}>
              卒業後は病棟看護師として働き、独学でデザインとコーディングの勉強を始めました。<br />
              退職後は、クリニックの看護師をしながら独学で勉強したり、個人でWeb制作を行っていました。<br />
              神戸のWeb制作会社で3年間コーダーとして働き、<br />
              企業サイトのコーディング・CMS組み込み・バナー制作のほか、コーダーの新人教育を行いました。
            </p>

            <h2 className='c-about__modalIndex'>Skill</h2>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>HTML5/CSS3, JavaScript, jQuery, React.js（Next.js）, Vue.js（Nuxt）, TypeScript, Node.js, Gulp</li>
              <li className='c-about__modalItem'>GitHubやGitLabを使ったチーム開発（業務システム等）</li>
              <li className='c-about__modalItem'>Figma, Adobe (Photoshop, Illustrator, XD, PremirePro)</li>
              <li className='c-about__modalItem'>デザイン（Webサイト、広告バナー、素材、イラスト）</li>
              <li className='c-about__modalItem'>CMS組み込み（WordPress, MovableType, PowerCMS）</li>
            </ul>
            <p className='modal-about-text02' style={{ marginBottom: '40px' }}>* 勉強中のものも含みます。</p>

            <h2 className='c-about__modalIndex'>Strength</h2>
            <p className='c-about__modalText01'>
              これまでWeb制作技術やデザインを独学で勉強してきました。<br />
              現在はモダンなフロントエンド技術を学習中です。<br /><br />
              休日は大阪や神戸の勉強会に参加し、他社のエンジニアの方と交流を深めています。<br />
              また、エンジニアコミュニティの運営やSNS運用を行っています。
            </p>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>独学</li>
              <li className='c-about__modalItem'>デザイン力</li>
              <li className='c-about__modalItem'>人との関わり</li>
              <li className='c-about__modalItem'>社外での活動</li>
            </ul>

            <h2 className='c-about__modalIndex'>Future</h2>
            <p className='c-about__modalText01' style={{ marginBottom: '10px' }}>デザインに強いエンジニアになりたいです。<br /></p>
            <ul className='c-about__modalList'>
              <li className='c-about__modalItem'>個人でデザインの仕事をする</li>
              <li className='c-about__modalItem'>モダンな技術を用いたシステムやアプリの開発</li>
              <li className='c-about__modalItem'>社内外問わず、技術とデザインの情報を発信する</li>
              <li className='c-about__modalItem'>勉強会で知り合ったメンバーと開発を行う</li>
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
              <li className='c-about__modalItem'>一人で旅行・キャンプ・スノボ・ライブへ行く</li>
              <li className='c-about__modalItem'>お酒・野球観戦・映画・サウナ</li>
              <li className='c-about__modalItem'>乃木坂・櫻坂・日向坂・NMB・ももクロ</li>
            </ul>
          </div>
        </div>
      </div>

    </>
    
  );
};

export default ModalAbout;