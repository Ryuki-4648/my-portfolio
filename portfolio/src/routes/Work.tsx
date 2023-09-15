import { Modal, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../App.css';
import jsonWorkListData from '../list/workList.json';
import React from 'react';
import {BiLinkExternal, BiArrowFromBottom} from 'react-icons/bi';

function Work() {

  interface WorkData {
    id: number;
    thumbnail: string;
    name: string;
    label: string;
    tool: string;
    page: string;
    type: string;
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
  }
  
    // Color
    const mainColor = '#236e9d';

    const { isOpen, onOpen, onClose } = useDisclosure();

    // 改行を生成
    const changeLineBreaks = (text: string) => {
      const lines = text.split('\n');
      return lines.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
    };

  /* 
    クリックされた要素のデータをStateに保存 
    モーダルが開かれたときに表示する内容を動的に変更
  */
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const openModal = (workListData: WorkData) => {
    setSelectedWork(workListData);
    onOpen();
  };

  return (
    <>
      <div
        className='work-content'
        id='top'
        style={{
          backgroundColor: mainColor,
          position: 'relative',
          maxWidth: '100%',
          margin: '0',
          marginInlineEnd: '0',
          paddingInlineEnd: '0'
        }}>
          
        <div
          className='work-content-inner'
          style={{
            backgroundColor: '#fff',
            margin: '0 auto',
            position: 'relative',
          }}>
          <h1
            className='work-content-title'
            style={{
              color: mainColor, 
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: '1',
              position: 'absolute',
            }}>WORKS
          </h1>
          <h2
            className='work-content-index01'
            style={{
            fontWeight: 'bold',
            textAlign: 'center', 
            letterSpacing: '0.1em'
          }}>制作実績
          </h2>
          <p
            className='work-content-text01'
            style={{
              textAlign: 'center',
              position: 'relative',
            }}>クリックするとモーダルが開き、<br></br>詳細が表示されます。
          </p>

          <h3
            className='work-content-index02'
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#222'
            }}>System ・ Web</h3>
          <ul
            className='work-list'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
            {jsonWorkListData.map((workListData) => (
            <li key={workListData.id} 
              className='work-list-item'
              style={{
                cursor: 'pointer',
              }}
            onClick={() => openModal(workListData)}>
              <img 
              className='work-list-item-thumb'
              style={{margin: '0 auto 20px', transition: 'all .3s'}}
              src={workListData.thumbnail} 
              alt={workListData.name} />
              <div className='work-list-item-text-wrap'>
                <p 
                style={{
                  fontSize: '1.3rem',
                  borderColor: `{${workListData}.label}`,
                  borderWidth: '1px',
                  width: '120px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 0 10px',
                  borderRadius: '15px'}}>
                    {workListData.type}
                </p>
                <p style={{
                  fontSize: '1.5rem', 
                  fontWeight: 'bold'}}
                  >{workListData.name}
                </p>
              </div>
            </li>
            ))}
            {selectedWork && (
              <Modal isOpen={isOpen} onClose={onClose}>
                <div className='modal-overlay'
                style={{
                  position: 'fixed',
                  left: '0',
                  top: '0',
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  cursor: 'pointer',
                }}
                onClick={onClose}>
                </div>
                <div
                  className='work-modal-content'
                  style={{
                    backgroundColor: '#fff',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    position: 'fixed',
                    borderRadius: '30px',
                    }}>
                  <div 
                  className='modal-scroll'
                  style={{
                  overflowY: 'scroll',
                  }}>
                    <div
                      className='work-modal-content-wrap'>
                        <img
                        className='work-modal-content-mv'
                        src={selectedWork.thumbnail} 
                        alt={selectedWork.name}
                      />
                      <table className='work-modal-table'>
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
                                  <a href={selectedWork.url} target='_blank' style={{ color: mainColor, textDecoration: 'underline' }} rel="noreferrer">
                                    {selectedWork.url}
                                  </a>
                                  <BiLinkExternal style={{ marginLeft: '10px', fontSize: '1.4rem' }} />
                                </>
                              ) : (
                                <span>なし</span>
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
                            <th>コード</th>
                            <td>
                              {selectedWork.github ? (
                                <>
                                  <a href={selectedWork.github} target='_blank' style={{ color: mainColor, textDecoration: 'underline' }} rel="noreferrer">
                                    {selectedWork.github}
                                  </a>
                                  <BiLinkExternal style={{ marginLeft: '10px', fontSize: '1.4rem' }} />
                                </>
                              ) : (
                                'なし'
                              )}
                            </td>
                          </tr>
                          <tr className='work-modal-table-image'>
                            <th>画面</th>
                            <td>
                            {Array.from({ length: 5 }, (_, i) => selectedWork[`image0${i + 1}`]).map((image, index) => (
                              image && <img key={index} src={image} alt="作成ページの画像" style={{ border: '1px solid #dbdbdb' }} />
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

          <h3
            className='work-content-index02'
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#222'
            }}>
              Design
            </h3>
            <div 
            style={{textAlign: 'center'}}>
              <a
                className='work-content-link'
                style={{
                  borderBottom: '2px solid #236e9d',
                  display: 'inline-block',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  margin: '0 auto',
                  textDecoration: 'none'
                }}
                href='https://www.pinterest.jp/yuki_017/portfolio/'
                target='_blank'
                rel='noopener noreferrer'>Pinterest
                <p 
                style={{
                  display: 'inline',
                  fontSize: '1.4rem',
                  margin: '0 2px'
                  }}>をみる
                </p>
                <FaExternalLinkAlt display='inline' fontSize='15px' />
              </a>
            </div>

        </div>

        <a 
          className='work-content-back'
          style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            transition: 'all .3s',
          }} href='/'>Back to home
        </a>

        <a className='work-content-top' href='#top'>
          <BiArrowFromBottom />
        </a>

      </div>
    </>
  )
}

export default Work;