import React from 'react';

const UserInfoCard = ({ user }) => {
  const { avatar_url, login, name, public_repos, public_gists, created_at } = user;

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
      <img
        src={avatar_url}
        alt={`${login}'s avatar`}
        className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-white"
      />
      <h2 className="text-2xl font-semibold text-center text-white">{login}</h2>
      <p className="text-gray-300 text-center">{name}</p>
      <div className="mt-4 flex justify-center">
        <div className="mr-4">
          <p className="text-lg font-semibold text-white">{public_repos}</p>
          <p className="text-gray-300">Public Repos</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{public_gists}</p>
          <p className="text-gray-300">Public Gists</p>
        </div>
      </div>
      <p className="mt-4 text-gray-300 text-center">
        Profile created at: {new Date(created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default UserInfoCard;
