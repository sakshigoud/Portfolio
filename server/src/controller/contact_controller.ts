import { Request, Response } from "express";

export function handleContactMe(req: Request, res: Response) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!name || !email || !message) {
        res.status(400).json({ error: 'All fields are required' });
    } else {
        console.log('Contact Form Submitted:', { name, email, message });
        res.status(200).json({ message: 'Form submitted successfully' });
    }

}
