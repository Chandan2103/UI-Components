import classes from "./ForgotPassword.module.scss";
import { useFormik } from "formik";
import { forgotpwSchema, signUpSchema } from "../../Schemas/Schemas";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgotpwSchema,
      onSubmit: (values, action) => {
        console.log("values", values);
        action.resetForm();
        
      },
    });
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalContainer}>
            <div className={classes.modalLeft}>
              <h1 className={classes.modalTitle}>Forgot Password?</h1>
              <p className={classes.modalDesc}>
                No Worries, We'll send you reset instructions.{" "}
              </p>
              <form onSubmit={handleSubmit} className={classes.formWrapper}>
                <div className={classes.inputBlock}>
                  <Input
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Enter Email or Phone Number"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="lg"
                  />
                  {errors.name && touched.name ? (
                    <p className={classes.formError}>{errors.name}</p>
                  ) : null}
                </div>

                <div className={classes.modalButtons}>
                  <Button
                    type="submit"
                    size="lg"
                    style={{ padding: "14px 50px" }}
                  >
                    Reset Password
                  </Button>
                  <a href="#" className={classes.link}>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      Back to Login ?{" "}
                    </Link>
                  </a>
                </div>
              </form>
              <p className={classes.signUp}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
