import { Box, Container, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import '../App.css';

function Work() {
  return (
    <>
      <Container paddingTop="4rem" position="relative">
        <Box>
          <Heading fontSize="4.5rem" textAlign="center">WORKS</Heading>
          <Text textAlign="center">制作実績</Text>

          <Heading textAlign="center">Web System</Heading>

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
        <Link href="/" position="absolute" left="0">Back to top</Link>
      </Container>
    </>
  )
}

export default Work;