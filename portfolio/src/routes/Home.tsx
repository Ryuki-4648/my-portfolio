import { useDisclosure, Modal } from '@chakra-ui/react';
import React from 'react';
import ModalAbout from '../components/ModalAbout';
import AccountList from '../components/accountList';

function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div className='App'>
        <div className='p-home'>

          <p className='p-home__sitename'>r-yuki works Portfolio</p>

          <div className='p-home__wrap'>
            <a className='p-home__work' href="/work">
              <p className='p-home__workText'>WORK</p>
            </a>
            <div className='p-home__about' onClick={onOpen}>
              <p className='p-home__aboutText'>ABOUT</p>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            <div className='p-about__modalOverlay' onClick={onClose}></div>
            <div className='p-about__modalContent'>
              <ModalAbout />
              <button className='p-about__modalButton' onClick={onClose}>
                <span className='p-about__modalButtonText'>×</span>
              </button>
            </div>
          </Modal>
          <AccountList />
          
        </div>

      </div>
    </>
  )
}

export default Home;