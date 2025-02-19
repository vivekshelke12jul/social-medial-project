import { TextField, Button } from "@mui/material";
import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
})

const Login = () => {
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(loginUserAction({data: values}));
  };

  return (
    <>
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form className="space-y-5">
        <div className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="email"
              type="email"
              placeholder="Email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="password"
              type="password"
              placeholder="Password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-red-500"
            />
          </div>
        </div>
        <Button
          sx={{ padding: "0.8rem 0rem" }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </Form>
    </Formik>
    <div className="flex justify-center items-center gap-2 pt-5">
      <p>dont have an account?</p>
      <Button onClick={() => navigate("/register")}>Register</Button>
    </div>
    </>
  );
};

export default Login;
