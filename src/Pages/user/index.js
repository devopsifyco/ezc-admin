import React, { useState, useEffect } from 'react';
import useUsers from 'pages/api/user';

export default function ListUsers() {
  const { getListDataUsers } = useUsers();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getListDataUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, [getListDataUsers]);

  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="border-b p-2">{user.username}</td>
              <td className="border-b p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
