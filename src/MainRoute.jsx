import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from './component/Services'
import Doctors from './component/Doctors'
import About from './component/About'
import Contact from './component/Contact'
import Career from './component/Career'
import Home from './component/Home'
import Signup from './component/SignUp'
import Login from './component/Login'
import Forget from './component/Forget'

import AdminDashboard from './component/Dashboard'
import Logout from './Admin/Logout'
import HomeDashboard from './Admin/HomeDashboard'
import Staff from './Admin/Staff'
import Reports from './Admin/Reports'
import Patients from './Admin/Patients'
import Billing from './Admin/Billing'
import Appointments from './Admin/Appointments'
import  Settings  from './Admin/Settings'
import Doctorsji from './Admin/Doctors'
import Query from './Admin/Query'
import ProtectedRoute from './ProtectedRoute'
function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/career" element={<Career />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
       <Route path="/forget" element={<Forget />} />
       
        
        {/* /////////admin routes////// */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<HomeDashboard />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/billing" element={<Billing />} />
        <Route path="/admin/doctors" element={<Doctorsji />} />
        <Route path="/admin/patients" element={<Patients/>} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/staff" element={<Staff />} />
         <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/query" element={<Query />} />
           <Route path="/logout" element={<Logout />} />
           
    </Routes>
  )
}

export default MainRoute
