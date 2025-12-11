import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import RegisterServiceProvider from './components/RegisterServiceProvider'
import Welcome from './components/Welcome'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './components/dashboards/AdminDashboard'
import SuperAdminDashboard from './components/dashboards/SuperAdminDashboard'
import MarketingTeamDashboard from './components/dashboards/MarketingTeamDashboard'
import CustomerSupportDashboard from './components/dashboards/CustomerSupportDashboard'

function App() {
 

  return (
    <>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-service-provider" element={<RegisterServiceProvider />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route 
          path="/dashboard/admin" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/super-admin" 
          element={
            <ProtectedRoute allowedRoles={['super_admin']}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/marketing" 
          element={
            <ProtectedRoute allowedRoles={['marketing_team']}>
              <MarketingTeamDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/support" 
          element={
            <ProtectedRoute allowedRoles={['customer_support']}>
              <CustomerSupportDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
