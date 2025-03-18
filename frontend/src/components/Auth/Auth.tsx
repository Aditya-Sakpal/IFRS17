// @ts-nocheck 

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Auth: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('https://ifrs17-backend-sbyv.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const json_response = await response.json();
            console.log(json_response);
            if (json_response.status === "approved"){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully logged in!',
                });
                setTimeout(() => {
                    localStorage.setItem('isAuthenticated', 'true');
                    window.location.href = '/';
                }, 1000);

            }
            else if (response.statusText === "Unauthorized"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password!',
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred during login!',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-[#4f4e4e]">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center text-[#4f4e4e] mb-6">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#4f4e4e] mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f4e4e] text-[#4f4e4e]"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-[#4f4e4e] mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f4e4e] text-[#4f4e4e]"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#4f4e4e] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4f4e4e] focus:ring-offset-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Auth