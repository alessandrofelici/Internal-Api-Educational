import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, './static/home/index.html'));
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
