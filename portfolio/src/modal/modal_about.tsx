import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ModalAbout = () => {

  // Color
  const mainColor = '#236e9d';

  return (

    <>
      <div
        className='modal-content-inner'
        style={{
          backgroundColor: '#fff',
        }}
      >
        <div className='modal-content-scroll modal-scroll' 
          style={{
            overflowY: 'scroll'
          }}>
          <div
            style={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: '0 20px 0 0',
            }}
          >

              <a
                href="https://twitter.com/Ryuki_4648"
                target='_blank'
                className='modal-about-name'
                style={{
                  display: 'inline-block',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all .3s',
                }} rel='noreferrer'
              >
                @
                <span
                  style={{
                    borderBottom: `3px solid ${mainColor}`,
                    display: 'inline-block',
                  }}
                >
                  Ryuki_4648
                </span>
              </a>
              
              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Profile</h2>
              <p className='modal-about-text01'>1993年生まれ</p>
              <p className='modal-about-text01' style={{ marginBottom: '40px' }}>
                現在、神戸のWeb制作会社で働いています。<br />
                企業サイトのコーディング・CMS組み込み・バナー制作のほか、コーダーの新人教育を行っています。<br /><br />
                社外では、ReactやTypeScriptなどを用いたシステム開発の経験があります。<br />
                今後のキャリアを考え、モダンなフロントエンド技術を用いたシステム・アプリ開発への転職を考えています。
              </p>

              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>History</h2>
              <a className='modal-about-link' href='./assets/pdf/timeline.pdf' 
              style={{ 
                marginBottom: '15px',
                fontSize: '13px',
                textDecoration: 'none',
                margin: '0 auto 20px',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                display: 'inline-block',
                transition: 'all .3s',
              }} target='_blank' rel='noopener noreferrer'>
                職務経歴書はこちら(PDF)
                <FaExternalLinkAlt />
              </a>
              <p className='modal-about-text01' style={{ marginBottom: '15px' }}>
                小学生の頃にパソコンにハマり、自分のサイトを作成したり絵を描いていました。
                </p>
              <p className='modal-about-text01' style={{ marginBottom: '40px' }}>
                卒業後は病棟看護師として働き、独学でデザインとコーディングの勉強を始めました。<br />
                退職後は、クリニックの看護師をしながら個人でWeb制作を行い、現在に至ります。
              </p>

              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Skill</h2>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '10px', fontSize: '14px' }}>
                <li>HTML5/CSS3, JavaScript, jQuery, React.js, TypeScript, Next.js, Node.js, Gulp</li>
                <li>GitHubやGitLabを使ったチーム開発（業務システム等）</li>
                <li>Figma, Adobe (Photoshop, Illustrator, XD, PremirePro)</li>
                <li>デザイン（Webサイト、広告バナー、素材、イラスト）</li>
                <li>CMS組み込み（WordPress, MovableType, PowerCMS）</li>
              </ul>
              <p className='modal-about-text02' style={{ marginBottom: '40px' }}>* 勉強中のものも含みます。</p>

              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Strength</h2>
              <p className='modal-about-text01' style={{ marginBottom: '10px' }}>
                これまでWeb制作技術やデザインを独学で勉強してきました。<br />
                現在はモダンなフロントエンド技術を学習中です。<br /><br />
                休日は大阪や神戸の勉強会に参加し、他社のエンジニアの方と交流を深めています。<br />
                また、エンジニアコミュニティの運営やSNS運用を行っています。
              </p>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>独学</li>
                <li>デザイン力</li>
                <li>人との関わり</li>
                <li>社外での活動</li>
              </ul>

              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Future</h2>
              <p className='modal-about-text01' style={{ marginBottom: '10px' }}>
              デザインに強いエンジニアになりたいです。<br />
              </p>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>個人でデザインの仕事をする</li>
                <li>モダンな技術を用いたシステムやアプリの開発</li>
                <li>社内外問わず、技術とデザインの情報を発信する</li>
                <li>勉強会で知り合ったメンバーと開発を行う</li>
              </ul>

              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Find me on</h2>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>
                  <a href="https://github.com/Ryuki-4648" target='_blank' rel='noopener noreferrer'>GitHub</a>
                </li>
                <li>
                  <a href="https://www.pinterest.jp/yuki_017/portfolio/" target='_blank' rel='noopener noreferrer'>Pinterest</a>
                </li>
                <li>
                  <a href="https://qiita.com/Ryuki4648" target='_blank' rel='noopener noreferrer'>Qiita</a>
                </li>
              </ul>

              <h2 className='modal-about-index' style={{ color: '#777', padding: '0 0 0 10px', fontSize: '21px', letterSpacing: '0.08em' }}>Hobby</h2>
              <p className='modal-about-text01' style={{ marginBottom: '10px' }}>

              </p>
              <ul className='list-border' style={{ listStyleType: 'none', marginLeft: '0', marginBottom: '40px', fontSize: '13px' }}>
                <li>一人で旅行・キャンプ・スノボ・ライブへ行く</li>
                <li>お酒・野球観戦・映画・サウナ</li>
                <li>乃木坂・櫻坂・日向坂・NMB・ももクロ</li>
              </ul>
          </div>
        </div>
      </div>

    </>
    
  );
};

export default ModalAbout;