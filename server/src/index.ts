import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact_route';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Portfolio Backend is running!');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
