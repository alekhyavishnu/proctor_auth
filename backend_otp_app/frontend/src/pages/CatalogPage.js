import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CatalogPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/protected/catalog', {
          withCredentials: true
        });
        setItems(response.data.items);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate('/');
        }
      }
    };

    fetchCatalog();
  }, [navigate]);

  const handleEmailClick = (ownerEmail) => {
    const subject = encodeURIComponent('Regarding Catalog Item');
    const body = encodeURIComponent('Hello,\n\nI am interested in your catalog item.\n\nRegards,\nproctor.');
    const to = 'thotatarun96@gmail.com';
    
    // Open Outlook compose mail interface
    window.open(
      `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`,
      '_blank'
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p>
              Owner:{' '}
              <button
                onClick={() => handleEmailClick(item.owner.email)}
                className="text-blue-600 hover:underline"
              >
                {item.owner.displayName}
              </button>
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/aws')}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to AWS Dashboard
      </button>
    </div>
  );
};

export default CatalogPage; 