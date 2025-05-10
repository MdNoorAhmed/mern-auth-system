import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = [
  'http://localhost:5173',
  'https://mern-auth-system-eight.vercel.app'
];

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
exposedHeaders: ['Set-Cookie'] // ✅ add this

}));

app.get('/', (req, res) => res.send("API is Working perfectly fine!!!"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`server started on PORT: ${port}`));
