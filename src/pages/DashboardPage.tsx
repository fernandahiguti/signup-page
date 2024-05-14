import React from 'react';
import Dashboard from '../components/Dashboard';
import { useLocation } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const location = useLocation();
  const firstName = location.state?.firstName || '';

  return (
    <div>
      {firstName && <Dashboard firstName={firstName} />}
    </div>
  );
};


export default DashboardPage;

