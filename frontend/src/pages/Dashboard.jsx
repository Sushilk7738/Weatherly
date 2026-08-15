import React, { useEffect } from 'react'
import { checkSession, getCsrfToken, logoutUser } from '../services/api';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        checkSession().then((response) => {
            if (!response.data.authenticated) {
                navigate('/login')
            }
        })
    }, [])
    

    const handleLogout = async () => {
        const csrfToken = await getCsrfToken()
        await logoutUser(csrfToken)
        navigate('/login')
    }
    
    return (
        <div className='min-h-screen flex flex-col bg-sky-50'>
    <nav className='px-6 py-4 flex items-center justify-between bg-white shadow-md'>
        <span className='text-xl font-bold transition-transform duration-300 hover:scale-105'>
            🌤️<span>Weatherly</span>
        </span>
        <button 
            onClick={handleLogout}
            className='px-4 py-2 font-medium bg-black rounded-lg text-white transition hover:bg-gray-800'
        >
        Logout
        </button>
    </nav>

    <main className='max-w-3xl mx-auto w-full px-6 py-12'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-6'>
        What's the weather like?
        </h1>

        <div className='flex flex-col sm:flex-row gap-3'>
        <input
            type='text'
            placeholder='Enter city or village' 
            className='flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <button className='px-6 py-3 rounded-lg  bg-blue-500 transition duration-200 font-semibold hover:bg-blue-600 text-white'>
            Search
        </button>
        </div>

        <div className='mt-8 p-4 sm:p-6 rounded-2xl bg-white shadow-md  animate__animated animate__fadeInUp w-full'>
        <p className='text-sm text-gray-500'>
            Current weather
        </p>
        
        <h2 className='text-2xl font-bold'>📍 Mumbai</h2>
        
        <div className="mt-6 text-center">
            <div 
            className='mt-4 text-5xl animate__animated animate__bounce'
            style={{ "--animate-duration": "2s"}}
            >
            🌧️
            </div>
            <p className="text-5xl font-bold">28°C</p>
            <p className="text-lg text-gray-500 mt-1">Light rain shower</p>
        </div>
        
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='p-4 rounded-lg bg-gray-50 text-center'>
            <p className='text-sm text-gray-500'>Feels Like</p>
            <p className='text-xl font-semibold'>31.5°C</p>
            </div>
            <div className='p-4 rounded-lg bg-gray-50 text-center'>
            <p className='text-sm text-gray-500'>Humidity</p>
            <p className='text-xl font-semibold'>77%</p>
            </div>
            <div className='p-4 rounded-lg bg-gray-50 text-center'>
            <p className='text-sm text-gray-500'>Wind</p>
            <p className='text-xl font-semibold'>24.4 km/h</p>
            </div>
        
        </div>  
        </div>
        
    </main>
    </div>
    )
}

export default Dashboard;