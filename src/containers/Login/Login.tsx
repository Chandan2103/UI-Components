import signUp from "../../assets/Images/signup.png";
import classes from "./Login.module.scss";
import { useFormik } from "formik";
import { signUpSchema, signinSchema } from "../../Schemas/Schemas";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { Link, useNavigate } from "react-router-dom";


const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signinSchema,
      onSubmit: (values, action) => {
        console.log("values", values);
        action.resetForm();
        // const requestBody = {
        //   username: values.email,
        //   password: values.password,
        // };
        
      },
    });
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalContainer}>
            <div className={classes.modalLeft}>
              <h1 className={classes.modalTitle}>Welcome Back!</h1>
              <p className={classes.modalDesc}></p>
              <div className={classes.loginData}>
                <form onSubmit={handleSubmit}>
                  <div className={classes.inputBlock}>
                    <Input
                      name="email"
                      id="email"
                      placeholder="username or email"
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
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className={classes.formError}>{errors.password}</p>
                    ) : null}
                  </div>
                  <div className={classes.modalButtons}>
                    <Button
                      type="submit"
                      size="lg"
                      style={{ padding: "14px 50px" }}
                      
                    >
                      Login
                    </Button>
                    <a href="#" className={classes.link}>
                      <Link
                        to={"/forgotPassword"}
                        style={{ textDecoration: "none" }}
                      >
                        Forgot Password?
                      </Link>
                    </a>
                  </div>
                </form>
                <p className={classes.signUp}>
                  Don't have an account?{" "}
                  <a href="#" className={classes.link}>
                    <Link to={"/register"} style={{ textDecoration: "none" }}>
                      Sign Up now
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

export default Login;
