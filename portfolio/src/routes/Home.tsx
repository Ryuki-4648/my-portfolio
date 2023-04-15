import { Box, Link, Flex, Text, useDisclosure, Modal, ModalOverlay, ModalContent, Button } from "@chakra-ui/react";
import React from 'react';
import ModalAbout from "../modal/modal_about";
import AccountList from "../components/accountList";

function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  // Color
  const mainColor = "#236e9d";

  return (
    <>
      <Box className="App">

        <Box 
          alignItems='center'
          className="content" 
          position='relative' 
          height='100vh' 
          bgColor={mainColor} 
          overflow='hidden' 
          display='flex'>

          <Text color='#fff' 
            className="content-sitename" 
            fontSize='14px' 
            textAlign='center' 
            fontWeight='bold' 
            display='block' 
            transform={{base: 'translateX(-50%)', md: 'translateY(-50%)'}} 
            position='absolute' 
            letterSpacing='0.1em' left={{base: '50%', md: '15px', lg: '30px'}} 
            top={{base: '20px', md: '50%'}} 
            textTransform='uppercase' 
            w='100%'>R.YUKI WORKS Portfolio
          </Text>

          <Flex 
            alignItems='center' 
            display='flex' 
            justifyContent='center' 
            h={{base: '80vh', lg: 'unset'}} 
            flexWrap={['wrap', 'wrap', 'unset']} 
            margin='0 auto' 
            w={{base: '100%', md :'80%'}}>
            <Link 
              backgroundColor='#fff' 
              className="wrap-work" 
              overflow='hidden' 
              h={['35vh', '40vh', '70vh', '70vh']} 
              left={['0px', '0px', '110px', '200px']} 
              position='relative' 
              w={['85%','90%','100%','48%']} 
              _hover={{"backgroundColor": "#236e9d", "border": "1px solid #fff"}} 
              href="/work">
              <Text 
                fontSize={['58px', '80px', '100px', '120px']} 
                fontWeight='bold' 
                position='absolute' 
                left={{base: '-30px', md: '-48px'}} 
                top={{ base: '15px', md: '40px'}}>WORK
              </Text>
            </Link>
            <Box 
              cursor='pointer' 
              className="wrap-about" 
              overflow='hidden' 
              h={['35vh', '40vh', '70vh', '70vh']} 
              right={['0px', '0px', '110px', '200px']} 
              position='relative' 
              w={['85%','90%','100%','48%']} 
              _hover={{"backgroundColor": "#fff", "border": "1px solid #236e9d"}} 
              onClick={onOpen}>
              <Text 
                fontSize={['58px', '80px', '100px', '120px']} 
                fontWeight='bold' 
                position='absolute' 
                right={{base: '20px', md: '40px'}} 
                bottom={{ base: '-26px', sm: '-35px', md: '-48px'}}>ABOUT
              </Text>
            </Box>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent 
              borderRadius="20px" 
              className="modal-content" 
              h={{base: '85vh', md: 'auto'}} 
              w={{base: '90%', md:'80%', lg: '70%'}} 
              maxWidth="unset" 
              margin="0 auto" 
              top="50%">
              <ModalAbout />
              <Button 
                color={mainColor} 
                position="absolute" 
                right={{base: '20px', md: '30px'}} 
                top={{base: '10px', md: '20px'}} 
                backgroundColor="transparent" 
                zIndex="100" 
                _hover={{ backgroundColor: "transparent", color: {mainColor} }} 
                onClick={onClose}>Close
              </Button>
            </ModalContent>
          </Modal>
          <AccountList />
          
        </Box>

      </Box>
    </>
  )
}

export default Home;