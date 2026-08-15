import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { registerUser } from '../services/api';

const Signup = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, SetConfirmPassword] = useState('')
    
    const handleSignup = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword){
            toast.error("Passwords do not match")
            return
        }
        await registerUser({
            username,
            password,
        })
        toast.success("Registration successful")
    }
    
    return (
        <div className='min-h-screen bg-sky-50 flex items-center justify-center px-6'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-md p-6 animate__animated animate__fadeInUp'>
                <div className='text-center mb-5'>
                    <div className='text-2xl font-bold'>🌤️ Weatherly</div>
                    <p className='text-gray-500 mt-1'>
                        Check the weather anywhere
                    </p>
                </div>

                <h1 className='text-2xl font-bold text-center mb-5'>
                    Create Account
                </h1>

                <form className='space-y-5' onSubmit={handleSignup}>
                    <div>
                        <label className='block text-sm font-medium mb-2'>
                            Username
                        </label>

                        <input
                            type='text'
                            value={username}
                            onChange={(e)=> setUserName(e.target.value)}
                            placeholder='Enter your username'
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-2'>
                            Password
                        </label>

                        <input
                            type='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Enter your password'
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-2'>
                            Confirm Password
                        </label>

                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => SetConfirmPassword(e.target.value)}
                            placeholder='Confirm your password'
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        />
                    </div>

                    <button
                        className='w-full px-4 py-3 rounded-lg bg-blue-500 text-white font-semibold transition duration-300 hover:bg-blue-600'
                    >
                        Sign Up
                    </button>

                    <p className='text-center text-sm text-gray-500'>
                        Already have an account?
                        <Link 
                            to="/login"
                            className='text-blue-500 font-medium transition-colors duration-200 hover:text-blue-700 ml-1'
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup;