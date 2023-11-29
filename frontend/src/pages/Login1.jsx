import React, { useState } from 'react';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[_, setCookies] =useCookies(["Access_token"]);
    const move = useNavigate(); 

    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            const response=await axios.post("http://localhost:4000/api/v1/login", {
                 email, password
            });
            setCookies("Access_token", response.data.token);
            alert("logged in successfully");
            move('/'); 
        } catch (err) {
            console.error(err);
            alert("Registration failed. Check the console for details.");
        }
    };    

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0', overflowY: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '500px' }}>
                <div style={{ width: '340px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
                    <form onSubmit={handlesubmit}>
                        <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#047857' }}>Login</h2>
                        
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='email'
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='password'
                                required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                            />
                        </div>
                        <div>
                            <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#047857', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

