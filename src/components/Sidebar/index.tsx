import {
  useBreakpointValue,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { SidebarNav }       from './SidebarNav';

export function Siderbar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left">
        <DrawerOverlay>
          <DrawerContent
            p="4"
            bg="gray.800">
            <DrawerCloseButton mt="6" />

            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      w="64"
      mr="8">
      <SidebarNav />
    </Box>
  );
}
