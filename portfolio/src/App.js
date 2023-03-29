import './App.css';
import { useState } from 'react';
import Modal from './modal/modal_about';
import AccountList from './components/accountList/index';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Work from './routes/work';
import { Route, Routes } from 'react-router-dom';
import NoFound from './routes/nofound';

function App() {

  const [showAboutModal, setshowAboutModal] = useState(false);

  const modalCloseButton = () => setshowAboutModal(false);

  return (
    <Box className="App">
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NoFound/>} />
      </Routes>

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

        <AccountList />
      </Box>

    </Box>
  );
}

export default App;
