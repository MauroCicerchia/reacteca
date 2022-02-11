import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";

type Props = {
    label?: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function CustomInput({ label, ...rest }: Props) {
  return (
    <InputGroup>
      {label && <InputLeftAddon w="24">{label}</InputLeftAddon>}
      <Input {...rest} />
    </InputGroup>
  );
}
