import classes from "./OtpScreen.module.scss";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/Schemas";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { Link, useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const OtpScreen = () => {
  const navigate =useNavigate();
  const dispatch =useDispatch();
  const otpFlag = useSelector((state:any) => state.project.otpFlag);
  const initialValues = {
    email: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("values", values);
        action.resetForm();
      },
    });
  const [otp, setOtp] = useState("");

  const handleOtp = (newValue: any) => {
    setOtp(newValue);
  };
  const handleVerify = () => {
    
    
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalContainer}>
            <div className={classes.modalLeft}>
              <h1 className={classes.modalTitle}>OTP Verification</h1>
              <p className={classes.modalDesc}>
                Enter the verification code sent to your email{" "}
              </p>
              <form onSubmit={handleSubmit}>
                <div className={classes.inputBlock}>
                  <MuiOtpInput length={6} value={otp} onChange={handleOtp} />
                </div>
                {/* <Link to={"/changePassword"} style={{ textDecoration: "none" }}> */}
                  <div className={classes.modalButtons}>
                    <Button
                      type="submit"
                      size="lg"
                      style={{ padding: "14px 50px" }}
                      onClick={handleVerify}
                    >
                     Verify 
                    </Button>
                 
                  </div>
                {/* </Link> */}
              </form>
              <p className={classes.signUp}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpScreen;
