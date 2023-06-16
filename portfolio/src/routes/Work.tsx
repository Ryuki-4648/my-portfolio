import { Modal, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import '../App.css';
import jsonWorkListData from '../list/workList.json';
import React from 'react';

function Work() {

  interface WorkData {
    id: number;
    thumbnail: string;
    name: string;
    label: string;
    type: string;
  }
  
    // Color
    const mainColor = "#236e9d";

    const { isOpen, onOpen, onClose } = useDisclosure();

  /* 
    クリックされた要素のデータをStateに保存 
    モーダルが開かれたときに表示する内容を動的に変更
  */
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const openModal = (workListData: WorkData) => {
    setSelectedWork(workListData);
    onOpen();
  };

  return (
    <>
      <div
      style={{
        backgroundColor: mainColor,
        padding: '120px 0',
        position: "relative",
        maxWidth: "100%",
        margin: "0",
        marginInlineEnd: "0",
        paddingInlineEnd: "0"
      }}>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "30px",
          maxWidth: '1400px', 
          margin: "0 auto",
          padding: "150px 50px 100px 50px",
          position: "relative",
        }}>
        <h1 style={{
          color: mainColor, 
          fontSize: '12rem',
          textAlign: 'center',
          fontWeight: '700',
          lineHeight: '1',
          margin: '0 auto 15px',
          position: 'absolute',
          top: '-25px',
        }}>WORKS
        </h1>
        <h2 style={{
          fontSize: '2.1rem',
          fontWeight: 'bold',
          textAlign: 'center', 
          margin: '0 auto 30px',
          letterSpacing: '0.1em'
        }}>制作実績
        </h2>
        <p style={{
          fontSize: '1.5rem',
          textAlign: 'center',
          margin: '0 auto 80px'
        }}>クリックするとモーダルが開き、詳細が表示されます</p>

        <h3 style={{
          fontSize: '2.6rem',
          textAlign: 'center',
          margin: '0 auto 30px',
          fontWeight: 'bold',
          color: '#222'
        }}>System ・ App ・ Web Site</h3>
        <ul style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          {jsonWorkListData.map((workListData) => (
          <li key={workListData.id} 
          style={{
            cursor: "pointer",
            margin: '0 0 60px',
            width: '30%',
          }}
          onClick={() => openModal(workListData)}>
            <img 
            style={{margin: '0 auto 20px'}}
            src={workListData.thumbnail} 
            alt={workListData.name} />
            <p 
            style={{
              fontSize: '1.3rem',
              borderColor: `{${workListData}.label}`,
              borderWidth: "1px",
              width: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 0 10px",
              borderRadius: "15px"}}>
                {workListData.type}
            </p>
            <p style={{
              fontSize: '1.5rem', 
              fontWeight: "bold"}}
              >{workListData.name}
            </p>
          </li>
          ))}
          {selectedWork && (
            <Modal isOpen={isOpen} onClose={onClose}>
              <div className="modal-overlay"
              style={{
                position: 'fixed',
                left: '0',
                top: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
              }}
              onClick={onClose}>
              </div>
              <div 
              style={{
                padding: "60px 40px",
                width: '60%',
                backgroundColor: "#fff",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "fixed",
                borderRadius: "30px",
                }}>
                <img src={selectedWork.thumbnail} 
                  alt={selectedWork.name}
                  style={{
                    height: "250px",
                    margin: "0 auto 40px",
                }}/>
                <table className="work-modal-table">
                  <tbody>
                    <tr>
                      <th>サイト名</th>
                      <td>{selectedWork.name}</td>
                    </tr>
                    <tr>
                      <th>URL</th>
                      <td>
                        <a href={selectedWork.url} style={{
                          color: mainColor,
                          textDecoration: "underline"
                        }}>{selectedWork.url}</a>
                      </td>
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
                    <tr>
                      <th></th>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal>
          )}
        </ul>

        <h2
          style={{
            fontSize: '2.6rem',
            textAlign: 'center',
            margin: '40px auto 30px',
            fontWeight: 'bold',
            color: '#222'
          }}>
            Design
          </h2>
          <div 
          style={{textAlign: "center"}}>
            <a
              style={{
                borderBottom: "2px solid #236e9d",
                color: mainColor,
                display: "inline-block",
                fontSize: "1.8rem",
                fontWeight: "bold",
                margin: "0 auto",
                textDecoration: "none"
              }}
              href="https://www.pinterest.jp/yuki_017/portfolio/"
              target="_blank"
              rel="noopener noreferrer">Pinterest
              <p 
              style={{ 
                color: mainColor,
                display: "inline",
                fontSize: '1.3rem',
                margin: "0 2px"
                }}>をみる
              </p>
              <FaExternalLinkAlt display="inline" fontSize="15px" />
            </a>
          </div>

      </div>

      <a 
        style={{
          color: "#fff",
          fontSize : '4.2rem',
          fontWeight: "bold",
          left: '-130px', 
          textTransform: "uppercase", 
          bottom : '160px',
          position: 'fixed',
          transform: 'rotate(90deg)'
        }} href="/">Back to top
      </a>
    </div>
      {/* <Container
        backgroundColor={mainColor}
        padding={{base: '60px 0', md: '100px 0'}} 
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
            fontSize={{base: '4.2rem', md: '6.8rem'}}
            textAlign="center">WORKS
          </Heading>
          <Text
            fontSize={{base: '1.5rem', md: '1.6rem'}}
            fontWeight="bold"
            textAlign="center" 
            margin="0 auto 20px">制作実績
          </Text>
          <Text
            fontSize={{base: '1.4rem', md: '1.5rem'}}
            textAlign="center"
            margin={{base: '0 auto 40px', md: '0 auto 80px'}}>クリックするとモーダルが開き、詳細が表示されます
          </Text>

          <Heading
            fontSize={{base: '2rem', md: '2.8rem'}}
            textAlign="center"
            margin="0 auto 30px">System / App / Site
          </Heading>

          <Flex 
            justifyContent="space-between" 
            flexWrap="wrap">
          {jsonWorkListData.map((workListData) => (
            <Box 
              key={workListData.id} 
              cursor="pointer"
              margin={{base: '0 auto 40px', md: '0 0 60px'}} 
              w={{base: '100%', md: '48%' , xl:'30%'}} 
              onClick={() => {setSelectedWork(workListData); setIsOpenModal(true)}}>
              <Img 
                margin="0 auto 10px" 
                src={workListData.thumbnail} 
                alt={workListData.name} />
              <Text
                fontSize={{base: '1.2rem', md: '1.3rem'}}
                borderColor={workListData.label}
                borderWidth="1px"
                w="120px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin="0 0 15px"
                borderRadius="15px">{workListData.type}
              </Text>
              <Text 
                fontSize={{base: '1.5rem', md: '1.6rem'}} 
                fontWeight="bold">{workListData.name}
              </Text>
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
                    <td><Link color={mainColor} textDecoration="underline" href={selectedWork.url}>{selectedWork.url}</Link></td>
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


          <Heading
            fontSize={{base: '2rem', md: '2.8rem'}}
            textAlign="center"
            margin="0 auto 20px">Design
          </Heading>
          <Box textAlign="center">
            <Link
              borderBottom="2px solid #236e9d"
              color={mainColor}
              display="inline-block"
              fontSize={{base: '1.7rem', md: '1.8rem'}}
              fontWeight="bold"
              href='https://www.pinterest.jp/yuki_017/portfolio/'
              target="_blank"
              margin="0 auto"
              rel="noopener noreferrer">Pinterest
              <Text 
                color={mainColor}
                display="inline" 
                fontSize={{base: '1.2rem', md: '1.3rem'}} 
                margin="0 2px">をみる
              </Text>
              <FaExternalLinkAlt display="inline" fontSize="15px" />
            </Link>
          </Box>
        </Box>

        <Link
          color="#fff"
          fontSize={{base: '2rem', md: '4.2rem'}}
          fontWeight="bold"
          href="/"
          left={{base: '0', md: '-130px'}} 
          textTransform="uppercase" 
          top={{base: '-12px', md: '160px'}}
          position={{base: 'absolute', md: 'fixed'}}
          transform={{base: 'unset', md: 'rotate(90deg)'}}>Back to top
        </Link>
      </Container> */}
    </>
  )
}

export default Work;