import React from 'react';

import {BiArrowFromBottom} from 'react-icons/bi';

import '../App.scss';
import '../index.scss';
import JobHistoryContent from '../components/JobHistoryContent';

export default function JobHistory() {

  /** トップへ戻るボタン */
  const handleBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className='p-work' id='top'>
        <div className='p-work__inner'>
          <h1 className='c-jobHistory__title'>RESUME</h1>
          <h2 className='c-jobHistory__index01'>職務経歴書</h2>
          <p className='c-jobHistory__explain'>HTMLコーダー、エンジニアに関する職務経歴書です。</p>

          <div className=''>
            <JobHistoryContent />
          </div>

        </div>

        <a className='c-work__back' href='/'>Back to home</a>
        <p className='c-work__top' onClick={handleBackTop}><BiArrowFromBottom /></p>

      </div>
    </>
  )
}