import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import { toast } from 'react-toastify';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()

        await loginUser({
            username,
            password,
        })
        toast.success("Login Successful!")
        navigate('/dashboard')
    }
    
    return (
        <div className='min-h-screen bg-sky-50 flex items-center justify-center px-6'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-md p-6  animate__animated animate__fadeInUp'>
                <div className='text-center mb-5'>
                    <div className='text-2xl font-bold'>🌤️ Weatherly</div>
                    <p className='text-gray-500 mt-1'>
                        Check the weather anywhere
                    </p>
                </div>
                <h1 className='text-2xl font-bold text-center mb-5'>
                    Welcome Back
                </h1>


                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label className='block text-sm font-medium mb-2'>
                            Username
                        </label>

                        <input 
                            type="text" 
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            placeholder='Enter your username'
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                
                    <div>
                        <label className='block text-sm font-medium mb-2'>
                            Password
                        </label>

                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        className='w-full px-4 py-3 rounded-lg bg-blue-500 text-white font-semibold transition duration-300 hover:bg-blue-600'
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?   
                        <Link 
                            to="/signup"
                            className="text-blue-500 font-medium transition-colors duration-200 hover:text-blue-700 ml-1"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;