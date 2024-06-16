import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import OnboardingRootLayout from './pages/onboarding/OnboardingRootLayout'
import SignIn from './pages/onboarding/sign-in/SignIn'
import ForgotPassword from './pages/onboarding/sign-in/ForgotPassword'
import ResetPassword from './pages/onboarding/sign-in/ResetPassword'
import SignUp from './pages/onboarding/sign-up/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './pages/dashboard/pages/overview/Overview'
import CoursesAll from './pages/dashboard/pages/courses/CoursesAll'
import CoursesPublished from './pages/dashboard/pages/courses/CoursesPublished'
import CoursesDraft from './pages/dashboard/pages/courses/CoursesDraft'
import Schools from './pages/dashboard/pages/schools/Schools'
import SchoolDetail from './pages/dashboard/pages/schools/school-detail/SchoolDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OnboardingRootLayout />}>
          <Route path='/' element={<SignIn />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path='/dashboard/courses/all' element={<CoursesAll />} />
          <Route path='/dashboard/courses/draft' element={<CoursesDraft />} />
          <Route
            path='/dashboard/courses/published'
            element={<CoursesPublished />}
          />
          <Route path='/dashboard/schools' element={<Schools />} />
          <Route path='/dashboard/school/:id' element={<SchoolDetail />} />

          {/* <Route path='/dashboard/profile' element={<IndividualProfile />} />
          <Route path='/dashboard/my-courses' element={<MyCourses />} />
          <Route
            path='/dashboard/my-courses/:id'
            element={<SingleCoursePage />}
          />
          <Route
            path='/dashboard/enrollment/confirm'
            element={<ConfirmPayment />}
          /> */}
        </Route>
      </Routes>
      <ToastContainer position='top-right' />
    </BrowserRouter>
  )
}

export default App
