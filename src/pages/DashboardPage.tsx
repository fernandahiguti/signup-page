import React from 'react';
import Dashboard from '../components/Dashboard';
import { useLocation, useParams } from 'react-router-dom';

const DashboardPage: React.FC = () => {
    const location = useLocation();
    const params = useParams<{ firstName: string }>();
    const firstName = params.firstName || new URLSearchParams(location.search).get('firstName') || ''; 
  return (
    <div>
       {firstName && <Dashboard firstName={firstName} />} {}
    </div>
  );
};

export default DashboardPage;
