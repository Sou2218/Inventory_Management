import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

const corsConfig = {
  origin: ["https://inventory-management-do53.vercel.app"], 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
};

app.use(cors(corsConfig));
app.options("", cors(corsConfig)); 

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
