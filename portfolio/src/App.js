// import logo from './logo.svg';
import { MdMail } from 'react-icons/md';
import './App.css';
import { FaGithub, FaPinterest, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './modal/modal_about';
import { Box, Flex, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';

function App() {

  const [showAboutModal, setshowAboutModal] = useState(false);

  const modalCloseButton = () => setshowAboutModal(false);

  return (
    <Box className="App">

      <Modal show={showAboutModal} modalCloseButton={modalCloseButton} />

      <Box className="content">

        <Text className="content-sitename">R.YUKI WORKS Portfolio</Text>

        <Flex className="wrap">
          <Link className="wrap-work" overflow='hidden' h='70vh' w='48%' href="/work">
            <Text fontSize='120px' fontWeight='bold' position='absolute' left='-48px' top='40px'>WORK</Text>
          </Link>
          <Box className="wrap-about" overflow='hidden' h='70vh' w='48%' onClick={() => setshowAboutModal(true)}>
            <Text fontSize='120px' fontWeight='bold' position='absolute' right='-48px' bottom='40px'>ABOUT</Text>
          </Box>
        </Flex>

        <UnorderedList className="content-sns">
          <ListItem className="">
            <Link className="" href="https://twitter.com/Ryuki_4648" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          </ListItem>
          <ListItem className="">
            <Link className="" href="https://github.com/Ryuki-4648" target="_blank" rel="noopener noreferrer"><FaGithub height='50px' width='50px' /></Link>
          </ListItem>
          <ListItem className="">
            <Link className="" href="https://www.pinterest.jp/yuki_017/portfolio/" target="_blank" rel="noopener noreferrer"><FaPinterest /></Link>
          </ListItem>
          <ListItem className="">
            <Link className="" href="/">
              <MdMail />
            </Link>
          </ListItem>
        </UnorderedList>

      </Box>

    </Box>
  );
}

export default App;
