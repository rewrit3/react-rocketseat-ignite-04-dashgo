import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button }
from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        p="8"
        borderRadius={8}
        bgColor="gray.800"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>

            <Input
              name="email"
              id="email"
              type="email"
              size="lg"
              variant="filled"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input
              name="password"
              id="password"
              type="password"
              size="lg"
              variant="filled"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>
        </Stack>

        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
