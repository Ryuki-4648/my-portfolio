import { Box, Link, Flex, Text, useDisclosure, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { React } from 'react';
import AccountList from "../components/accountList";
import ModalAbout from "../modal/modal_about";

function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box className="App">

        <Box alignItems='center' className="content" position='relative' height='100vh' bgColor='#236e9d' overflow='hidden' display='flex'>

          <Text color='#fff' className="content-sitename" fontSize='14px' fontWeight='bold' display='block' transform='translateY(-50%)' position='absolute' letterSpacing='0.1em' left='30px' top='50%' textTransform='uppercase'>R.YUKI WORKS Portfolio</Text>

          <Flex alignItems='center' className="wrap" display='flex' justifyContent='center' margin='0 auto' width='75%'>
            <Link className="wrap-work" overflow='hidden' h='70vh' position='relative' w='48%' href="/work">
              <Text fontSize='120px' fontWeight='bold' position='absolute' left='-48px' top='40px'>WORK</Text>
            </Link>
            <Box cursor='pointer' className="wrap-about" overflow='hidden' h='70vh' right='200px' position='relative' w='48%' onClick={onOpen}>
              <Text fontSize='120px' fontWeight='bold' position='absolute' right='-48px' bottom='40px'>ABOUT</Text>
            </Box>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className="modal-content" height='auto' width='70%' maxWidth="70%" margin="0 auto" top="50%">
              <ModalAbout />
            </ModalContent>
          </Modal>

          <AccountList />
          
        </Box>

      </Box>
    </>
  )
}

export default Home;