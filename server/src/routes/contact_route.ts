import { Router, Request, Response } from 'express';
import { handleContactMe } from '../controller/contact_controller';

const router = Router();

// POST: Handle contact form submissions
router.post('/', handleContactMe);

export default router;
