import React, { useState } from 'react';
import './Auth.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [buttonClick, setButtonClick] = useState(false)

    const handleLogin = () => {
        setButtonClick(true)
        // Here you can implement the logic to check the username and password
        if (username === 'Auth@username01' && password === 'Auth@password01') {
            setIsAuthenticated(true);
            console.log(buttonClick)
        } else {
            setIsAuthenticated(false);
        }


    };

    return (
        <div className="auth-container">
            <h2>Authorization</h2>
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
            <button className="login-button" onClick={handleLogin}>
                Log In
            </button>

            <button className='home' onClick={() => navigate('/')}>Home</button>

            {isAuthenticated === false && buttonClick === false &&<p className="User-come">Plase log in</p>}
            {isAuthenticated && <p className="success-message">Authorized!</p>}
            {isAuthenticated === false && buttonClick === true && <p className="error-message">Authorization Failed</p>}

        </div>
    );
};

export default Auth;
