import { Flex, Stack, Button } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

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
          <Input
            name="email"
            type="email"
            label="E-mail"
          />

          <Input
            name="password"
            type="password"
            label="Senha"
          />
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
