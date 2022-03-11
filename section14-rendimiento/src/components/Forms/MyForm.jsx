import { memo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input.jsx";

const MyForm = ({ onSubmit }) => {
  console.log("renderizando my form");

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Obligatorio"),
        lastname: Yup.string().required("Obligatorio"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input label="Nombre" name="name" />
        <Input label="Apellido" name="lastname" />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
};

export default memo(MyForm);
