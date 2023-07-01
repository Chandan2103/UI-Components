import React from "react";
import signUp from "../../assets/Images/signup.png";
import classes from "./Register.module.scss";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/Schemas";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Utils/constants";
import { userRegisterApi } from "../../Utils/Apihelper";

const initialValues = {
  name: "",
  email: "",
  password: "",
  number: "",
  companyname: "",
};

const Register = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("heyyyyyyyy", values);
        action.resetForm();
        
      },
    });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalContainer}>
            <div className={classes.modalLeft}>
              <h1 className={classes.modalTitle}>Welcome!</h1>
              <p className={classes.modalDesc}></p>
              <div className={classes.loginData}>
                <form onSubmit={handleSubmit}>
                  <div className={classes.inputBlock}>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Enter UserName"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="lg"
                    />
                    {errors.name && touched.name ? (
                      <p className={classes.formError}>{errors.name}</p>
                    ) : null}
                  </div>
                  <div className={classes.inputBlock}>
                    <Input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="lg"
                    />
                    {errors.email && touched.email ? (
                      <p className={classes.formError}>{errors.email}</p>
                    ) : null}
                  </div>
                  <div className={classes.inputBlock}>
                    <Input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      size="lg"
                      placeholder="Create Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.password && touched.password ? (
                      <p className={classes.formError}>{errors.password}</p>
                    ) : null}
                  </div>
                  <div className={classes.inputBlock}>
                    <Input
                      type="number"
                      autoComplete="off"
                      name="number"
                      id="number"
                      size="lg"
                      placeholder="Enter Phone Number"
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.number && touched.number ? (
                      <p className={classes.formError}>{errors.number}</p>
                    ) : null}
                  </div>
                  <div className={classes.inputBlock}>
                    <Input
                      type="companyname"
                      autoComplete="off"
                      name="companyname"
                      id="companyname"
                      size="lg"
                      placeholder="Enter Company Name"
                      value={values.companyname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.companyname && touched.companyname ? (
                      <p className={classes.formError}>{errors.companyname}</p>
                    ) : null}
                  </div>
                  {/* <Link to={"/RegisterOtp"} style={{ textDecoration: "none" }}> */}
                  <div className={classes.modalButtons}>
                    <Button
                      type="submit"
                      size="lg"
                      style={{ padding: "14px 50px" }}
                    >
                      Register
                    </Button>
                    <a href="#" className={classes.link}></a>
                  </div>
                  {/* </Link> */}
                </form>
                <p className={classes.signUp}>
                  Already have an account?{" "}
                  <a href="#" className={classes.link}>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      Sign In now
                    </Link>
                  </a>
                </p>
              </div>
            </div>
            <div className={classes.modalRight}>
              <img src={signUp} alt="" className={classes.signupImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
