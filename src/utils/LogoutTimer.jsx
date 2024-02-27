import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth  from "../hooks/useAuth";

const LogoutTimer = ({ timeoutInMinutes }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(logoutUser, timeoutInMinutes * 60 * 1000);
    };

    const logoutUser = () => {
      setIsActive(false);
      logout();
      navigate('/login');
    };

    const handleUserActivity = () => {
      if (!isActive) {
        setIsActive(true);
        resetTimer();
      }
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [isActive, logout, navigate, timeoutInMinutes]);

  return null;
};

export default LogoutTimer;