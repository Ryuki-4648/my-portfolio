import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ModalAbout = () => {

  // Color
  const mainColor = "#236e9d";

  return (

    <>
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '50px',
          padding: '60px 50px 100px',
          height: '700px'
        }}
      >
        <div style={{height: '600px',overflowY: 'scroll'}}>
          <div
            style={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >

              <a
                href='https://twitter.com/Ryuki_4648'
                target='_blank'
                style={{
                  color: mainColor,
                  display: 'inline-block',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  marginBottom: '40px',
                  transition: '3s',
                }} rel="noreferrer"
              >
                @
                <span
                  style={{
                    borderBottom: `3px solid ${mainColor}`,
                    color: mainColor,
                    display: 'inline-block',
                  }}
                >
                  Ryuki_4648
                </span>
              </a>
              
              <h2 className='index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Profile</h2>
              <p style={{ fontSize: '14px', lineHeight: '1.8', letterSpacing: '0.05em' }}>1993年生まれ</p>
              <p style={{ fontSize: '14px', lineHeight: '1.8', letterSpacing: '0.05em', marginBottom: '40px' }}>
                現在、神戸のWeb制作会社で働いています。<br />
                企業サイトのコーディング、CMS組み込みがメインです。<br />デザインが好きなので、バナー制作をすることもあります。<br />
                新人研修・未経験で入社した方の教育も行っています。<br /><br />
                社外では、ReactやTypeScriptなどを用いた開発もしています。<br />
                今後のキャリアを考え、モダンなフロントエンド技術を用いたシステム・アプリ開発への転職を考えています。
              </p>

              <h2 className='index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>History</h2>
              <a className='modal-about-link' href='./assets/pdf/timeline.pdf' 
              style={{ 
                color: mainColor, 
                marginBottom: '15px',
                fontSize: '13px',
                textDecoration: 'none',
                margin: '0 auto 20px',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                display: 'inline-block',
                transition: 'all .3s',
              }} target="_blank" rel="noopener noreferrer">
                職務経歴書はこちら(PDF)
                <FaExternalLinkAlt />
              </a>
              <p style={{ fontSize: '14px', lineHeight: '1.8', letterSpacing: '0.05em', marginBottom: '15px' }}>小学生の頃にパソコンにハマり、自分のサイトを作成したり絵を描いていました。</p>
              <p style={{ fontSize: '14px', lineHeight: '1.8', letterSpacing: '0.05em', marginBottom: '40px' }}>卒業後は病棟看護師として働き、独学でデザインとコーディングを勉強。<br />退職後はクリニックの看護師をしながら、個人でWeb制作を開始しました。</p>

              <h2 className='index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Skill</h2>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '14px' }}>
                <li>HTML5/CSS3, JavaScript, React.js, TypeScript, Next.js, Node.js, Gulp</li>
                <li>GitHubを使ったチーム開発（業務システム）</li>
                <li>Figma, Adobe (Photoshop, Illustrator, XD, PremirePro)</li>
                <li>デザイン（Webサイト、広告バナー、素材）</li>
                <li>CMS（WordPress, MovableType）</li>
              </ul>

              <h2 className="index" style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Strength</h2>
              <p style={{ fontSize: '13px', lineHeight: '1.8', letterSpacing: '0.05em', marginBottom: '10px' }}>
                Web制作やデザイン、モダンなフロントエンド技術を独学で勉強してきました。<br />
                休日は大阪や神戸の勉強会に参加し、他社のエンジニアの方と交流をしています。<br />
                また、エンジニアコミュニティの運営やSNS運用を行っています。
              </p>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>独学</li>
                <li>デザイン力</li>
              </ul>

              <h2 className="index" style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Future</h2>
              <p style={{ fontSize: '13px', lineHeight: '1.8', letterSpacing: '0.05em', marginBottom: '10px' }}>
              デザインに強いエンジニア<br />
              </p>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>個人でデザインの仕事をする</li>
                <li>モダンなフロントエンド技術を用いたシステムやアプリの開発</li>
                <li>社内外問わず情報発信していく</li>
                <li>自社サービスの企画と開発</li>
                <li>勉強会で知り合ったメンバーと開発を行う</li>
              </ul>

              <h2 className="index" style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Find me on</h2>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>
                  <a href="https://github.com/Ryuki-4648" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <a href="https://www.pinterest.jp/yuki_017/portfolio/" target="_blank" rel="noopener noreferrer">Pinterest</a>
                </li>
                <li>
                  <a href="https://qiita.com/Ryuki4648" target="_blank" rel="noopener noreferrer">Qiita</a>
                </li>
              </ul>

              <h2 className='index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Hobby</h2>

          </div>
        </div>
      </div>

    </>
    
  );
};

export default ModalAbout;