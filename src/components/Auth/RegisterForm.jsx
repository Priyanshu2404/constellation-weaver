import React from 'react';

const RegisterForm = ({onLogin})=>{
    return(
        <form onSubmit={onLogin}>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder='Password' required/>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;