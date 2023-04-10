import { Box, Icon, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaPinterest, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const AccountList: React.FC = () => {
  return (
    <Box>
      <UnorderedList
        className="content-sns"
        margin="0"
        display={{ base: 'flex', md: 'unset' }}
        position="absolute"
        left={{ base: '50%', md: 'unset' }}
        bottom={{ base: '20px', md: 'unset' }}
        right={{ base: 'unset', md: '15px', lg: '30px' }}
        top={{ base: 'unset', md: '50%' }}
        transform={{ base: 'translateX(-50%)', md: 'translateY(-50%)' }}
      >
        <ListItem>
          <Link
            
            href="https://twitter.com/Ryuki_4648"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaTwitter} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            
            href="https://github.com/Ryuki-4648"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaGithub} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            
            href="https://www.pinterest.jp/yuki_017/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaPinterest} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={MdMail} />
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default AccountList;
