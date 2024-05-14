import React from 'react';

interface Props {
  firstName: string;
}

const Dashboard: React.FC<Props> = ({ firstName }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '30vh', fontSize: '2rem' }}>
          <h1 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Welcome, {firstName}</h1>
        </div>
      );
};

export default Dashboard;
