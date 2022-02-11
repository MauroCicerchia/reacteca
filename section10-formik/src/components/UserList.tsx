import React from "react";
import { OrderedList, ListItem, Text, Stack } from "@chakra-ui/react";
import { IUser } from "../types";

type Props = { users: IUser[] };

function User({ name, surname, email }: IUser) {
  return (
    <ListItem>
      <Stack direction="row">
        <Text fontWeight="bold">{name} {surname}</Text>
        <Text>{email}</Text>
      </Stack>
    </ListItem>
  );
}

export default function UserList({ users }: Props) {
  return (
    <OrderedList>
      {users.map((user) => (
        <User key={user.email} {...user} />
      ))}
    </OrderedList>
  );
}
