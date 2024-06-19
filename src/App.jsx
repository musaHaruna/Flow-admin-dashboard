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
import Individuals from './pages/dashboard/pages/individuals/Individuals'
import IndividualInfo from './pages/dashboard/pages/individuals/single-individual-page/IndividualInfo'
import CoursesAll from './pages/dashboard/pages/courses/CoursesAll'
import CoursesPublished from './pages/dashboard/pages/courses/CoursesPublished'
import CoursesDraft from './pages/dashboard/pages/courses/CoursesDraft'
import Schools from './pages/dashboard/pages/schools/Schools'
import SchoolDetail from './pages/dashboard/pages/schools/school-detail/SchoolDetail'
import PayementHistory from './pages/dashboard/pages/payment-history/PayementHistory'
import Support from './pages/dashboard/pages/support/Support'
import SettingsChangePassword from './pages/dashboard/pages/settings/change-password/SettingsChangePassword'
import SettingsDeactivateAccount from './pages/dashboard/pages/settings/deactivate-account/SettingsDeactivateAccount'
import SettingsProfile from './pages/dashboard/pages/settings/profile/SettingsProfile'
import SettingsEmailNotifications from './pages/dashboard/pages/settings/email-notification/SettingsEmailNotifications'
import SettingsTeams from './pages/dashboard/pages/settings/teams/SettingsTeams'
import SingleCoursePage from './pages/dashboard/pages/courses/single-course-page/SingleCoursePage'

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
          <Route path='/dashboard/individuals' element={<Individuals />} />

          <Route
            path='/dashboard/individuals/:id'
            element={<IndividualInfo />}
          />
          <Route path='/dashboard/schools' element={<Schools />} />
          <Route path='/dashboard/school/:id' element={<SchoolDetail />} />
          <Route path='/dashboard/support' element={<Support />} />
          <Route
            path='/dashboard/payment-history'
            element={<PayementHistory />}
          />

          <Route
            path='/dashboard/settings/profile'
            element={<SettingsProfile />}
          />
          <Route path='/dashboard/settings/teams' element={<SettingsTeams />} />
          <Route
            path='/dashboard/settings/change-password'
            element={<SettingsChangePassword />}
          />
          <Route
            path='/dashboard/settings/email-notifications'
            element={<SettingsEmailNotifications />}
          />
          <Route
            path='/dashboard/settings/deactivate-account'
            element={<SettingsDeactivateAccount />}
          />
          <Route
            path='/dashboard/my-courses/:id'
            element={<SingleCoursePage />}
          />
        </Route>
      </Routes>
      <ToastContainer position='top-right' />
    </BrowserRouter>
  )
}

export default App
