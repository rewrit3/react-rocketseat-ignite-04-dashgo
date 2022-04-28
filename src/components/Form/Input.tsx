import { FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps {
  name: string;
  label?: string;
}

export function Input({ name, label }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <Input
        name={name}
        id={name}
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
  );
}