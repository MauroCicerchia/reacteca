import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export default function CustomButton({ children, ...props }: React.PropsWithChildren<ButtonProps>) {
  return (
    <Button
      colorScheme="purple"
      {...props}
    >
      {children}
    </Button>
  );
}
