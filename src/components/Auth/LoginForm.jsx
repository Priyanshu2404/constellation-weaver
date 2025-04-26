import React from 'react';

const LoginForm = ({ onLogin }) => {
    return (
        <form onSubmit={onLogin}>
            <input type="email" name="email" placeholder="Email" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
