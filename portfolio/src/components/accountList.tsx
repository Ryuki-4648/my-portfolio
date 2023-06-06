import { Icon } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaPinterest, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const AccountList: React.FC = () => {
  return (
    <>
      <ul className="content-sns"
      style={{
        margin: '0',
        position: 'absolute',
      }}>
        <li>
          <a href="https://twitter.com/Ryuki_4648" target="_blank" rel="noopener noreferrer">
            <Icon as={FaTwitter} />
            </a>
        </li>
        <li>
          <a href="https://github.com/Ryuki-4648" target="_blank" rel="noopener noreferrer">
          <Icon as={FaGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.jp/yuki_017/portfolio/" target="_blank" rel="noopener noreferrer">
          <Icon as={FaPinterest} />
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            <Icon as={MdMail} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default AccountList;
