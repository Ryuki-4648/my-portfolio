import { Icon } from '@chakra-ui/react';
import React from 'react';
import { FaCompass, FaGithub, FaPen, FaPinterest, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export default function AccountList () {
  return (
    <>
      <ul className="c-home__account">
        <li className='c-home__accountItem'>
          <a href="https://github.com/Ryuki-4648" target="_blank" rel="noopener noreferrer">
          <Icon as={FaGithub} />
          </a>
        </li>
        <li className='c-home__accountItem'>
          <a href="https://www.pinterest.jp/yuki_017/portfolio/" target="_blank" rel="noopener noreferrer">
          <Icon as={FaPinterest} />
          </a>
        </li>
        {/* <li className='c-home__accountItem'>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Icon as={FaPen} />
          </a>
        </li> */}
        {/* <li className='c-home__accountItem'>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Icon as={FaTwitter} />
            </a>
        </li> */}
        <li className='c-home__accountItem'>
          <a href="https://connpass.com/user/Ryuki_4648/" target="_blank" rel="noopener noreferrer">
            <Icon as={FaCompass} />
          </a>
        </li>
        <li className='c-home__accountItem'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            <Icon as={MdMail} />
          </a>
        </li>
      </ul>
    </>
  );
};