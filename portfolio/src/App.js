// import logo from './logo.svg';
import { MdMail } from 'react-icons/md';
import './App.css';
import { FaExternalLinkAlt, FaGithub, FaPinterest, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './modal/modal_about';
function App() {

  const [showModal, setShowModal] = useState(false);

  const modalCloseButton = () => setShowModal(false);

  return (
    <div className="App">
        <Modal show={showModal} modalCloseButton={modalCloseButton}>
          <div className='modal-about-wrap'>
            <div className='modal-about-left'>
              <a href='https://twitter.com/Ryuki_4648' className='link modal-about-sns-link'>@Ryuki_4648</a>
              <h2 className='index'>Profile</h2>
              <p className='text'>1993年生まれ</p>
              <p className='text'>現在、神戸のWeb制作会社で働いています。<br />
              （主な業務：企業サイトのコーディングとCMS組み込み）<br /><br />
              プライベートでは、ReactやTypeScriptなどを用いた開発もしています。<br /><br />
              モダンなフロントエンド技術を用いたシステム・アプリ開発への転職を考えています。<br /><br />
              </p>
              <h2 className='index'>Skill</h2>
              <p className='text'>HTML / CSS , JavaScript, React, TypeScript, Node.js, Gulp<br />
              Figma, Adobe Photoshop, Illustrator, XD, PremirePro<br /><br />
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
              <a href='' className='modal-about-link'>職務経歴書はこちら(PDF)<FaExternalLinkAlt /></a>
              <h2 className='index'>Future</h2>
              <p className='text'>将来は「デザインができるエンジニア」になりたいです。</p>
            </div>
          </div>
        </Modal>

      <div className="content">
        <p className="content-sitename">R.YUKI WORKS Portfolio - yuki017.com</p>
        <div className="wrap">
          <a className="wrap-work" href="/work">
            <p>WORK</p>
          </a>
          <div className="wrap-about" onClick={() => setShowModal(true)}>
            <p>ABOUT</p>
          </div>
        </div>
        <ul className="content-sns">
          <li className="">
            <a className="" href="/"><FaTwitter /></a>
          </li>
          <li className="">
            <a className="" href="https://github.com/Ryuki-4648"><FaGithub height='50px' width='50px' /></a>
          </li>
          <li className="">
            <a className="" href="https://www.pinterest.jp/yuki_017/portfolio/"><FaPinterest /></a>
          </li>
          <li className="">
            <a className="" href="/">
              <MdMail />
            </a>
          </li>
        </ul>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
