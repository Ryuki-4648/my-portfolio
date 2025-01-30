import { Icon } from '@chakra-ui/react';
import React from 'react';
import { FaCompass, FaGithub, FaPen, FaPinterest, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { SiQiita } from "react-icons/si";
import accountData from '../data/account.json';

// ReactIcons名をオブジェクトとしてマッピング
const iconMap: { [key: string]: React.ElementType } = {
  FaGithub,
  FaPinterest,
  FaCompass,
  SiQiita,
  MdMail
};

export default function AccountList () {
  return (
    <>
      <ul className="c-home__account">
        {accountData.map((data) => {
          const IconComponent = iconMap[data.icon]; // 文字列をアイコンコンポーネントに変換
          return (
            <li key={data.id} className='c-home__accountItem'>
              <a href={data.url}>
                {IconComponent ? <Icon as={IconComponent} /> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};