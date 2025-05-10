import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { userData } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center m-20 px-4 text-center text-gray-800'>
      <img src={assets.header_img} alt="" className='w-36 h-36 rounded-full mb-6' />

      {userData ? (
        <>
          <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
            Hey {userData.name.split(' ')[0]}! 🎉 You made it here!
          </h1>
          <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>
            Welcome to the MERN Auth Playground! 🔐🚀
          </h2>
          <p className='mb-8 max-w-xl'>
            Here's what you can try out:
          </p>
          <ul className='mb-6 text-left text-base sm:text-lg leading-relaxed space-y-2'>
            <li>👉 Register and log in securely</li>
            <li>👉 Verify your email via OTP</li>
            <li>👉 Try forgetting your password (for fun 😄)</li>
            <li>👉 Reset your password with OTP</li>
            <li>👉 Watch protected routes & cookies in action</li>
          </ul>
          <p className='mb-6 max-w-xl'>
            All built with the MERN stack, email templates, toasts, and custom middleware. This is a complete authentication system demo!
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => navigate('/features')}
              className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'
            >
              Check Features
            </button>
            <a
              href='https://mdnoorahmed.com'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-gray-800 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'
            >
              View My Portfolio
            </a>
            <button
              onClick={() => navigate('/docs')}
              className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'
            >
              View Docs
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
            👋 Welcome, curious visitor!
          </h1>
          <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>
            MERN Auth Demo — Try it Yourself!
          </h2>
          <p className='mb-6 max-w-xl'>
            This app demonstrates how to handle authentication using:
          </p>
          <ul className='mb-8 text-left text-base sm:text-lg leading-relaxed space-y-2'>
            <li>🚀 JWT-based login & registration</li>
            <li>🔐 Secure cookies for session handling</li>
            <li>📧 OTP-based email verification & reset</li>
            <li>⚙️ Real-time protected route access</li>
          </ul>
          <div className='flex gap-4 flex-wrap justify-center'>
            <button
              onClick={() => navigate('/login')}
              className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'
            >
              Start Exploring
            </button>
            <button
              onClick={() => navigate('/docs')}
              className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'
            >
              View Docs
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
