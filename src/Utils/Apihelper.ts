import axios from "axios";
import { BASE_URL } from "./constants";


export const userRegisterApi = (requestBody:any)=>{
  return axios.post(`${BASE_URL}/userRegister`,requestBody)
}

export const registerOtpApi = (requestBody:any,config:any)=>{
  return axios.post(`${BASE_URL}/verifyOTP`,requestBody,config)
}

export const loginApi = (requestBody:any)=>{
  return axios.post(`${BASE_URL}/token`,requestBody)
}

export const loginOtpApi = (requestBody:any,config:any)=>{
  return axios.post(`${BASE_URL}/verifyOTP`,requestBody,config)
}

export const forgetPasswordApi = (requestBody:any)=>{
  return axios.post(`${BASE_URL}/forgetPassword`,requestBody)
}

export const changePasswordApi = (requestBody:any,config:any)=>{
  return axios.post(`${BASE_URL}/changePassword`,requestBody,config)
}
