import express from 'express';
import cors from 'cors';
import filesRouter from './routes/files';

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', filesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 