import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Allow these origins (add your Vercel frontend URL after deploying frontend)
const allowedOrigins = [
  'http://localhost:5173',
  'https://mern-auth-system-gules.vercel.app/' // <-- Replace with your actual Vercel URL after deploying frontend
];

// CORS configuration
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Endpoints
app.get('/', (req, res) => res.send("API is Working perfectly fine!!!"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
