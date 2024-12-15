import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faculty from './pages/people/Faculty';
import PersonBio from './pages/people/PersonBio';
import Hero from './components/Hero';
import Overview from './pages/fusion/Overview';
import MagneticConfinement from './pages/fusion/MagneticConfinement';
import UniversityScale from './pages/fusion/UniversityScale';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MembersLayout from './components/members/MembersLayout';
import Dashboard from './pages/members/Dashboard';
import Projects from './pages/members/Projects';
import Latest from './pages/news/Latest';
import LatestNews from './components/news/LatestNews';

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <LatestNews />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fusion/overview" element={<Overview />} />
          <Route path="/fusion/magneticconfinement" element={<MagneticConfinement />} />
          <Route path="/fusion/universityscale" element={<UniversityScale />} />
          <Route path="/people/faculty" element={<Faculty />} />
          <Route path="/people/bio/:id" element={<PersonBio />} />
          <Route path="/news/latest" element={<Latest />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <MembersLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}