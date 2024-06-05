import React, { useState } from 'react';
import Base from '../Base/Base';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const userNewPassword = {
        password,
        confirmPassword
    };

    const passwordHandling = async () => {
        const response = await fetch(`https://cognisite-reset-password-backend.onrender.com/users/reset/password/${token}`, {
            method: 'POST',
            body: JSON.stringify(userNewPassword),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) { // Check if the response status is 200-299
            toast.success(data.message, {
                position: "top-center",
            });
            localStorage.setItem("token", data.token);
            navigate("/");
        } else {
            toast.error(data.error, {
                position: "top-center",
            });
        }
    };

    return (
        <Base
            title={'Reset Password'}
            description={'Reset your password'}
        >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 loginpage">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="/logo.jpg"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Password Reset
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            New Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ paddingLeft: '0.7rem', fontFamily: 'monospace', fontSize: '0.9rem' }}
                                autoComplete="new-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ paddingLeft: '0.7rem', fontFamily: 'monospace', fontSize: '0.9rem' }}
                                autoComplete="new-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='login-btn'>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={passwordHandling}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default ResetPassword;
