import React, { useState } from "react";

function useForm<T>(initialState: T): [T, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setForm(initialState);
  };

  return [form, handleChange, reset];
};

export default useForm;
