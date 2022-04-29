import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Checkbox,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th
} from '@chakra-ui/react'

import { Header }     from '../../components/Header';
import { Siderbar }   from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

import { RiAddLine } from 'react-icons/ri';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        maxW={1480}
        mx="auto"
        my="6"
        px="6">
        <Siderbar />

        <Box
          flex="1"
          p="8"
          borderRadius={8}
          bg="gray.800">
          <Flex
            justify="space-between"
            align="center"
            mb="8">
            <Heading
              size="lg"
              fontWeight="normal">
                Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}>
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th
                  w="8"
                  px="6"
                  color="gray.300">
                    <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Adolfo Cruz</Text>
                    <Text
                      fontSize="sm"
                      color="gray.300">
                        adolfo@rewrite.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>29 de Abril, 2022</Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Júlia Cruz</Text>
                    <Text
                      fontSize="sm"
                      color="gray.300">
                        julia@rewrite.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>29 de Abril, 2022</Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Yasmin Cruz</Text>
                    <Text
                      fontSize="sm"
                      color="gray.300">
                        yasmin@rewrite.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>29 de Abril, 2022</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}