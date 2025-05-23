import React from 'react';
import { useNavigate } from 'react-router-dom';
function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>
      <button
        onClick={() => navigate('/aws')}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to AWS Dashboard
      </button>
    </div>
  );
}
export default DashboardPage; 