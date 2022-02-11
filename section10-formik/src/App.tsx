import React from "react";
import { useFormik, Formik, Field, ErrorMessage } from "formik";
import "./App.css";

type User = {
  name?: string;
  surname?: string;
  email?: string;
}

function App() {
  const formik = useFormik<User>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
    },
    validate: (values) => {
      const errors: User = {};

      if (!values.name) {
        errors.name = "Required";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // return (
  //   <Formik
  //     initialValues={{ name: "" }}
  //     validate={(values) => {
  //       const errors: User = {};

  //       if (!values.name) {
  //         errors.name = "Required";
  //       }

  //       return errors;
  //     }}
  //     onSubmit={() => {}}
  //   >
  //     <div>
  //       <Field name="name" placeholder="Nombre" type="text"></Field>
  //       <ErrorMessage name="name"></ErrorMessage>
  //     </div>
  //   </Formik>
  // );

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.errors.name && formik.touched.name
        ? (
          <div>{formik.errors.name}</div>
          )
        : null }
      <br />
      <label>Surname</label>
      <input
        type="text"
        {...formik.getFieldProps("surname")}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        {...formik.getFieldProps("email")}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
