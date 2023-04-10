import { Container, ContainerProps, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as React from 'react';
import { FC } from "react";

type CustomContainerProps = ContainerProps;

const NotFound: FC<CustomContainerProps> = () => {
  return (
    <>
      <Container>
        <Heading>Not Found</Heading>
        <Text>ページが見つかりませんでした。</Text>
        <Link to="/">トップへ戻る</Link>
      </Container>
    </>
  );
}

export default NotFound;