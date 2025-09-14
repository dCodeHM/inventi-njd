import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import TenantDashboard from './components/TenantDashboard';
// Admin Pages
import AdminProperties from './components/admin/AdminProperties';
import AdminTenants from './components/admin/AdminTenants';
import AdminMaintenance from './components/admin/AdminMaintenance';
import AdminReports from './components/admin/AdminReports';
// Tenant Pages
import TenantUnit from './components/tenant/TenantUnit';
import TenantPayments from './components/tenant/TenantPayments';
import TenantMaintenance from './components/tenant/TenantMaintenance';
import TenantProfile from './components/tenant/TenantProfile';
import './App.css';

// Dashboard component that routes based on user role
const Dashboard = () => {
  const { user } = useAuth();
  
  if (user?.role === 'admin') {
    return <AdminDashboard />;
  } else if (user?.role === 'tenant') {
    return <TenantDashboard />;
  }
  
  return <Navigate to="/login" replace />;
};

// Main App component
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#48bb78',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#e53e3e',
                  secondary: '#fff',
                },
              },
            }}
          />
          
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout title="Dashboard">
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            
            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout title="Admin Dashboard">
                    <AdminDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/properties"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout title="Properties Management">
                    <AdminProperties />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/tenants"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout title="Tenants Management">
                    <AdminTenants />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/maintenance"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout title="Maintenance Management">
                    <AdminMaintenance />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/reports"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout title="Reports & Analytics">
                    <AdminReports />
                  </Layout>
                </ProtectedRoute>
              }
            />
            
            {/* Tenant Routes */}
            <Route
              path="/tenant/dashboard"
              element={
                <ProtectedRoute requiredRole="tenant">
                  <Layout title="Tenant Dashboard">
                    <TenantDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant/unit"
              element={
                <ProtectedRoute requiredRole="tenant">
                  <Layout title="My Unit">
                    <TenantUnit />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant/payments"
              element={
                <ProtectedRoute requiredRole="tenant">
                  <Layout title="Payments">
                    <TenantPayments />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant/maintenance"
              element={
                <ProtectedRoute requiredRole="tenant">
                  <Layout title="Maintenance Requests">
                    <TenantMaintenance />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant/profile"
              element={
                <ProtectedRoute requiredRole="tenant">
                  <Layout title="My Profile">
                    <TenantProfile />
                  </Layout>
                </ProtectedRoute>
              }
            />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
