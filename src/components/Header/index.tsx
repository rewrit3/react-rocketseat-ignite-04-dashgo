import {
  useBreakpointValue,
  Flex,
  Icon,
  IconButton,
} from '@chakra-ui/react'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo }             from './Logo';
import { SearchBox }        from './SearchBox';
import { NotificationsNav } from './NotificationsNav';
import { Profile }          from './Profile';

import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      align="center"
      mx="auto"
      mt="4"
      px="6">
      { !isWideVersion && (
        <IconButton
          onClick={onOpen}
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          aria-label="Open navigation"
          mr="2"
          fontSize="24">
        </IconButton>
      )}

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        align="center"
        ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}