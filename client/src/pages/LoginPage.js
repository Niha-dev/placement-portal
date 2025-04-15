import React, { useState } from 'react';

const LoginPage = () => {
  const [userType, setUserType] = useState('student'); // Default to student
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here (for now, just log the details)
    console.log('Logging in:', { userType, username, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <select onChange={(e) => setUserType(e.target.value)}>
        <option value="student">Student</option>
        <option value="cdc">CDC</option>
        <option value="company">Company</option>
      </select>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
