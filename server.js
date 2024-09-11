// /server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
//import formRouter from './routes/formRouter.js';
//import reportRouter from './routes/reportRouter.js';
import { initializeDb } from './services/dbService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Initialize database
initializeDb().then(() => {
  console.log('Database initialized');
});

// Routes
app.use('/api/form', former);
app.use('/api/report', reportRouter);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
