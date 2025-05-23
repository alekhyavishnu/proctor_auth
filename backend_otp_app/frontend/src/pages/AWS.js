import React from 'react';
import { Link } from 'react-router-dom';

function AWS() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">AWS Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AWS Page Card */}
          <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">AWS Services</h2>
            <p className="text-gray-500 mb-4 text-center text-sm">Access and manage your AWS services and resources.</p>
            <Link 
              to="/aws"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Go to AWS
            </Link>
          </div>

          {/* Catalog Page Card */}
          <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Catalog</h2>
            <p className="text-gray-500 mb-4 text-center text-sm">Browse and manage your service catalog.</p>
            <Link 
              to="/catalog"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              View Catalog
            </Link>
          </div>

          {/* Dashboard Page Card */}
          <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Dashboard</h2>
            <p className="text-gray-500 mb-4 text-center text-sm">View your analytics and metrics dashboard.</p>
            <Link 
              to="/dashboard"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
        {/* Session Timer */}
        <div className="mt-8 w-full max-w-xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-gray-700 text-center text-sm">
            Your session will expire in 30 minutes. Please save your work before the session ends.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AWS; 