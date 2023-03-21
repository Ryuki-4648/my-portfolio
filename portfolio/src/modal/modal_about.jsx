import { Box, Flex, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Modal = ({ modalCloseButton, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Box className={showHideClassName}>
      <Box className="modal-main">
        <Flex justifyContent='space-between'>
          <Box className='modal-about-left'>
            <Link href='https://twitter.com/Ryuki_4648' color='#236e9d' display='inline-block' fontSize='32px' fontWeight='bold' textDecoration='none' mb='42px' transition='3s'>@<Text borderBottom='3px solid #236e9d' color='#236e9d' display='inline-block'>Ryuki_4648</Text></Link>
            
            <Heading fontSize='21px' className='index'>Profile</Heading>
            <Text fontSize='14px' lineHeight='1.8' letterSpacing='0.05em'>1993年生まれ</Text>
            <Text fontSize='14px' lineHeight='1.8' letterSpacing='0.05em' mb='40px'>現在、神戸のWeb制作会社で働いています。<br />
            業務外では、ReactやTypeScriptなどを用いた開発もしています。<br />
            今後のキャリアを考え、モダンなフロントエンド技術を用いたシステム・アプリ開発への転職を考えています。
            </Text>

            <Heading fontSize='21px' className='index'>History</Heading>
            <Link href='' className='modal-about-link' color='#236e9d' target="_blank" rel="noopener noreferrer" mb='15px'>職務経歴書はこちら(PDF)<FaExternalLinkAlt /></Link>
            <Text fontSize='14px' lineHeight='1.8' letterSpacing='0.05em'>小学生の頃にパソコンにハマり、自分のサイトを作成。<br />高校生のとき「何歳になっても働ける環境を作っておきたい」と考え、大学の看護学科へ進学。</Text>
            <Text fontSize='14px' lineHeight='1.8' letterSpacing='0.05em'>卒業後は病棟看護師として働き、独学でデザインとコーディングを勉強。<br />退職後はクリニックの看護師をしながら、個人でWeb制作を開始。</Text>
          </Box>

          <Box className='modal-about-right'>
            <Heading fontSize='21px' className='index'>Skill</Heading>
            <UnorderedList ml='0' mb='40px' className='list-border' fontSize="13px">
              <ListItem>HTML5/CSS3 , JavaScript, React.js , TypeScript, Node.js, Gulp</ListItem>
              <ListItem>GitHubを使ったチーム開発（業務システム）</ListItem>
              <ListItem>Figma, Adobe ( Photoshop, Illustrator, XD, PremirePro )</ListItem>
              <ListItem>デザイン（Webサイト、広告バナー、素材）</ListItem>
              <ListItem>WordPress, MovableType</ListItem>
            </UnorderedList>
            
            <Heading fontSize='21px' className='index'>Vision</Heading>
            <Text fontSize='14px' lineHeight='1.8' letterSpacing='0.05em' mb='40px'>「デザインができるエンジニア」</Text>

            <Heading className='index' fontSize='21px'>Find me on</Heading>
            <UnorderedList className='list-border' ml='0' mb='40px'>
              <ListItem>
                <Link href='https://github.com/Ryuki-4648' target="_blank" rel="noopener noreferrer">GitHub</Link>
              </ListItem>
              <ListItem>
                <Link href='https://www.pinterest.jp/yuki_017/portfolio/' target="_blank" rel="noopener noreferrer">Pinterest</Link>
              </ListItem>
              <ListItem>
                <Link href='https://qiita.com/Ryuki4648' target="_blank" rel="noopener noreferrer">Qiita</Link>
              </ListItem>
            </UnorderedList>

            <Heading className='index' fontSize='21px'>Hobby</Heading>
          </Box>
        </Flex>
        <button className='modal-close-button' onClick={modalCloseButton}>Close</button>
      </Box>
    </Box>
  );
};

export default Modal;