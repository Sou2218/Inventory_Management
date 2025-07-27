import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  "https://inventory-management-flame-gamma.vercel.app",
  "https://inventory-management-a76ghkzqz-sou2218s-projects.vercel.app",
  "https://inventory-management-do53.vercel.app",
  "https://inventory-management-do53-git-main-sou2218s-projects.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ CORS blocked request from:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started @ http://localhost:${PORT}`);
});
