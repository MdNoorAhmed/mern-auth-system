import React from 'react'
import { useNavigate } from 'react-router-dom'

const neonGreen = '#39ff14'
const darkBg = '#000000'
const darkGray = '#121212'
const codeBg = '#1a1a1a'
const lightGray = '#d0d0d0'
const headingWhite = '#e6e6e6'

const SectionDivider = () => (
  <hr className="my-10 border-t-2 border-gray-800" />
)

const Docs = () => {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen p-8 sm:p-16 font-mono"
      style={{ backgroundColor: darkBg, color: lightGray }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1
            className="text-4xl font-extrabold mb-2 select-none"
            style={{ color: neonGreen, letterSpacing: '-0.05em' }}
          >
            MERN Auth System
          </h1>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: headingWhite, opacity: 0.95 }}
          >
            Technical Documentation
          </h2>
          <nav className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
            {[
              ['Overview', '#overview'],
              ['Architecture', '#architecture'],
              ['API', '#api'],
              ['Frontend', '#frontend'],
              ['Backend', '#backend'],
              ['Auth Flow', '#authflow'],
              ['OTP & Email', '#otp'],
              ['Security', '#security'],
              ['Stack', '#stack'],
              ['Error Handling', '#errors'],
              ['Resources', '#resources'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:underline"
                style={{ color: neonGreen }}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        {/* Overview */}
        <section id="overview" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: headingWhite, textAlign: 'center' }}>
            Overview
          </h2>
          <p className="mb-4 text-base leading-relaxed">
            <strong style={{ color: neonGreen }}>MERN Auth System</strong> is a full-stack authentication template built with MongoDB, Express.js, React, and Node.js. It includes:
          </p>
          <ul className="list-disc pl-8 text-base space-y-2">
            <li>JWT authentication with HTTP-only cookies for secure sessions</li>
            <li>Registration and login with bcryptjs password hashing</li>
            <li>Email verification and password reset via 6-digit OTP</li>
            <li>React Context API for global state management</li>
            <li>Protected routes and modular, scalable code</li>
            <li>Production-grade error handling and security practices</li>
          </ul>
        </section>

        <SectionDivider />

        {/* Architecture */}
        <section id="architecture" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: headingWhite, textAlign: 'center' }}>
            System Architecture
          </h2>
          <pre
            className="bg-[#111] rounded-md p-6 mb-6 text-sm overflow-x-auto"
            style={{ color: neonGreen, fontWeight: 'bold', textAlign: 'center' }}
          >
{`
┌───────────────┐    HTTPS + Cookies    ┌───────────────┐    MongoDB Driver    ┌───────────────┐
│ React Frontend│ <==================> │ Express API   │ <=================> │   MongoDB     │
│   (Vite SPA)  │                      │  (Node.js)    │                     │ (Atlas/local) │
└───────────────┘                      └───────────────┘                     └───────────────┘
`}
          </pre>
          <ul className="list-disc pl-8 text-base space-y-2">
            <li><strong>Frontend:</strong> React SPA (Vite), Context API, Axios, React Toastify.</li>
            <li><strong>Backend:</strong> Express.js REST API, JWT, cookies, OTP, modular routers.</li>
            <li><strong>Database:</strong> MongoDB (users and OTPs), Mongoose ODM.</li>
            <li><strong>Session:</strong> JWT tokens in HTTP-only cookies, validated on protected endpoints.</li>
          </ul>
        </section>

        <SectionDivider />

        {/* API Reference */}
        <section id="api" className="mb-14 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            API Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-[#2c2c2c]" style={{ color: neonGreen }}>
              <thead>
                <tr className="bg-[#111]">
                  <th className="border border-[#2c2c2c] p-3 text-left">Endpoint</th>
                  <th className="border border-[#2c2c2c] p-3 text-left">Method</th>
                  <th className="border border-[#2c2c2c] p-3 text-left">Purpose</th>
                  <th className="border border-[#2c2c2c] p-3 text-left">Auth</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace' }}>
                {[
                  ['/api/auth/register', 'POST', 'Register user, send OTP', 'No'],
                  ['/api/auth/login', 'POST', 'Authenticate, set JWT cookie', 'No'],
                  ['/api/auth/email-verify', 'POST', 'Verify email via OTP', 'No'],
                  ['/api/auth/reset-password', 'POST', 'Reset password via OTP', 'No'],
                  ['/api/user/profile', 'GET', 'Get authenticated user info', 'Yes'],
                ].map(([endpoint, method, purpose, auth]) => (
                  <tr key={endpoint} className="odd:bg-[#111] even:bg-[#0a0a0a]">
                    <td className="border border-[#2c2c2c] p-3">{endpoint}</td>
                    <td className="border border-[#2c2c2c] p-3">{method}</td>
                    <td className="border border-[#2c2c2c] p-3">{purpose}</td>
                    <td className="border border-[#2c2c2c] p-3">{auth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: lightGray, maxWidth: 700, margin: 'auto' }}>
            All endpoints return JSON. Authenticated endpoints require a valid JWT in an HTTP-only cookie.
          </p>
          <pre className="bg-[#111] rounded-md p-4 mt-4 text-xs overflow-x-auto" style={{ color: neonGreen, maxWidth: 700, margin: 'auto' }}>
{`// Example: Authenticated request (frontend)
axios.get('/api/user/profile', { withCredentials: true })
`}
          </pre>
        </section>

        <SectionDivider />

        {/* Frontend */}
        <section id="frontend" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            Frontend Implementation
          </h2>
          <ul className="list-disc pl-8 text-base space-y-3">
            <li>
              <strong>Routing:</strong> <code>react-router-dom</code> manages SPA routes: Home, Login, EmailVerify, ResetPassword, Features, Docs.
            </li>
            <li>
              <strong>State Management:</strong> <code>AppContext</code> provides user state, login status, backend URL, and helpers.
            </li>
            <li>
              <strong>Authentication Forms:</strong> Login/Register share a form with toggling state, submitting to backend endpoints.
            </li>
            <li>
              <strong>OTP Inputs:</strong> Six input boxes with auto-focus, paste support, and validation for email verification and password reset.
            </li>
            <li>
              <strong>Feedback:</strong> <code>react-toastify</code> for real-time success/error messages.
            </li>
            <li>
              <strong>Axios Config:</strong> All requests use <code>withCredentials: true</code> to send cookies securely.
            </li>
            <li>
              <strong>UI:</strong> Tailwind CSS, dark theme, neon accent colors.
            </li>
          </ul>
          <pre className="bg-[#111] rounded-md p-4 mt-6 text-xs overflow-x-auto" style={{ color: neonGreen, maxWidth: 700, margin: 'auto' }}>
{`// Example: Login/Register submit handler
const onSubmitHandler = async (e) => {
  e.preventDefault();
  axios.defaults.withCredentials = true;
  if (state === 'Sign Up') {
    const { data } = await axios.post(backendurl + '/api/auth/register', { name, email, password });
    if (data.success) {
      setIsLoggedin(true);
      getUserData();
      navigate('/');
    } else {
      toast.error(data.message);
    }
  } else {
    const { data } = await axios.post(backendurl + '/api/auth/login', { email, password });
    if (data.success) {
      setIsLoggedin(true);
      getUserData();
      navigate('/');
    } else {
      toast.error(data.message);
    }
  }
}
`}
          </pre>
        </section>

        <SectionDivider />

        {/* Backend */}
        <section id="backend" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            Backend Implementation
          </h2>
          <ul className="list-disc pl-8 text-base space-y-3">
            <li>
              <strong>Express Server:</strong> Handles JSON parsing, cookie parsing, and CORS for <code>http://localhost:5173</code>.
            </li>
            <li>
              <strong>Routes:</strong> Modular routers for <code>/api/auth</code> (register, login, verify, reset) and <code>/api/user</code> (profile).
            </li>
            <li>
              <strong>Database:</strong> MongoDB with Mongoose schemas for users and OTPs, including expiry timestamps.
            </li>
            <li>
              <strong>Password Hashing:</strong> bcryptjs with 10 salt rounds for secure storage.
            </li>
            <li>
              <strong>JWT:</strong> Tokens signed with secret, 7-day expiry, sent as HTTP-only cookies.
            </li>
            <li>
              <strong>Cookie Security:</strong> Cookies set with <code>httpOnly</code>, <code>secure</code> in production, and <code>sameSite</code>.
            </li>
          </ul>
          <pre className="bg-[#111] rounded-md p-4 mt-6 text-xs overflow-x-auto" style={{ color: neonGreen, maxWidth: 700, margin: 'auto' }}>
{`// Express server setup
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
`}
          </pre>
        </section>

        <SectionDivider />

        {/* Auth Flow */}
        <section id="authflow" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            Authentication Flow (JWT)
          </h2>
          <ol className="list-decimal pl-8 text-base space-y-3">
            <li>
              <strong>Registration:</strong> User submits name, email, password. Password is hashed with bcryptjs.
            </li>
            <li>
              <strong>JWT Token Generation:</strong> On successful login/register, server creates JWT with user ID payload, signed with secret, expires in 7 days.
            </li>
            <li>
              <strong>Cookie Handling:</strong> JWT sent as HTTP-only, secure cookie.
            </li>
            <li>
              <strong>Protected Routes:</strong> Middleware validates JWT, attaches user info to request.
            </li>
            <li>
              <strong>Logout:</strong> Clears the JWT cookie by setting expiry to the past.
            </li>
          </ol>
          <pre className="bg-[#111] rounded-md p-4 mt-6 text-xs overflow-x-auto" style={{ color: neonGreen, maxWidth: 700, margin: 'auto' }}>
{`// JWT Middleware (Express)
const jwt = require('jsonwebtoken');
function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
`}
          </pre>
        </section>

        <SectionDivider />

        {/* OTP & Email */}
        <section id="otp" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            OTP & Email Verification
          </h2>
          <ul className="list-disc pl-8 text-base space-y-3">
            <li>
              <strong>OTP Generation:</strong> 6-digit numeric OTP generated using <code>Math.floor(100000 + Math.random() * 900000)</code>.
            </li>
            <li>
              <strong>Storage:</strong> OTP stored in MongoDB with reference to user ID and expiry (24h for email, 15min for reset).
            </li>
            <li>
              <strong>Email Delivery:</strong> Nodemailer sends HTML emails with OTP (if configured).
            </li>
            <li>
              <strong>Frontend Input:</strong> Six input boxes with auto-focus, paste support, validation.
            </li>
            <li>
              <strong>Verification:</strong> Server checks OTP and expiry, marks user as verified or allows password reset.
            </li>
          </ul>
          <pre className="bg-[#111] rounded-md p-4 mt-6 text-xs overflow-x-auto" style={{ color: neonGreen, maxWidth: 700, margin: 'auto' }}>
{`// OTP Schema (Mongoose)
const OtpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});
`}
          </pre>
        </section>

        <SectionDivider />

        {/* Security */}
        <section id="security" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            Security Practices
          </h2>
          <ul className="list-disc pl-8 text-base space-y-3">
            <li>Use <code>httpOnly</code> cookies for JWT to prevent XSS.</li>
            <li>Hash all passwords with bcryptjs before saving.</li>
            <li>Store OTPs with expiration to prevent reuse.</li>
            <li>Restrict CORS to your frontend origin.</li>
            <li>Store secrets in environment variables, never in code.</li>
            <li>Validate all inputs on both frontend and backend.</li>
            <li>Use secure cookies and HTTPS in production.</li>
          </ul>
        </section>

        <SectionDivider />

        {/* Tech Stack */}
        <section id="stack" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            Tech Stack & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-base">
            <div>
              <strong>Frontend:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>React (Vite)</li>
                <li>Tailwind CSS</li>
                <li>React Router</li>
                <li>React Toastify</li>
              </ul>
            </div>
            <div>
              <strong>Backend:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>cookie-parser</li>
                <li>dotenv</li>
              </ul>
            </div>
            <div>
              <strong>Database:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div>
              <strong>Auth:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>JWT (jsonwebtoken)</li>
                <li>bcryptjs</li>
              </ul>
            </div>
            <div>
              <strong>Email/OTP:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Nodemailer (optional)</li>
              </ul>
            </div>
            <div>
              <strong>Tools:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Postman</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Error Handling */}
        <section id="errors" className="mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            Error Handling & Debugging
          </h2>
          <ul className="list-disc pl-8 text-base space-y-3">
            <li>
              <strong>Frontend:</strong> API errors are caught and displayed via toast notifications. Form validation highlights invalid fields.
            </li>
            <li>
              <strong>Backend:</strong> All routes use try/catch blocks returning JSON errors with meaningful messages and HTTP status codes.
            </li>
            <li>
              <strong>Debugging:</strong> Use browser devtools to inspect network and cookies. Use Postman for API endpoint testing.
            </li>
            <li>
              <strong>Logging:</strong> Console logs for server errors; consider advanced logging for production.
            </li>
          </ul>
          <pre className="bg-[#111] rounded-md p-4 mt-6 text-xs overflow-x-auto" style={{ color: neonGreen, maxWidth: 700, margin: 'auto' }}>
{`// Example: Error response (backend)
return res.status(400).json({ success: false, message: 'Invalid OTP or expired.' });
`}
          </pre>
        </section>

        <SectionDivider />

        {/* Resources */}
        <section id="resources" className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: headingWhite, textAlign: 'center' }}>
            References & Learning
          </h2>
          <ul className="list-disc pl-8 text-base space-y-2">
            <li>
              <a href="https://react.dev/" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                React Official Docs
              </a>
            </li>
            <li>
              <a href="https://expressjs.com/" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                Express.js Documentation
              </a>
            </li>
            <li>
              <a href="https://www.mongodb.com/docs/" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                MongoDB Documentation
              </a>
            </li>
            <li>
              <a href="https://jwt.io/introduction" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                JWT Introduction
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/docs" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                Tailwind CSS Docs
              </a>
            </li>
            <li>
              <a href="https://github.com/" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/" className="hover:underline" style={{ color: neonGreen }} target="_blank" rel="noopener noreferrer">
                Stack Overflow
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="px-10 py-3 rounded-full font-semibold border transition-colors duration-200"
            style={{
              color: neonGreen,
              borderColor: neonGreen,
              backgroundColor: darkGray,
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = neonGreen, e.currentTarget.style.color = darkBg)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = darkGray, e.currentTarget.style.color = neonGreen)}
          >
            ⬅️ Back to Home
          </button>
          <p className="text-xs mt-6" style={{ color: lightGray }}>
            &copy; {new Date().getFullYear()} MERN Auth System Docs.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Docs
