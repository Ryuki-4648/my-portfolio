import { Box, Button, Container, Flex, Heading, Img, Link, ListItem, Modal, ModalContent, ModalOverlay, Table, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import '../App.css';
import jsonWorkListData from '../list/workDesignList.json';

function Work() {

    // Color
    const mainColor = "#236e9d";

  /* 
    クリックされた要素のデータをStateに保存 
    モーダルが開かれたときに表示する内容を動的に変更
  */
  const [selectedWork, setSelectedWork] = useState(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Container
        backgroundColor={mainColor}
        padding="80px 0 0" 
        position="relative" 
        maxW="100%"
        margin="0"
        marginInlineEnd="0"
        paddingInlineEnd="0"
        >
        <Box
          backgroundColor="#fff"
          borderRadius="30px"
          maxW={{base:'90%', xl: '1024px', '2xl': '1400px'}} 
          margin="0 auto"
          padding="60px 40px">
          <Heading 
            color="#236e9d" 
            fontSize="5.2rem" 
            textAlign="center">WORKS
          </Heading>
          <Text
            fontWeight="bold"
            textAlign="center" 
            margin="0 auto 20px">制作実績
          </Text>
          <Text
            fontSize="15px"
            textAlign="center"
            margin="0 auto 60px">クリックするとモーダルウィンドウが開き、サービスの詳細が表示されます
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
              w={{base: '100%', md: '48%' , xl:'30%'}} 
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
            <ModalContent padding="40px" maxWidth={{base: '80%', md: '70%'}}>
              <Img src={selectedWork.thumbnail} h="250px" margin="0 auto 20px" />
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
                  <tr>
                    <th>制作期間</th>
                    <td>{selectedWork.period}</td>
                  </tr>
                  <tr>
                    <th>作成箇所</th>
                    <td>{selectedWork.page}</td>
                  </tr>
                  <tr>
                    <th>使用ツール・言語</th>
                    <td>{selectedWork.tool}</td>
                  </tr>
                  <tr>
                    <th>サイトの説明</th>
                    <td>{selectedWork.explain}</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
              <Button
                color={mainColor}
                position="absolute" 
                right={{base: '20px', md: '30px'}} 
                top={{base: '10px', md: '20px'}} 
                backgroundColor="transparent" 
                zIndex="100"
                _hover={{backgroundColor: 'transparent'}}
                onClick={() => setIsOpenModal(false)}>Close
              </Button>
            </ModalContent>
          </Modal>
          )}
          </Flex>

          <Heading textAlign="center">Web App</Heading>

          <Heading textAlign="center">Web Site</Heading>

          <Heading textAlign="center">Design</Heading>
          <Link
            color={mainColor}
            display="block"
            fontWeight="bold"
            textAlign="center"
            href='https://www.pinterest.jp/yuki_017/portfolio/'
            target="_blank"
            margin="0 auto"
            rel="noopener noreferrer">Pinterestを見る
          </Link>

          <UnorderedList>
            <ListItem>

            </ListItem>
          </UnorderedList>
        </Box>
        <Link
          color="#fff"
          fontSize="2.8rem"
          fontWeight="bold"
          href="/"
          left="-140px" 
          textTransform="uppercase" 
          top="140px"
          position="fixed"
          transform="rotate(90deg)">Back to top
        </Link>
      </Container>
    </>
  )
}

export default Work;