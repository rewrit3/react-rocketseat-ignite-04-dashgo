import { Flex }     from '@chakra-ui/react';

import { Header }   from '../components/Header';
import { Siderbar } from '../components/Sidebar';

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        maxW={1480}
        mx="auto"
        my="6"
        px="6"
      >
        <Siderbar />
      </Flex>
    </Flex>
  );
}