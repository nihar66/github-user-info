import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  
  const [username, setUsername] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit(username);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
          Get Info
        </button>
      </form>
    </div>
  );
};

export default InputForm;
