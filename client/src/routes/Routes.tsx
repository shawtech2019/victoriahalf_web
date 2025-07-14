import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
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
        {/* Admin dashboard route wrapped in layout */}
        <Route path="admin-dashboard" element={<AdminLayout element={<Dashboard />} />} />
        <Route path="profile-page" element={<AdminLayout element={<ProfileSection />} />} />
        <Route path="clients" element={<AdminLayout element={<ClientsPage />} />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
