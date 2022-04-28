import { Flex, Input, Text, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      align="center"
      mx="auto"
      mt="4"
      px="6"
    >
      <Text
        w="64"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <Text
          as="span"
          ml="1"
          color="pink.500"
        >
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        alignSelf="center"
        position="relative"
        maxW={400}
        ml="6"
        py="4"
        px="8"
        borderRadius="full"
        color="gray.200"
        bg="gray.800"
      >
        <Input
          variant="unstyled"
          mr="4"
          px="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
          color="gray.50"
        />

        <Icon
          as={RiSearchLine}
          fontSize="20"
        />
      </Flex>
    </Flex>
  );
}