// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <p className="content-sitename">R.YUKI WORKS Portfolio - yuki017.com</p>
        <div className="wrap">
          <a className="wrap-work" href="/work">
            <p>WORK</p>
          </a>
          <a className="wrap-about" href="/about">
            <p>ABOUT</p>
          </a>
        </div>
        <ul className="content-sns">
          <li className="">
            <a className="" href="/">T</a>
          </li>
          <li className="">
            <a className="" href="https://github.com/Ryuki-4648">G</a>
          </li>
          <li className="">
            <a className="" href="https://www.pinterest.jp/yuki_017/portfolio/">P</a>
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
