import classes from "./RegisterOtp.module.scss";
import { useFormik } from "formik";
import { signUpSchema } from "../../../Schemas/Schemas";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";
import { registerOtpApi } from "../../../Utils/Apihelper";

const RegisterOtp = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [successModal, setSuccessModal] = useState(false);

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

  const handleEmailOtp = (newValue: any) => {
    setEmailOtp(newValue);
  };
  
  const handleMobileOtp = (newValue: any) => {
    setMobileOtp(newValue);
  };
  const handleVerify = () => {
    const requestBody = {
      contactOTP: mobileOtp,
      emailOTP: emailOtp,
    };
    const Token = sessionStorage.getItem("Token");
    const config = {
      headers: { "Authorization": `Bearer ${Token}` },
    };
    registerOtpApi(requestBody, config)
      .then((res) => {
        console.log(res.data);
        setSuccessModal(true);
      })
      .catch((err) => {
        console.log(err.data);
      });
    
  };
  return (
    <>
      {successModal ? (
        <SuccessModal
          heading="Successfully Registered"
          subHeading={"You can now login to use your account."}
        />
      ) : (
        <div className={classes.container}>
          <div className={classes.modal}>
            <div className={classes.modalContainer}>
              <div className={classes.modalLeft}>
                <h1 className={classes.modalTitle}>OTP Verification</h1>

                <form onSubmit={handleSubmit}>
                  <p className={classes.modalDesc}>
                    Enter the verification code sent to your{" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      &nbsp;Phone Number
                    </span>{" "}
                  </p>
                  <div className={classes.inputBlock}>
                    <MuiOtpInput length={6} value={mobileOtp} onChange={handleMobileOtp} />
                  </div>
                  <p className={classes.modalDesc}>
                    Enter the verification code sent to your{" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      &nbsp;Email
                    </span>{" "}
                  </p>
                  <div className={classes.inputBlock}>
                    <MuiOtpInput length={6} value={emailOtp} onChange={handleEmailOtp} />
                  </div>

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
                </form>
                <p className={classes.signUp}></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterOtp;
