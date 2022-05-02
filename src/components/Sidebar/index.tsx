import {
  Box,
  Stack
} from '@chakra-ui/react'

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

import { NavSection } from './NavSection'
import { NavLink }    from './NavLink';

export function Siderbar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8">
      <Stack
        align="flex-start"
        spacing="12">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine}>
            Usuários
          </NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>
            Formulários
          </NavLink>
          <NavLink icon={RiGitMergeLine}>
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
