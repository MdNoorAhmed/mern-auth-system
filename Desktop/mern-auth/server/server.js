import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000
connectDB();

// ✅ Allow both local and deployed frontend
const allowedOrigins = [
  'http://localhost:5173',
  'https://your-frontend-url.onrender.com' // <-- replace this with your actual frontend Render URL
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// API Endpoints
app.get('/', (req, res) => res.send("API is Working perfectly fine!!!"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`server started on PORT: ${port}`));
