import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import OnboardingRootLayout from './pages/onboarding/OnboardingRootLayout'
import SignIn from './pages/onboarding/sign-in/SignIn'
import ForgotPassword from './pages/onboarding/sign-in/ForgotPassword'
import ResetPassword from './pages/onboarding/sign-in/ResetPassword'
import SignUp from './pages/onboarding/sign-up/SignUp'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OnboardingRootLayout />}>
          <Route path='/' element={<SignIn />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/sign-up' element={<SignUp />} />
          {/* <Route path='/signup/registration' element={<RegistrationForm />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} /> */}
        </Route>
      </Routes>
      <ToastContainer position='top-right' />
    </BrowserRouter>
  )
}

export default App
