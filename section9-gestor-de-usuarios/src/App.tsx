import React, { useState } from "react";
import { Box, Center, Stack, Text } from "@chakra-ui/react";
import UserList from "./components/UserList";
import Card from "./components/Card";
import { IUser } from "./types";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState<IUser[]>([
    {
      name: "Leonardo",
      surname: "Cositorto",
      email: "leo.ceo.zoe@gmail.com",
    },
  ]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <Box bgColor="#E8F3F3" h="100vh" w="100vw">
      <Center h="100vh">
        <Stack gap={4} w="container.sm">
          <Form onSubmit={addUser} />
          <Card>
            <Text
              align="center"
              bgColor="sadas"
              color="asdas"
              fontSize="2xl"
              fontWeight="bold"
            >
              Ya se registraron
            </Text>
            <Stack>
              <UserList users={users} />
            </Stack>
          </Card>
        </Stack>
      </Center>
    </Box>
  );
}

export default App;
