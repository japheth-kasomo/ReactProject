import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import LogoutTimer from './utils/LogoutTimer';

function App() {
  return (
    <>
      <LogoutTimer timeoutInMinutes={1} /> {/* Adjust timeout as needed */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
