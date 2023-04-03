import { Box, Link, Flex, Text, useDisclosure, Modal, ModalOverlay, ModalContent, Button } from "@chakra-ui/react";
import { React } from 'react';
import AccountList from "../components/accountList";
import ModalAbout from "../modal/modal_about";
import { createBreakpoints } from '@chakra-ui/theme-tools';

function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const breakpoints = createBreakpoints({
    sm: "30em", // 480px (16pxの場合。以下同)
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    '2xl': '96em',
  })

  return (
    <>
      <Box className="App">

        <Box alignItems='center' className="content" position='relative' height='100vh' bgColor='#236e9d' overflow='hidden' display='flex'>

          <Text color='#fff' className="content-sitename" fontSize='14px' textAlign='center' fontWeight='bold' display='block' transform={['translateX(-50%)', 'translateY(-50%)']} position='absolute' letterSpacing='0.1em' left={['50%', '15px', '30px']} top={['20px', '50%']} textTransform='uppercase' w='100%'>R.YUKI WORKS Portfolio</Text>

          <Flex alignItems='center' display='flex' justifyContent='center' h={['70vh', '80vh', 'unset']} flexWrap={['wrap', 'wrap', 'unset']}  margin='0 auto' w={['100%', '95%', '100%', '100%', '80%']}>
            <Link backgroundColor='#fff' className="wrap-work" overflow='hidden' h={['35vh', '40vh', '70vh', '70vh']} left={['0px', '0px', '110px', '200px']} position='relative' w={['85%','90%','100%','48%']} _hover={{"backgroundColor": "#236e9d", "border": "1px solid #fff"}} href="/work">
              <Text fontSize={['60px', '80px', '100px', '120px']} fontWeight='bold' position='absolute' left={['-30px', '-48px']} top={['25px', '40px']}>WORK</Text>
            </Link>
            <Box cursor='pointer' className="wrap-about" overflow='hidden' h={['35vh', '40vh', '70vh', '70vh']} right={['0px', '0px', '110px', '200px']} position='relative' w={['85%','90%','100%','48%']} onClick={onOpen}>
              <Text fontSize={['60px', '80px', '100px', '120px']} fontWeight='bold' position='absolute' right={['30px', '40px']} bottom={['-30px', '-48px']}>ABOUT</Text>
            </Box>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius="20px" className="modal-content" height='auto' w='70%' maxWidth="70%" margin="0 auto" top="50%">
              <ModalAbout />
              <Button color="#236e9d" position="absolute" right="30px" top="20px" backgroundColor="transparent" zIndex="100" _hover={{ backgroundColor: "transparent", color: "#124e73" }} onClick={onClose}>Close</Button>
            </ModalContent>
          </Modal>
          <AccountList />
          
        </Box>

      </Box>
    </>
  )
}

export default Home;