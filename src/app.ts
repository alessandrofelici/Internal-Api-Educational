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

// TODO how to use router
// TODO how to get username/password
// TODO how to include account functions
app.post('/account', (req, res) => {
  const { username, password } = req.body;
  res.render('the_template', { username, password });
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
