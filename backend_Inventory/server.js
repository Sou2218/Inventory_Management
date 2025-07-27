import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'
import { connectDB } from './config/db.js';

dotenv.config();
const app = express()


const corsOptions = {
  origin: 'https://frontend-inventory-git-master-sou2218s-projects.vercel.app',
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

