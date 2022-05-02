import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box
          mr="4"
          textAlign="right">
          <Text>Adolfo Cruz</Text>

          <Text
            fontSize="small"
            color="gray.300">
            adolfo@rewrite.com.br
          </Text>
        </Box>
      )}

      <Avatar
        src="https://github.com/adolfobcruz.png"
        name="Adolfo Cruz"
        size="md"
      />
    </Flex>
  );
}