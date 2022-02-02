import { Stack } from "@chakra-ui/react";
import React from "react";

export default function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <Stack
      bgColor="white"
      borderRadius={12}
      gap={4}
      p={8}
    >
      {children}
    </Stack>
  );
}
