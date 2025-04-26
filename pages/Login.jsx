import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import '../styles/Login.css';

const LoginComponent = () => {
    const [error, setError] = useState('');

    const handleLogin = (formData) => {
        // Example logic for handling login
        const { email, password } = formData;

        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        // If the fields are valid, proceed with login (e.g., call an API)
        console.log('Logging in with:', formData);
        setError('');  // Clear error on successful submission
    };

    return (
        <div className="login-container">
            {error && <div className="error-message">{error}</div>}
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginComponent;
