import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home/Home';
import Navbar from '../components/navigation/Navbar';
import AboutUs from '../pages/about/AboutUs';
import Services from '../pages/services/Services';
import Blog from '../pages/blog/Blog';
import BlogPostPage from '../pages/blog/components/BlogPostPage';
import ScrollToTop from '../components/contants/ScrollToTop';
import HireTalent from '../pages/hire-talent/HireTalent';
import Register from '../components/registration/Register';
import Login from '../components/registration/Login';
import Dashboard from '../components/admin-dashboard/adminDashboard';
import CandidateProfile from '../pages/hire-talent/candidate-profile/candidateProfile';
import ProfileSection from '../components/admin-dashboard/profileSection';
import AdminLayout from '../components/admin-dashboard/adminLayout';
import ClientsPage from '../components/admin-dashboard/clientsPage';
import CandidateInvoices from '../components/admin-dashboard/invoiceSection';
import CandidateReport from '../components/admin-dashboard/candidateReport';
import CandidateSettings from '../components/admin-dashboard/candidateSettings';
import DeleteAdminSection from '../components/admin-dashboard/candidateDelete';
import LogoutPage from '../components/admin-dashboard/logoutPage';

const AppContent: React.FC = () => {
  const location = useLocation();

  // List of admin-only routes (can be refined with regex or path matching libs)
  const adminPaths = [
    '/admin-dashboard',
    '/profile-page',
    '/clients',
    '/invoices',
    '/reports',
    '/settings',
    '/delete',
    '/logout',
  ];

  const isAdminRoute = adminPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPostPage />} />
        <Route path="hire-talent" element={<HireTalent />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="candidate-profile" element={<CandidateProfile />} />

        {/* Admin dashboard routes wrapped in AdminLayout */}
        <Route path="admin-dashboard" element={<AdminLayout element={<Dashboard />} />} />
        <Route path="profile-page" element={<AdminLayout element={<ProfileSection />} />} />
        <Route path="clients" element={<AdminLayout element={<ClientsPage />} />} />
        <Route path="invoices" element={<AdminLayout element={<CandidateInvoices />} />} />
        <Route path="reports" element={<AdminLayout element={<CandidateReport />} />} />
        <Route path="settings" element={<AdminLayout element={<CandidateSettings />} />} />
        <Route path="delete" element={<AdminLayout element={<DeleteAdminSection />} />} />
        <Route path="logout" element={<AdminLayout element={<LogoutPage />} />} />
      </Routes>
    </>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppRoutes;
