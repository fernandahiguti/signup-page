import React from 'react';
import Dashboard from '../components/Dashboard';
import { useLocation, useParams } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Dashboard firstName={'Jane'} />{}
    </div>
  );
};

export default DashboardPage;