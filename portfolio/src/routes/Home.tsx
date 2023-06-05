import { Box, useDisclosure, Modal } from "@chakra-ui/react";
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

          <p className="content-sitename">r-yuki works Portfolio</p>

          <div className="box01">
            <a
              className="wrap-work"
              href="/work">
              <p>WORK</p>
            </a>
            <div
              className="wrap-about"
              onClick={onOpen}>
              <p>ABOUT</p>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            {/* <ModalOverlay /> */}
            <div className="modal-overlay"></div>
            <div 
              className="modal-content">
              <ModalAbout />
              <button 
                color={mainColor}
                onClick={onClose}>Close
              </button>
            </div>
          </Modal>
          <AccountList />
          
        </Box>

      </Box>
    </>
  )
}

export default Home;