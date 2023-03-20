// import logo from './logo.svg';
import { MdMail } from 'react-icons/md';
import './App.css';
import { FaGithub, FaPinterest, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './modal/modal_about';

function App() {

  const [showAboutModal, setshowAboutModal] = useState(false);

  const modalCloseButton = () => setshowAboutModal(false);

  return (
    <div className="App">

      <Modal show={showAboutModal} modalCloseButton={modalCloseButton} />

      <div className="content">

        <p className="content-sitename">R.YUKI WORKS Portfolio</p>

        <div className="wrap">
          <a className="wrap-work" href="/work">
            <p>WORK</p>
          </a>
          <div className="wrap-about" onClick={() => setshowAboutModal(true)}>
            <p>ABOUT</p>
          </div>
        </div>

        <ul className="content-sns">
          <li className="">
            <a className="" href="https://twitter.com/Ryuki_4648" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </li>
          <li className="">
            <a className="" href="https://github.com/Ryuki-4648" target="_blank" rel="noopener noreferrer"><FaGithub height='50px' width='50px' /></a>
          </li>
          <li className="">
            <a className="" href="https://www.pinterest.jp/yuki_017/portfolio/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
          </li>
          <li className="">
            <a className="" href="/">
              <MdMail />
            </a>
          </li>
        </ul>

      </div>

    </div>
  );
}

export default App;
