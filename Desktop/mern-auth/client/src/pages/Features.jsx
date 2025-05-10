import React from 'react'
import { useNavigate } from 'react-router-dom'

const Features = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-br from-yellow-50 via-pink-100 to-pink-200 text-gray-800'>
      <h1 className='text-4xl sm:text-5xl font-bold mb-8 text-center'>
        🚀 Features of This MERN Auth App
      </h1>

      <div className='grid gap-6 sm:grid-cols-2 max-w-4xl w-full'>
        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ User Registration</h2>
          <p>Create an account by providing your name, email, and password. Passwords are securely hashed before saving in the database.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ JWT Authentication</h2>
          <p>Secure login with JSON Web Tokens stored in HTTP-only cookies for better protection against XSS attacks.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Email Verification (OTP)</h2>
          <p>Receive a unique OTP via email to verify your account within 24 hours. No verification? No access to protected features.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Password Reset Flow</h2>
          <p>Forgot your password? Get a reset OTP via email, verify it, and set a new password within 15 minutes. No admin needed!</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Protected Routes</h2>
          <p>Backend routes use middleware to block unauthorized users. Only logged-in users can fetch their data.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Toast Notifications</h2>
          <p>Every action shows a toast: whether it worked or failed, users get instant, clear feedback—no guessing required.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Responsive UI (Tailwind CSS)</h2>
          <p>Looks great on mobile, tablet, and desktop with Tailwind CSS making styling easy & consistent.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Email Templates</h2>
          <p>Beautiful, responsive HTML email templates are used for verification & password reset emails for a professional feel.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ OTP Input UX Enhancements</h2>
          <p>Typing an OTP? Our app auto-jumps to the next box as you type, lets you paste the whole OTP at once, and intelligently handles backspace!</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Keyboard & Paste Handling</h2>
          <p>The app has smart handlers for <b>handleInput</b>, <b>handleKeyDown</b>, and <b>handlePaste</b> so users can quickly enter OTP codes without frustration!</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ Minimal Dependencies</h2>
          <p>Uses just essential packages: bcryptjs, jsonwebtoken, nodemailer, express—keeping the backend lightweight & readable.</p>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition'>
          <h2 className='font-bold text-xl mb-2'>✅ A Learning Playground 🎓</h2>
          <p>This project isn’t just functional—it’s a playground to learn real-world auth flows, JWTs, cookies, backend APIs, and frontend handling in React!</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className='mt-10 border border-gray-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all text-lg'
      >
        Back to Home
      </button>
    </div>
  )
}

export default Features
