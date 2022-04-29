import {
  SimpleGrid,
  Flex,
  Box,
  HStack,
  VStack,
  Heading,
  Button,
  Divider
} from '@chakra-ui/react'


import { Header }   from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'
import { Input }    from '../../components/Form/Input'

export default function UserCreate() {
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
          <Heading
            size="md"
            fontWeight="normal">
              Criar usuário
          </Heading>

          <Divider
            my="6"
            borderColor="gray.700"
          />

          <VStack spacing="8">
            <SimpleGrid
              minChildWidth="240px"
              spacing="8"
              w="100%">
              <Input
                name="name"
                label="Nome completo"
              />

              <Input
                type="email"
                name="email"
                label="E-mail"
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing="8"
              w="100%">
              <Input
                type="password"
                name="password"
                label="Senha"
              />

              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação de senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt="8"
            justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}