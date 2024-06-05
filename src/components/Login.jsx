import React, { useState } from 'react';
import Base from '../Base/Base';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userDetails = {
      email,
      password,
    };
    const response = await fetch("https://cognisite-reset-password-backend.onrender.com/users/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) { // Check if the response status is 200-299
      toast.success(data.message, {
        position: "top-right",
      });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      toast.error(data.data, {
        position: "top-center",
      });
    }
  };

  return (
    <Base
      title={'Login page'}
      description={'you can login'}
    >
      <div className="flex flex-col md:flex-row min-h-screen">
       {/* Left side image */}
       <div className="hidden md:block md:w-4/6">
          <img
            src="/images.jpg" // Add your login image path here
            alt="Login"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right side login form */}
        <div className="flex-1 bg-yellow-300 p-6 md:p-0 flex flex-col justify-center">
        <img
          src='/logo.jpg'
            className="w-20 h-20 mx-auto mb-8"
            alt="Your Company"
          />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm mx-auto space-y-4 bg-white p-8 rounded-lg">
            <div>
              <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  style={{ paddingLeft: '0.7rem', fontFamily: 'monospace', fontSize: '0.9rem' }}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='password-txt'>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forgot/password">
                    <b style={{ color: "#4F46E5" }}>Forgot Password</b>
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  style={{ paddingLeft: '0.7rem', fontFamily: 'monospace', fontSize: '0.9rem' }}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='login-btn'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-900">
            Don't have an account?{' '}
            <Link to="/signup">
              <b style={{ color: "#4F46E5" }}>Sign Up</b>
            </Link>
          </p>
        </div>
      </div>
    </Base>
  );
}

export default Login;
