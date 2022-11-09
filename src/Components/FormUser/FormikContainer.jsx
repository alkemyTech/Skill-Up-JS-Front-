import React from "react";
// firstName, lastName, email, avatar, password;
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Form/FormikControl";

export default function FormikContainer() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatar: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required(" Required"),
    lastName: Yup.string().required(" Required"),
    email: Yup.string().email().required(" Required"),
    password: Yup.string().required(" Required"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="text"
            label="First Name "
            name="firstName"
          />
          <FormikControl
            control="input"
            type="text"
            label="Last Name "
            name="lastName"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email "
            name="email"
          />
          <FormikControl
            control="input"
            type="password"
            label="Password "
            name="password"
          />
          <FormikControl
            control="input"
            type="url"
            label="Avatar "
            name="avatar"
          />

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
          <button type="reset">Reset</button>
        </Form>
      )}
    </Formik>
  );
}
