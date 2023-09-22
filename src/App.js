
import React, { useState } from 'react';
import InputForm from './InputForm';
import UserInfoCard from './UserInfoCard';
import 'tailwindcss/tailwind.css';

function App() {
const [user, setUser] = useState(null);
  
  const fetchUserInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setUser(null);
        alert('User not found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
      alert('An error occurred while fetching data.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-4">GitHub User Info</h1>
        <InputForm onSubmit={fetchUserInfo} />
        {user && <UserInfoCard user={user} />}
      </div>
    </div>
  );
}

export default App;


