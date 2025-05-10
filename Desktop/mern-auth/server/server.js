// server.js

import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

// ✅ Add Vercel frontend URL here
const allowedOrigins = [
  'http://localhost:5173',
  'https://mern-auth-system-eight.vercel.app'
];

// ✅ CORS + cookie handling for cross-origin
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.get('/', (req, res) => res.send("API is Working perfectly fine!!!"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ✅ Start
app.listen(port, () => console.log(`server started on PORT: ${port}`));
