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
              style={{ overflow: 'hidden', position: 'relative' }}
              className="wrap-work"
              href="/work">
              <p 
                style={{ 
                  fontWeight: 'bold', 
                  position: 'absolute',
                  writingMode: 'vertical-rl',
                }}>
                WORK
              </p>
            </a>
            <div
              className="wrap-about"
              style={{
                border: '1px solid #fff',
                clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                transition: ' all .3s;'
              }}
              onClick={onOpen}>
              <p 
                style={{ 
                fontWeight: 'bold',
                position: 'absolute'
              }}>ABOUT</p>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            {/* <ModalOverlay /> */}
            <div className="modal-overlay"
              style={{
                position: 'fixed',
                left: '0',
                top: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
              }}></div>
            <div 
              className="modal-content"
              style={{
                borderRadius: '20px',
                maxWidth: 'unset',
                margin: '0 auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                zIndex: 100,
              }}>
              <ModalAbout />
              <button
                style={{
                  color: mainColor,
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'all .3s',
                  position: 'absolute',
                }}
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