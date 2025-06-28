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

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/hire-talent" element={<HireTalent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;