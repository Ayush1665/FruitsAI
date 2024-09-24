// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage';
import HomePage from './components/Pages/HomePage';
import AboutUsPage from './components/Pages/AboutUsPage';
import TranslatePage from './components/Pages/TranslatePage';
import ProtectedRoute from './components/Others/ProtectedRoute';
import FaqPage from './components/Pages/FaqPage';
import ChatPage from './components/Pages/ChatPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/translate"
        element={
          <ProtectedRoute>
            <TranslatePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about-us"
        element={
          <ProtectedRoute>
            <AboutUsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faq"
        element={
          <ProtectedRoute>
            <FaqPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
