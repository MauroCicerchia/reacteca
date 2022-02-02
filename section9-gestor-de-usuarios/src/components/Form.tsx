import _ from "lodash";
import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { useForm } from "../hooks";
import { IUser } from "../types";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";

type Props = {
    onSubmit: (user: IUser) => void;
};

export default function Form({ onSubmit }: Props) {
  const [form, handleChange, reset] = useForm<IUser>({ name: "", surname: "", email: "" });

  const submit = () => {
    if (!form.name || !form.surname || !form.email) return;
    onSubmit(form);
    reset();
  };

  const canSubmit = (): boolean => {
    return !_.isEmpty(form.name) && !_.isEmpty(form.surname) && !_.isEmpty(form.email);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && canSubmit()) {
      submit();
    }
  };

  return (
    <Card>
      <Text align="center" fontSize="2xl" fontWeight="bold">
        Inscribirse a Reacteca
      </Text>
      <Stack>
        <Input
          label="Nombre"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
        <Input
          label="Apellido"
          name="surname"
          placeholder="Apellido"
          value={form.surname}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
        <Input
          label="Correo"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
      </Stack>
      <Button disabled={!canSubmit()} onClick={submit}>Enviar</Button>
    </Card>
  );
}
