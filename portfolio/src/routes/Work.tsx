import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';

import { Modal, useDisclosure } from '@chakra-ui/react';
import {BiLinkExternal, BiArrowFromBottom} from 'react-icons/bi';
import { FaExternalLinkAlt } from 'react-icons/fa';

import jsonWorkListData from '../list/workList.json';
import '../App.scss';
import '../index.css';

function Work() {

  interface WorkData {
    id: number;
    thumbnail: string;
    name: string;
    label: string;
    tool: string[];
    page: string;
    type: string[];
    period: string;
    explain: string;
    task: string;
    notice: string;
    url: string;
    summary: string;
    image01: string;
    image02: string;
    image03: string;
    image04: string;
    image05: string;
    github: string;
    release: string;
  }


  /* 改行を生成 */
  const changeLineBreaks = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
  };

  /* 
    クリックされた要素のデータをStateに保存 
    モーダルが開かれたときに表示する内容を動的に変更
  */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedWork, setSelectedWork] = useState<any>(null);
  // const [filteredWorks, setFilteredWorks] = useState<any>(null);
  const [filteredWorks, setFilteredWorks] = useState<WorkData[]>(jsonWorkListData);
  const [activeFilterType, setActiveFilterType] = useState<string>('すべて'); // 選択中の項目
  const [activeFilterTech, setActiveFilterTech] = useState<string>('すべて');

  const openModal = (workListData: WorkData) => {
    setSelectedWork(workListData);
    onOpen();
  };

  /** トップへ戻るボタン */
  const handleBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /** 絞り込み検索 */
  const handleFilterType = (filter: string) => {
    setActiveFilterType(filter);
    if (filter === 'すべて') {
      setFilteredWorks(jsonWorkListData);
    } else {
      setFilteredWorks(jsonWorkListData.filter(work => work.type.includes(filter)));
    }
  }

  const handleFilterTech = (filter: string) => {
    setActiveFilterTech(filter);
    if (filter === 'すべて') {
      setFilteredWorks(jsonWorkListData);
    } else {
      setFilteredWorks(jsonWorkListData.filter(work => work.tool.includes(filter)));
    }
  }

  return (
    <>
      <div className='p-work' id='top'>
        <div className='p-work__inner'>
          <h1 className='c-work__title'>WORKS</h1>
          <h2 className='c-work__index01'>制作実績</h2>
          <p className='c-work__text01'>クリックするとモーダルが開き、<br></br>詳細が表示されます。</p>

          <section className='p-work__section'>
            <h3 className='c-work__index02'>System<span>/</span>Web</h3>

            <div className='c-work__search'>
              <p className='c-work__searchCategory'>Type :</p>
              <ul className='c-work__searchList'>
                {['すべて', '個人開発', 'チーム開発', 'ハッカソン'].map((type) => (
                  <li key={type} className={`c-work__searchItem ${activeFilterType === type ? 'is-active' : ''}`} onClick={() => handleFilterType(type)}>{type}</li>
                ))}
              </ul>
            </div>

            <div className='c-work__search'>
              <p className='c-work__searchCategory'>Tech :</p>
              <ul className='c-work__searchList'>
                {['すべて', 'React.js（Next.js）', 'Vue.js（Nuxt.js）', 'TypeScript'].map((tech) => (
                  <li key={tech} className={`c-work__searchItem ${activeFilterTech === tech ? 'is-active': '' }`} onClick={() => handleFilterTech(tech)}>{tech}</li>
                ))}
              </ul>
            </div>

            <ul className='c-work__list'>
              {filteredWorks.map((workListData) => (
              <li key={workListData.id} className='c-work__item' onClick={() => openModal(workListData)}>
                <img className='c-work__thumb' src={workListData.thumbnail} alt={workListData.name} />
                <div className='c-work__itemTextWrap'>
                  <ul className='c-work__itemType'>
                    {workListData.type.map((item, index) => (
                      <li key={index} className='c-work__itemTypeItem'>{item}</li>
                    ))}
                  </ul>
                  <ul className='c-work__itemTool'>
                  {workListData.tool.map((item, index) => (
                    <li key={index} className='c-work__itemToolItem'>{item}</li>
                  ))}
                  </ul>
                  <h3 className='c-work__itemTitle'>{workListData.name}</h3>
                  <p className='c-work__itemRelease'>{dayjs(workListData.release).format('YYYY/MM')}</p>
                </div>
              </li>
              ))}
              {selectedWork && (
                <Modal isOpen={isOpen} onClose={onClose}>
                  <div className='c-modal__overlay' onClick={onClose}></div>
                  <div className='c-modal__content'>
                    <div 
                    className='c-modal__scroll'>
                      <div className='c-modal__contentWrap'>
                        <img className='c-modal__contentMv' src={selectedWork.thumbnail} alt={selectedWork.name}/>
                        <table className='work-modal-table c-work__modalTable'>
                          <tbody>
                            <tr>
                              <th>サイト名</th>
                              <td>{selectedWork.name}</td>
                            </tr>
                            <tr>
                              <th>使用技術や言語</th>
                              <td>{selectedWork.tool}</td>
                            </tr>
                            <tr>
                              <th>URL</th>
                              <td>
                                {selectedWork.url ? (
                                  <>
                                    <a className='c-work__modalLink' href={selectedWork.url} target='_blank' rel="noreferrer">
                                      {selectedWork.url}
                                    </a>
                                    <BiLinkExternal style={{ marginLeft: '10px', fontSize: '1.4rem' }} />
                                  </>
                                ) : (
                                  <p>なし</p>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>概要</th>
                              <td>{selectedWork.summary}</td>
                            </tr>
                            <tr>
                              <th>制作期間</th>
                              <td>{selectedWork.period}</td>
                            </tr>
                            <tr>
                              <th>担当箇所</th>
                              <td>{selectedWork.page}</td>
                            </tr>
                            <tr>
                              <th>説明</th>
                              <td>{changeLineBreaks(selectedWork.explain)}</td>
                            </tr>
                            {selectedWork.task && (
                              <tr>
                                <th>今後の課題</th>
                                <td>{changeLineBreaks(selectedWork.task)}</td>
                              </tr>
                            )}
                            {selectedWork.notice && (
                              <tr>
                                <th>注釈</th>
                                <td>{selectedWork.notice}</td>
                              </tr>
                            )}
                            <tr>
                              <th>コード（GitHub）</th>
                              <td>
                                {selectedWork.github ? (
                                  <>
                                    <a className='c-work__modalLink' href={selectedWork.github} target='_blank' rel="noreferrer">
                                      {selectedWork.github}
                                    </a>
                                    <BiLinkExternal style={{ marginLeft: '10px', fontSize: '1.4rem' }} />
                                  </>
                                ) : (
                                  'なし'
                                )}
                              </td>
                            </tr>
                            <tr className='c-work__modalTableImage'>
                              <th>キャプチャ</th>
                              <td>
                              {Array.from({ length: 5 }, (_, i) => selectedWork[`image0${i + 1}`]).map((image, index) => (
                                image && <img key={index} src={image} alt="作成ページの画像" />
                              ))}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </ul>
          </section>

          <section className='p-work__section'>
            <h3 className='c-work__index02'>Web Design</h3>
            <div className='c-work__linkWrap'>
              <a className='c-work__link' href='https://www.pinterest.jp/yuki_017/portfolio/' target='_blank' rel='noopener noreferrer'>
                Pinterest<p className='c-work__linkText'>をみる</p>
                <FaExternalLinkAlt className='c-work__linkExternal' />
              </a>
            </div>
          </section>
            
          <section className='p-work__section'>
            <h3 className='c-work__index02'>Graphic design</h3>
            {/* <div className='c-work__linkWrap'>
              <a className='c-work__link' href='https://www.pinterest.jp/yuki_017/portfolio/graphic/' target='_blank' rel='noopener noreferrer'>
                Pinterest<p className='c-work__linkText'>をみる</p>
                <FaExternalLinkAlt className='c-work__linkExternal' />
              </a>
            </div> */}
          </section>

          
        </div>

        <a className='c-work__back' href='/'>Back to home</a>
        <p className='c-work__top' onClick={handleBackTop}><BiArrowFromBottom /></p>

      </div>
    </>
  )
}

export default Work;