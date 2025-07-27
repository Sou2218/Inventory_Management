import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();


app.use(cors());

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send(' Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(` Server started at http://localhost:${PORT}`);
});
