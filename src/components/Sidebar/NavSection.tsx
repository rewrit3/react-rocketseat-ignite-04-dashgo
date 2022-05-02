import {
  Stack,
  Box,
  Text
} from '@chakra-ui/react'

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text
        fontSize="small"
        fontWeight="bold"
        color="gray.400">
        {title}
      </Text>

      <Stack
        align="stretch"
        spacing="4"
        mt="8">
        {children}
      </Stack>
    </Box>
  );
}