import React, { useState, useEffect } from 'react';

function UserInfoCard() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [username]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="Avatar" />
          <p>Username: {userData.login}</p>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Public Gists: {userData.public_gists}</p>
          <p>Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default UserInfoCard;
