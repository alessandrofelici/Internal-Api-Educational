import express from 'express';
import accountRoutes from './routes/accountRoutes';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';

const app = express();

app.use(express.json());

// Static
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.use('/api/accounts', accountRoutes);
app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, './static/home/index.html'));
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
