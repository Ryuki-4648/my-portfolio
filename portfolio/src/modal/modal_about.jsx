import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Modal = ({ modalCloseButton, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='modal-about-wrap'>
          <div className='modal-about-left'>
            <a href='https://twitter.com/Ryuki_4648' className='modal-about-sns-link'>@<span>Ryuki_4648</span></a>
            <h2 className='index'>Profile</h2>
            <p className='text'>1993年生まれ</p>
            <p className='text'>現在、神戸のWeb制作会社で働いています。<br />
            （主な業務：企業サイトのコーディングとCMS組み込み）<br /><br />
            業務外では、ReactやTypeScriptなどを用いた開発もしています。<br /><br />
            今後のキャリアを考え、モダンなフロントエンド技術を用いたシステム・アプリ開発への転職を考えています。<br /><br />
            </p>
            <h2 className='index'>Skill</h2>
            <p className='text'>HTML5/CSS3 , JavaScript, React, TypeScript, Node.js, Gulp<br />
            GitHubを使ったチーム開発（業務システム）<br /><br />
            Figma, Adobe ( Photoshop, Illustrator, XD, PremirePro )<br />
            デザイン（Webサイト、広告バナー）<br /><br />
            WordPress, MovableType
            </p>
          </div>
          <div className='modal-about-right'>
            <h2 className='index'>History</h2>
            <p className='text'>
            小学生の頃にパソコンにハマり、HTMLを使って自分のサイトを作成。<br />
            高校生のとき「何歳になっても、どこでも働ける環境を作っておきたい」と考え、大学の看護学科へ進学。<br /><br />
            卒業後は病棟看護師として働き、独学でデザインとコーディングを勉強。<br />
            病院退職後はクリニックの看護師をしながら、個人やアルバイトでWeb制作を開始。<br /><br />
            </p>
            <a href='' className='modal-about-link' target="_blank" rel="noopener noreferrer">職務経歴書はこちら(PDF)<FaExternalLinkAlt /></a>
            <h2 className='index'>Vision</h2>
            <p className='text'>「デザインができるエンジニア」</p>
            <br /><br />
            <h2 className='index'>Find me on</h2>
            <ul>
              <li><a href='https://github.com/Ryuki-4648' target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href='https://www.pinterest.jp/yuki_017/portfolio/' target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <button className='modal-close-button' onClick={modalCloseButton}>Close</button>
      </section>
    </div>
  );
};

export default Modal;