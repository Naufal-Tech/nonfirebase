import React, { Fragment, useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import '../styles/Login.css';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


const Login = () => {
    const { isAuthenticated, loginSuccess, loginFailed } =
        useContext(AuthContext);
    const [error, setError] = useState('');
    const [isError, setIsError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const userLogin = async () => {
        const user = {
            username,
            password,
        };

        try {
            const res = await axios.post(`${baseUrl}/login`, user);
            localStorage.setItem('accessToken', res.data.data.accessToken);
            localStorage.setItem('username', res.data.data.username);
            setUser(res.data.data);
            setUsername('');
            setPassword('');
            setIsLoading(false);
            loginSuccess();
        } catch (err) {
            setIsError(true);
            setError(err.response.data);
            setIsLoading(false);
            setUsername('');
            setPassword('');
            setTimeout(() => {
                setIsError(false);
                setError('');
                loginFailed();
            }, 2000);
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/home" />;
    }

    return (
    <Fragment>
    <NavigationBar user={user} />
    <div className="login-bg">
        <div className="container-sm">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="row justify-content-center">LOGIN</h2>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <label className="col-form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            name="username"
                            required
                        />
                        <br />
                    <label className="col-form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            required
                        />
                        <br />
                    <div>
                        <div>
                            {
                            isError && 
                            (
                                <div>
                                    {error && 
                                    (
                                        <p style=  {{
                                            color: 'orange',
                                            textShadow: '2px',
                                            fontSize: '1.2rem',
                                            margin: '0.4rem 0',
                                            textAlign: 'center',
                                            }} >
                                            {error.message}
                                        </p>
                                    )}
                                    {error.status === 400 && 
                                    (
                                        <p style={{ color: 'red', margin: '0.4rem 0' }}>
                                        {error.data.error}
                                        </p>
                                    )}
                                </div>
                            )
                            }
                        </div>
                        <p>Click <a className="not-registered" href="/register">
                            here</a> If you haven't registered
                        </p>
                        <button className="login-btn" onClick={userLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
};

export default Login;