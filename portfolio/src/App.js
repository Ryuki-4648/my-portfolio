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

      <Box alignItems='center' className="content" position='relative' height='100vh' bgColor='#236e9d' overflow='hidden' display='flex'>

        <Text color='#fff' className="content-sitename" fontSize='14px' fontWeight='bold' display='block' transform='translateY(-50%)' position='absolute' letterSpacing='0.1em' left='30px' top='50%' textTransform='uppercase'>R.YUKI WORKS Portfolio</Text>

        <Flex alignItems='center' className="wrap" display='flex' justifyContent='center' margin='0 auto' width='75%'>
          <Link className="wrap-work" overflow='hidden' h='70vh' position='relative' w='48%' href="/work">
            <Text fontSize='120px' fontWeight='bold' position='absolute' left='-48px' top='40px'>WORK</Text>
          </Link>
          <Box cursor='pointer' className="wrap-about" overflow='hidden' h='70vh' right='200px' position='relative' w='48%' onClick={() => setshowAboutModal(true)}>
            <Text fontSize='120px' fontWeight='bold' position='absolute' right='-48px' bottom='40px'>ABOUT</Text>
          </Box>
        </Flex>

        <UnorderedList className="content-sns" position='absolute' right='40px' top='50%' transform='translateY(-50%)'>
          <ListItem className="">
            <Link className="" href="https://twitter.com/Ryuki_4648" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          </ListItem>
          <ListItem className="">
            <Link className="" href="https://github.com/Ryuki-4648" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
          </ListItem>
          <ListItem className="">
            <Link className="" href="https://www.pinterest.jp/yuki_017/portfolio/" target="_blank" rel="noopener noreferrer"><FaPinterest /></Link>
          </ListItem>
          <ListItem className="">
            <Link className="" href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              <MdMail />
            </Link>
          </ListItem>
        </UnorderedList>

      </Box>

    </Box>
  );
}

export default App;
