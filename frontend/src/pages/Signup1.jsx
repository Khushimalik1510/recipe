import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const move = useNavigate(); 
    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/v1/signup", {
                name, email, password
            });
            alert("Registration Completed!");
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
                        <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#047857' }}>Sign Up</h2>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='name'
                                required
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
                            />
                        </div>
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
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
