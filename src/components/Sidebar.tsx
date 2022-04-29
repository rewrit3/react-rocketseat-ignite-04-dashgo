import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

export function Siderbar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack
        align="flex-start"
        spacing="12"
      >
        <Box>
          <Text
            fontSize="small"
            fontWeight="bold"
            color="gray.400"
          >
            GERAL
          </Text>

        </Box>
      </Stack>
    </Box>
  );
}
