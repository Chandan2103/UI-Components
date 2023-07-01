import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../../containers/Register/Register';
import Login from '../../containers/Login/Login';
import ForgotPassword from '../../containers/ForgotPassword/ForgotPassword';
import OtpScreen from '../../containers/OtpScreen/OtpScreen';
import ChangePassword from '../../containers/ChangePassword/ChangePassword';
import SuccessModal from '../SuccessModal/SuccessModal';
import Dashboard from '../../containers/Dashboard/Dashboard';
import RegisterOtp from '../../containers/Register/RegisterOtp/RegisterOtp';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/register" element={<Register />} /> 
          <Route path="" element={<Login/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/otpScreen" element={<OtpScreen/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
          {/* <Route path="/successModal" element={<SuccessModal/>}/> */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/RegisterOtp" element={<RegisterOtp/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Router