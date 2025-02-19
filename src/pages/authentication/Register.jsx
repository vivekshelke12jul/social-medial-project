import { TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {firstName: "", lastName: "", email: "", password: "", gender: ""};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
})

const Register = () => {

  const [gender, setGender] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.gender = gender;
    console.log(values);
    dispatch(registerUserAction({data: values}));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
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
              name="firstName"
              type="text"
              placeholder="First Name"
              variant="outlined"
              fullWidth
              />
            <ErrorMessage
              name="firstName"
              component={"div"}
              className="text-red-500"
              />
          </div>
          <div>
            <Field
              as={TextField}
              name="lastName"
              type="text"
              placeholder="Last Name"
              variant="outlined"
              fullWidth
              />
            <ErrorMessage
              name="lastName"
              component={"div"}
              className="text-red-500"
              />
          </div>      

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

          <div>
          <RadioGroup
            row
            aria-labelledby="gender"
            name="gender"
            onChange={handleGenderChange}
            >
            <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
            <FormControlLabel value="MALE" control={<Radio />} label="Male" />
            
          </RadioGroup>
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
      <p>Already have an account?</p>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
    </>
  );
};

export default Register;
