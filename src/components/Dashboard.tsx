import React from 'react';

interface Props {
  firstName: string;
}

const Dashboard: React.FC<Props> = ({ firstName }) => {
  return (
    <div>
      <h1>Welcome, {firstName}</h1>
    </div>
  );
};

export default Dashboard;
