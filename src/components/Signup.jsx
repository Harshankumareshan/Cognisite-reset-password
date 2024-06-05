import { useState } from "react";
import Base from "../Base/Base";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const newUser = {
      name,
      email,
      password,
    };
    console.log(newUser);
    const response = await fetch('https://cognisite-reset-password-backend.onrender.com/users/signup', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) { // Check if the response status is 200-299
      toast.success(data.message, {
        position: "top-center",
      });
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      toast.error(data.data, {
        position: "top-center",
      });
    }
  };

  return (
    <Base>
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
              Create new account
            </h2>
            
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm mx-auto space-y-4 bg-white p-8 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="current-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Email input */}
            <div className="mt-6 ">
              <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Password input */}
            <div className="mt-6">
              <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Signup button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </div>
            {/* Login link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Have an account?{' '}
              <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-800">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Base>
  );
}
