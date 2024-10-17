import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/App.css"
function RegistrationForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user credentials in sessionStorage
    window.sessionStorage.setItem('name', name);
    window.sessionStorage.setItem('password', password);

    // Redirect to login page after registration
    navigate('/login');
  };

  return (
    <div id='login-container'>
      <form id='form-container' onSubmit={handleSubmit}>
      <h2>Registration Page</h2>
        <table id='table-container'>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update username state
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Register" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default RegistrationForm;
