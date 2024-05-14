import React from 'react';
import Dashboard from '../components/Dashboard';
import { useLocation, useParams } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Dashboard firstName={'Jane'} />{}
    </div>
  );
};

export default DashboardPage;