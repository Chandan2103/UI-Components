import signUp from "../../assets/Images/signup.png";
import classes from "./ChangePassword.module.scss";
import { useFormik } from "formik";
import { confirmpwSchema, signUpSchema } from "../../Schemas/Schemas";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { Link, useNavigate } from "react-router-dom";
import { changePasswordApi } from "../../Utils/Apihelper";

const ChangePassword = () => {
  const navigate =useNavigate();
  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: confirmpwSchema,
      onSubmit: (values, action) => {
        console.log("values", values);
        action.resetForm();

        const requestBody = {
          password: values.password,      
        };
        const Token = sessionStorage.getItem("ChangePwToken");
        const config = {
          headers: { "Authorization": `Bearer ${Token}` },
        };
    
        changePasswordApi(requestBody, config)
          .then((res) => {
            console.log(res.data);
           navigate("/")
           
          })
          .catch((err) => {
            console.log(err.data);
          });
      },
    });
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalContainer}>
            <div className={classes.modalLeft}>
              <h1 className={classes.modalTitle}>Change Password</h1>
              <p className={classes.modalDesc}></p>
              <div className={classes.loginData}>
                <form onSubmit={handleSubmit}>
                  <div className={classes.inputBlock}>
                    <Input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      size="lg"
                      placeholder="Enter New Password"
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
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      size="lg"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.confirm_password && touched.confirm_password ? (
                      <p className={classes.formError}>
                        {errors.confirm_password}
                      </p>
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
                          Back to Login?
                        </Link>
                      </a>
                    </div>
                
                </form>
                <p className={classes.signUp}>
                  Don't have an account?{" "}
                  <a href="#" className={classes.link}>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
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

export default ChangePassword;
