import { Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Container>
        <Heading>Not Found</Heading>
        <Text>ページが見つかりませんでした。</Text>
        <Link href="/">トップへ戻る</Link>
      </Container>
    </>
  );
}

export default NotFound;