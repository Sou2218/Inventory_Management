import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

const allowedOrigins = [
  "https://inventory-management-flame-gamma.vercel.app",
  "https://inventory-management-a76ghkzqz-sou2218s-projects.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(" Not allowed by CORS at origin"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server started @ http://localhost:${PORT}`);
});
