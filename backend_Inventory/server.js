import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'
import { connectDB } from './config/db.js';

dotenv.config();
const app = express()


const allowedOrigins = [
  'http://localhost:5173', 
  'https://inventory-management-do53.vercel.app', 
  'https://inventory-management-do53-git-main-sou2218s-projects.vercel.app', 
  'https://inventory-management-git-main-sou2218s-projects.vercel.app' 
];


const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('❌ Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));
const PORT = process.env.PORT || 4000

app.use (express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});


app.listen(PORT, ()=>{
    connectDB();
    console.log(`server started @http://localhost:${PORT}`)
})

