import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  number: Yup.string()
    .required("Mobile Number is Required")
    .max(10)
    .min(8)
    .matches(/^[0-9 ]*$/, "Enter Valid Name"),
  companyname: Yup.string().required("Please enter your Company Name"),
});
export const signinSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const forgotpwSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your email or phone number"),
});

export const confirmpwSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
