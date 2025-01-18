import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API is running');
});

app.post('/contact', (req: Request, res: Response): Promise<any> => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    console.log('Contact Form Submitted:', { name, email, message });
    return res.status(200).json({ message: 'Form submitted successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
