import { Box, Container, Flex, Heading, Img, Link, ListItem, Modal, ModalContent, ModalOverlay, Table, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import '../App.css';
import jsonWorkListData from '../list/workDesignList.json';

function Work() {

  // const { isOpen, onOpen, onClose } = useDisclosure()

  /* 
    クリックされた要素のデータをStateに保存 
    モーダルが開かれたときに表示する内容を動的に変更
  */
  const [selectedWork, setSelectedWork] = useState(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Container 
        padding="4rem 0 0" 
        position="relative" 
        maxW="100%"
        margin="0"
        marginInlineEnd="0"
        paddingInlineEnd="0"
        >
        <Box maxW={{base:'90%', md:'1024px'}} margin="0 auto">
          <Heading 
            color="#236e9d" 
            fontSize="5.2rem" 
            textAlign="center">WORKS
          </Heading>
          <Text 
            textAlign="center" 
            margin="0 auto 50px">制作実績
          </Text>

          <Heading
            textAlign="center"
            margin="0 auto 20px">Web System
          </Heading>
          <Flex 
            justifyContent="space-between" 
            flexWrap="wrap">
          {jsonWorkListData.map((workListData) => (
            <Box 
              key={workListData.id} 
              cursor="pointer"
              margin="0 0 40px" 
              w={{base: '100%', md:'30%'}} 
              onClick={() => {setSelectedWork(workListData); setIsOpenModal(true)}}>
              <Img 
                margin="0 auto 10px" 
                src={workListData.thumbnail} 
                alt={workListData.name} />
              <Text>{workListData.name}</Text>
            </Box>
          ))}
          {selectedWork && (
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <ModalOverlay />
            <ModalContent>
              <Table>
              <tbody>
                <tr>
                  <th>サイト名</th>
                  <td>{selectedWork.name}</td>
                </tr>
                <tr>
                  <th>URL</th>
                  <td><Link href={selectedWork.url}>{selectedWork.url}</Link></td>
                </tr>
              </tbody>
            </Table>
            </ModalContent>
          </Modal>
          )}
          </Flex>

          <Heading textAlign="center">Web App</Heading>

          <Heading textAlign="center">Web Site</Heading>

          <Heading textAlign="center">Design</Heading>
          <Text>個人制作</Text>
          <Link href='https://www.pinterest.jp/yuki_017/portfolio/' target="_blank" rel="noopener noreferrer">Pinterestを見る</Link>

          <UnorderedList>
            <ListItem>

            </ListItem>
          </UnorderedList>
        </Box>
        <Link
          color="#236e9d"
          fontSize="2.8rem"
          fontWeight="bold"
          href="/" 
          position="absolute" 
          left="-140px" 
          textTransform="uppercase" 
          top="130px" 
          transform="rotate(90deg)">Back to top
        </Link>
      </Container>
    </>
  )
}

export default Work;